import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";

export const getSingleDoctor = async (vet) => {
  try {
    const response = await httpRequest.get(`/vet/vet-single/${vet}`);
    console.log(response);
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error?.response?.data?.errors);
  }
};
