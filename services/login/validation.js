import { errorResponse, successResponse } from "@/dto";
import { apiPostVerifyOTPBody, domainTokenData } from "@/dto/login/validation";
import api, { allowCookie } from "@/services";

const VERIFY_OTP_API = "accounts/otp/verify/";
export const postVerifyOTP = async (confirmationCode) => {
  try {
    const response = await api.post(
      VERIFY_OTP_API,
      apiPostVerifyOTPBody(confirmationCode),
      allowCookie()
    );
    const domainData = domainTokenData(response.data.data);
    return successResponse(domainData);
  } catch (err) {
    return errorResponse(err?.response?.data?.errors ?? ["Network Error!"]);
  }
};
