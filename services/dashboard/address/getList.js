import { errorResponse, successResponse } from "../../error";
import { httpRequest } from "../../http";

export const getListAddress = async () => {
  try {
    const response = await httpRequest.get(`/dashboard/address/`);
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error.response.data.errors);
  }
};
