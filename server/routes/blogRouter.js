import { Router } from "express";
import {
  getBlogs,
  postBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";
const blogRouter = Router();

blogRouter.get("/:id", getBlogs);
blogRouter.put("/:id", updateBlog);
blogRouter.delete("/:id", deleteBlog);
blogRouter.get("/", getBlogs);
blogRouter.post("/", postBlog);

export default blogRouter;
