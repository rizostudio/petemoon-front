import { errorResponse, successResponse } from "../../error";
import { httpRequest } from "../../http";

export const getListVisit = async () => {
  try {
    const response = await httpRequest.get("/vet/normal-user-visits");
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error.response.data.errors);
  }
};
