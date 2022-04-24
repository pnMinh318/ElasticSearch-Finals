import mongoose from "mongoose";
import movieModel from "./movie";

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  movie: {
    type: movieModel,
    required: true,
  },
  content: {
    type: [],
    default: [],
  },
  rating: {
    type: [],
    default: [],
  },
  author: {
    type: String,
  },
});

const blogModel = mongoose.model("Article", movieSchema);
export default blogModel;
