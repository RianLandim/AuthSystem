import {Response, Request} from "express";
import { getRepository } from 'typeorm';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../app/models/User";

class AuthController{
    async auth(req: Request, res: Response){
        const repository = getRepository(User);        
        const { email, password } = req.body;

        const user = await repository.findOne({where : { email }});

        if(!user){
            return res.sendStatus(401);
        }

        const isValidPassword = await bcrypt.compare(password, user.password)

        if(!isValidPassword){
            return res.sendStatus(401);
        }

        const token = jwt.sign({id: user.id}, process.env.PASS , {expiresIn: '1d'});

        return res.json({
            user,
            token,
        });

    };
};

export default new AuthController();