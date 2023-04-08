import { errorResponse, successResponse } from "../../error";
import { httpRequest } from "../../http";

export const getSinglePet = async (id) => {
  try {
    const response = await httpRequest.get(`/dashboard/single-pet/${id}`);
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error.response.data.errors);
  }
};
