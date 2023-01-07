import axios from "axios";

const api = axios.create({ baseURL: "https://api.petemoon.com/" });

export const allowCookie = ({ queryParams = {}, headers = {} } = {}) => {
  return {
    headers,
    params: queryParams,
    withCredentials: true,
  };
};

export default {
  get: api.get,
  post: api.post,
  patch: api.patch,
};
