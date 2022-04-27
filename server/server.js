import express from "express";
import cors from "cors";
import blogRouter from "./routes/blogRouter.js";

const app = express();
const mongoURI =
  "mongodb+srv://nhatminh:1@cluster0.svhtn.mongodb.net/MovieReviewBlog_ES?retryWrites=true&w=majority";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.listen(5000, () => {
  console.log(`Server is running`);
});
app.use(cors());
app.use(express.json());
app.use("/api/blogs", blogRouter);
