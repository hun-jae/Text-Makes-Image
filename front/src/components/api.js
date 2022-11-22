import axios from "axios";

export const api = axios.create({
  baseURL: "http://9386-34-147-6-178.ngrok.io",
});

export default api;
