import { Router } from "express";
import {
  lockUser,
  login,
  register,
  updateUser,
} from "../controllers/userController";

const userRouter = Router();

userRouter.route("/login").post(login);
userRouter.route("/register").post(register);
userRouter.route("/:id").put(updateUser).delete(lockUser);
export default userRouter;
