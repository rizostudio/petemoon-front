import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";

export const postAddress = async (addressId) => {
  try {
    const response = await httpRequest.post("/cart/order", {
      address: addressId,
      shipping_method: 1,
    });
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error?.response?.data?.errors);
  }
};
