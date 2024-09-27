import axios from "axios";

const customInstance = axios.create({
  baseURL: "https://interview-api-8icc.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default customInstance;
