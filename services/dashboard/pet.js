import { errorResponse, successResponse } from "@/dto";
import api, { allowCookie } from "@/services";

const GET_PET_API = "dashboard/pet/";
export const getPets = async () => {
  try {
    const response = await api.get(GET_PET_API, allowCookie());
    console.log("pet data: ", response.data.data);
    // const domainData = domainPetData(response.data.data);
    // return successResponse(domainData);
  } catch (err) {
    return errorResponse(err?.response?.data?.errors);
  }
};
