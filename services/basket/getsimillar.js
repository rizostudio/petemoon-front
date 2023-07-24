import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";

export const getsimillar = async (simillar) => {
  try {
    const response = await httpRequest.post("/cart/similar_products", simillar);
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error?.response?.data?.errors);
  }
};
