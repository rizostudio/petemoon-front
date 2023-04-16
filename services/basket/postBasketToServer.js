import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";

export const postBasketToServer = async (payload, addressId) => {
  console.log(addressId);
  const cart = { ...payload };
  try {
    const response = await httpRequest.post("/cart/", {
      products: payload,
      address: addressId,
    });
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error?.response?.data?.errors);
  }
};
