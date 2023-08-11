import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";

export const handleDiscountCode = async (code) => {
  try {
    const response = await httpRequest.post("/payment/discount-calculator/", {
      code: code,
    });
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error?.response?.data?.errors);
  }
};
