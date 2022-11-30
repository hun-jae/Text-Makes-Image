import axios from "axios";

export const api = axios.create({
  baseURL: "http://8237-35-203-183-167.ngrok.io",
});

export default api;
