import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";

export const createBookmark = async (id) => {
  try {
    const response = await httpRequest.post("dashboard/bookmark", {
      product_id: id,
    });
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error.response.data.errors);
  }
};
