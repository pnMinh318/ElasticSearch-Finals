import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
  name: String,
  duration: Number,
  director: String,
  actor: String,
  country: String,
  genre: String,
  premiere: String,
  required: true,
});

const movieModel = mongoose.model("Movie", movieSchema);
export default movieModel;
