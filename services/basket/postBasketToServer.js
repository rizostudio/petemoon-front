import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";

export const postBasketToServer = async (payload) => {
  console.log(payload);
  const cart = { ...payload };
  try {
    const response = await httpRequest.post("/cart/", { cart: payload });
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error?.response?.data?.errors);
  }
};
