import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";

export const getVisitTime = async (id, date) => {
  console.log(date);
  try {
    const response = await httpRequest.get(
      `/vet/available-reserve/${id}?date=${date}`
    );
    const data = response.data.data;

    return successResponse(data);
  } catch (error) {
    console.log(error);
    return errorResponse(error?.response?.data?.errors);
  }
};
