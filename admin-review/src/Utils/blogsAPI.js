import axios from "axios";
import RequestApi from "./RequestApi";

export const getBlogsList = async () => {
  const res = await axios.get("http://localhost:5000/api/blogs");
  return res;
};

export const getBlogDetail = async (id) => {
  const res = await axios.get(`http://localhost:5000/api/blogs/${id}`);
  return res;
};
export const insertBlog = async (id, blog) => {
  const res = await axios.post(`http://localhost:5000/api/blogs`, {
    blog,
  });
  return res;
};

export const updateBlog = async (id, blog) => {
  console.log(id, blog);
  const res = await axios.put(`http://localhost:5000/api/blogs/${id}`, {
    ...blog,
  });
  return res;
};

export const deleteBlog = async (id) => {
  const res = await axios.delete(`http://localhost:5000/api/blogs/${id}`);
  return res;
};
