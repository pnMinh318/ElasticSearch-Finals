import { Router } from "express";
import {
  postComment,
  getCommentByBlogId,
  deleteComment,
} from "../controllers/commentController.js";

const commentsRouter = Router();

commentsRouter
  .route("/blogs/:blogId")
  .post(postComment)
  .get(getCommentByBlogId);
commentsRouter.route("/:id").delete(deleteComment);
export default commentsRouter;
