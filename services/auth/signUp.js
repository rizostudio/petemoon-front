import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";
import { userDataStorage, isLogin } from "@/localSttorage/auth";
export const Register = async (signupData) => {
  try {
    const response = await httpRequest.patch("/accounts/register/", signupData);
    const data = response.data.data;
    if (data.user_data) {
      userDataStorage.set(JSON.stringify(data.user_data));
      isLogin.set(true);
    }
    return successResponse(data);
  } catch (error) {
    console.log(error);
    return errorResponse(error?.response?.data?.errors);
  }
};
