import { errorResponse, successResponse } from "@/dto";
import { apiPatchRegisterBody } from "@/dto/signup";
import api, { allowCookie } from "@/services";

const PATCH_REGISTER_API = "accounts/register/";
export const PatchRegister = async (signupData) => {
  try {
    const response = await api.patch(
      PATCH_REGISTER_API,
      apiPatchRegisterBody(signupData),
      allowCookie()
    );
    return successResponse();
  } catch (err) {
    return errorResponse(err?.response?.data?.errors);
  }
};
