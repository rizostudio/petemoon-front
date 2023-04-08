import { errorResponse, successResponse } from "../../error";
import { httpRequest } from "../../http";

export const createAddress = async (address) => {
  try {
    const response = await httpRequest.post("/dashboard/address/", address);
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error.response.data.errors);
  }
};
