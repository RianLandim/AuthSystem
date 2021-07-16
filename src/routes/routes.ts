import { Router } from "express";

import authMiddleware from "../app/middlewares/authMiddleware";

import usersController from "../controllers/usersController";
import authController from "../controllers/authController";

const router = Router();

router.post('/users', usersController.store);
router.post('/auth', authController.auth);
router.get('/users', authMiddleware, usersController.index);

export default router;
