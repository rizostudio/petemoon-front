import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";

export const login = async (phoneNumber) => {
  try {
    const response = await httpRequest.post("/accounts/otp/", {
      phone_number: phoneNumber,
    });
    const data = response.data.data;
    console.log(data);
    return successResponse(data);
  } catch (error) {
    return errorResponse(error.response.data.errors);
  }
};
