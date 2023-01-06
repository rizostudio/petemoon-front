import axios from "axios";

const api = axios.create({ baseURL: "https://api.petemoon.com/" });

export default {
  get: api.get,
  post: api.post,
  patch: api.patch,
};
