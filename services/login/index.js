import { errorResponse, successResponse } from "@/dto";
import { apiPostSendOTPBody } from "@/dto/login";
import api from "@/services";

const SEND_OTP_API = "accounts/otp/";
export const postSendOTP = async (phoneNumber) => {
  try {
    const response = await api.post(
      SEND_OTP_API,
      apiPostSendOTPBody(phoneNumber)
    );
    const data = response.data.data;
    return successResponse(data);
  } catch (err) {
    return errorResponse(err.response.data.errors);
  }
};
