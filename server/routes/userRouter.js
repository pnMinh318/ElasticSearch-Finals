import { Router } from "express";
import { login, register } from "../controllers/userController.js";

const userRouter = Router();

userRouter.route("/login").post(login);
userRouter.route("/register").post(register);
// userRouter.route("/:id").put(updateUser).delete(lockUser);

export default userRouter;
