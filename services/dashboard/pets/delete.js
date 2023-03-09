import { errorResponse, successResponse } from "../../error";
import { httpRequest } from "../../http";

export const deletePet = async (id) => {
  try {
    const response = await httpRequest.delete(`/dashboard/pet/${id}`);
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error.response.data.errors);
  }
};
