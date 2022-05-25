import { Router } from "express";
import {
  postComment,
  getCommentByBlogId,
} from "../controllers/commentController.js";

const commentsRouter = Router();

commentsRouter.route("/blogs/:blogId").post(postComment).get(getCommentByBlogId);
commentsRouter.route("/:id");
export default commentsRouter;
