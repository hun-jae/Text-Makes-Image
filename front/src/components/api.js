import axios from "axios";

export const api = axios.create({
  baseURL: "http://9dad-34-90-248-146.ngrok.io",
});

export default api;
