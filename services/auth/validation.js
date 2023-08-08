import { errorResponse, successResponse } from "../error";
import { OtpId, userDataStorage, isLogin } from "@/localSttorage/auth";
import { httpRequest } from "../http";
export const validationOtp = async (confirmationCode) => {
  try {
    const response = await httpRequest.post("/accounts/otp/verify/", {
      otp_id: OtpId.get(),
      otp_code: confirmationCode.join(""),
    });
    const data = response.data.data;

    return successResponse({
      isRegistered: data.is_registered,
      refreshToken: data.refresh_token,
      userData: data.user_data,
    });
  } catch (error) {
    return errorResponse(err?.response?.data?.errors ?? ["Network Error!"]);
  }
};
