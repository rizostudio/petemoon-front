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
    console.log(originalReq);

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
          if (error.response.status == 400) {
            refreshTokenLS.remove();
            userDataStorage.remove();
            isLogin.remove();
            window.location.href = "https://app.petemoon.com/auth/login";
          }
        });
    }
    return Promise.reject(error);
  }
);
export { httpRequest };
