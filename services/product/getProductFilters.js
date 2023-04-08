import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";

export const getProductFilter = async () => {
  try {
    const response = await httpRequest.get(`/product/filters/`);
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error.response?.data?.errors);
  }
};
