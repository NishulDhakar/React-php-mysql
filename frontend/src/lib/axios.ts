import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true, // must be true for Sanctum cookies
});

export default api;
