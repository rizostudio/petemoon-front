import { errorResponse, successResponse } from "../../error";
import { httpRequest } from "../../http";

export const editAddress = async (petInfo, id) => {
  try {
    const response = await httpRequest.patch(`/dashboard/pet/${id}`, petInfo);
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error.response.data.errors);
  }
};
