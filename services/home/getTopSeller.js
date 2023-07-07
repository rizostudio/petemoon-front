import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";

export const getTopSeller = async () => {
  try {
    const response = await httpRequest.get(`/product/top_sellers`);
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    console.log(error);
    return errorResponse(error.response.data.errors);
  }
};
