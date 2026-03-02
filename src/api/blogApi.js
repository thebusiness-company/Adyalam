import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000", // change in production
});

export const fetchBlogs = async () => {
  const { data } = await API.get("/blogs");
  return data;
};