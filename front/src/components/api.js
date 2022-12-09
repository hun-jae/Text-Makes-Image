import axios from "axios";

export const api = axios.create({
  baseURL: "http://8aed-34-142-206-131.ngrok.io",
});

export default api;
