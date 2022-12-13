import axios from "axios";

export const api = axios.create({
  baseURL: "http://dc95-34-124-179-75.ngrok.io",
});

export default api;
