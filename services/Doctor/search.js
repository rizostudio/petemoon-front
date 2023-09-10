import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";

export const vetSearch = async (slug) => {
  const queryParams = new URLSearchParams();
  queryParams.set("search", slug);
  try {
    const response = await httpRequest.get(
      `/vet/search?${queryParams.toString()}`
    );
    const data = response.data;
    // console.log(response);
    return successResponse(data);
  } catch (error) {
    return errorResponse(error.response.data.errors);
  }
};
