import axios from "axios";

export const api = axios.create({
  baseURL: "http://dc1e-35-199-154-102.ngrok.io",
});

export default api;
