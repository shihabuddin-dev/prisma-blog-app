import express, { Router } from "express";
import auth, { UserRole } from "../../middlewares/auth";
import { postController } from "./post.controller";

const router = express.Router();

router.post("/", auth(UserRole.USER), postController.createPost);

export const postRouter: Router = router;
