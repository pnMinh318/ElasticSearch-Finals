import { Router } from "express";
import {
  postComment,
  getCommentByBlogId,
  deleteComment,
  updateComment,
} from "../controllers/commentController.js";

const commentsRouter = Router();

commentsRouter
  .route("/blogs/:blogId")
  .post(postComment)
  .get(getCommentByBlogId);
commentsRouter.route("/:id").delete(deleteComment).put(updateComment);
export default commentsRouter;
