import { errorResponse, successResponse } from "../../error";
import { httpRequest } from "../../http";

export const getPetType = async () => {
  try {
    const response = await httpRequest.get("/dashboard/pet-type");
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error?.response?.data?.errors);
  }
};
