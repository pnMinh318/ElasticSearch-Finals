import { Router } from "express";
import { getBlogs } from "../controllers/blogController.js";
const blogRouter = Router();

blogRouter.get("/:id", getBlogs);
blogRouter.get("/", getBlogs);
blogRouter.post("/", getBlogs);

export default blogRouter;
