import { errorResponse, successResponse } from "../../error";
import { httpRequest } from "../../http";

export const chargeWallet = async (price) => {
  try {
    const response = await httpRequest.post("/dashboard/wallet", price);
    const data = response.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error.response.data.errors);
  }
};
