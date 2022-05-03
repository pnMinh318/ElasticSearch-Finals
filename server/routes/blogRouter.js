import { Router } from "express";
import { requireSignin } from "../middlewares/authenticate.js";
import {
  getBlogs,
  postBlog,
  updateBlog,
  deleteBlog,
  searchBlog,
} from "../controllers/blogController.js";
const blogRouter = Router();

blogRouter.route("/search").get(searchBlog);
blogRouter.route("/").get(getBlogs);
blogRouter
  .route("/:id")
  .get(getBlogs)
  .post(postBlog)
  .put(updateBlog)
  .delete(deleteBlog);
// blogRouter.post("/", postBlog);
// blogRouter.get("/:id", getBlogs);
// blogRouter.put("/:id", updateBlog);
// blogRouter.delete("/:id", deleteBlog);
export default blogRouter;
