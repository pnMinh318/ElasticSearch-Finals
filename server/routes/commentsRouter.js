import { Router } from "express";
import {
  postComment,
  getCommentByBlogId,
} from "../controllers/commentController.js";

const commentsRouter = Router();

commentsRouter.route("/blogs/:blogId").post(postComment);
commentsRouter.route("/:id").get(getCommentByBlogId);
export default commentsRouter;
