import { OtpId } from "@/localStorage";

export const apiPostVerifyOTPBody = (confirmationCode) => {
  return {
    otp_id: OtpId.get(),
    otp_code: confirmationCode.join(""),
  };
};

export const domainTokenData = (apiTokenData) => {
  return {
    token: apiTokenData.refresh_token,
  };
};
