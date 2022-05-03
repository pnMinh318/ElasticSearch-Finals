import express from "express";
import cors from "cors";
import blogRouter from "./routes/blogRouter.js";
import userRouter from "./routes/userRouter.js";

const app = express();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.listen(5000, () => {
  console.log(`Server is running`);
});
app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/blogs", blogRouter);
