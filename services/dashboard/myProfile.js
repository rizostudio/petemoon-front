import api, { allowCookie } from "@/services";

const GET_USER_INFO_API = "dashboard/user-profile";
export const getUserInfo = async () => {
  try {
    const response = await api.get(GET_USER_INFO_API, allowCookie());
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
