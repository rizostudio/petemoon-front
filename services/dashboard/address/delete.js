import { errorResponse, successResponse } from "../../error";
import { httpRequest } from "../../http";

export const deleteAddress = async (id) => {
  try {
    const response = await httpRequest.delete(`/dashboard/address/${id}`);
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error.response.data.errors);
  }
};
