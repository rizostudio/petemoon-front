import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";

export const reserv = async (vet) => {
  try {
    const response = await httpRequest.post(`/vet/visit`, vet);
    console.log(response);
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error?.response?.data?.errors);
  }
};
