import { errorResponse, successResponse } from "@/dto";
import { apiPostRefreshTokenBody } from "@/dto/shared";
import api, { allowCookie } from "@/services";

const REFRESH_TOKEN_API = "accounts/refresh/";
export const PostRefreshToken = async (refreshToken) => {
  try {
    console.log("refreshTokenToSend: ", refreshToken);
    const response = await api.post(
      REFRESH_TOKEN_API,
      apiPostRefreshTokenBody(refreshToken),
      allowCookie()
    );
    return successResponse();
  } catch (err) {
    return errorResponse(err?.response?.data?.errors);
  }
};
