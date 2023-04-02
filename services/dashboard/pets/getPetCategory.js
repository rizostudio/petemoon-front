import { errorResponse, successResponse } from "../../error";
import { httpRequest } from "../../http";

export const getPetCategory = async (id) => {
  const idd = String(id);
  try {
    const response = await httpRequest.get(`/dashboard/pet-category/${idd}`);
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error.response.data.errors);
  }
};
