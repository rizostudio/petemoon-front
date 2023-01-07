import { errorResponse, successResponse } from "@/dto";
import { apiPostRefreshTokenBody } from "@/dto/shared";
import { refreshToken } from "@/localStorage";
import api, { allowCookie } from "@/services";

const REFRESH_TOKEN_API = "accounts/refresh/";
export const PostRefreshToken = async () => {
  try {
    const response = await api.post(
      REFRESH_TOKEN_API,
      apiPostRefreshTokenBody(refreshToken.get()),
      allowCookie()
    );
    return successResponse();
  } catch (err) {
    return errorResponse(err?.response?.data?.errors);
  }
};
