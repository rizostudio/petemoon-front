// import axois from "axios";
// export default class http {
//   baseURL;
//   instance;

//   constructor() {
//     this.baseURL = "https://api.petemoon.com";
//     this.instance = axois.create({
//       withCredentials: "true",
//     });
//   }

//   get(endpoint, config = {}) {
//     return this.instance.get(`${this.baseURL}${endpoint}`, config);
//   }

//   post(endpoint, data, config) {
//     return this.instance.post(`${this.baseURL}${endpoint}`, data, config);
//   }

//   put(endpoint, data, config) {
//     return this.instance.put(`${this.baseURL}${endpoint}`, data, config);
//   }

//   patch(endpoint, data, config = {}) {
//     return this.instance.patch(`${this.baseURL}${endpoint}`, data, config);
//   }

//   delete(endpoint, config = {}) {
//     return this.instance.delete(`${this.baseURL}${endpoint}`, config);
//   }
// }
import { isLogin, refreshTokenLS, userDataStorage } from "@/localSttorage/auth";
import axios from "axios";

const httpRequest = axios.create({
  baseURL: "https://api.petemoon.com",
  withCredentials: true,
});
// const router = useRouter();
httpRequest.interceptors.response.use(
  async function (response) {
    return response;
  },
  async function (error) {
    console.log("first error");
    const originalReq = error.config;
    if (
      error.response.status === 401 &&
      originalReq.url === "https://api.petemoon.com/accounts/refresh/"
    ) {
      refreshTokenLS.remove();
      userDataStorage.remove();
      isLogin.remove();
      window.location.href("http://localhost:3000/auth/login");
      return Promise.reject(error);
    }
    if (error.response.status == 401 && !originalReq._retry) {
      originalReq._retry = true;
      const refreshToken = refreshTokenLS.get();
      axios.defaults.withCredentials = true;
      return axios
        .post("https://api.petemoon.com/accounts/refresh/", {
          refresh: refreshToken,
        })
        .then((response) => {
          console.log(response.data.data);
          refreshTokenLS.set(response.data.data.refresh_token);
          axios.defaults.withCredentials = true;
          return httpRequest(originalReq);
        })
        .catch((error) => {
          console.log("first");
        });
    }
    return Promise.reject(error);
  }
);
export { httpRequest };
