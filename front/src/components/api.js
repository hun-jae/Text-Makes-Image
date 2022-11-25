import axios from "axios";

export const api = axios.create({
  baseURL: "http://9d78-34-91-224-79.ngrok.io",
});

export default api;
