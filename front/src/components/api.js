import axios from "axios";

export const api = axios.create({
  baseURL: "http://6af4-34-91-224-79.ngrok.io",
});

export default api;
