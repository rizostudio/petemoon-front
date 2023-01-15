import { errorResponse, successResponse } from "@/dto";
import { domainUserInfo } from "@/dto/dashboard/myProfile";
import api, { allowCookie } from "@/services";

const GET_USER_INFO_API = "dashboard/user-profile";
export const getUserInfo = async () => {
  try {
    const response = await api.get(GET_USER_INFO_API, allowCookie());
    console.log("data: ", response.data);
    const domainData = domainUserInfo(response.data.data);
    return successResponse(domainData);
  } catch (err) {
    return errorResponse(err?.response?.data?.errors ?? ["error!"]);
  }
};
