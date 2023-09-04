import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";

export const getListOfDoctor = async (slug) => {
  try {
    const response = await httpRequest.get(`/vet/vet-list?${slug}`);
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error?.response?.data?.errors);
  }
};
