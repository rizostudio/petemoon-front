import { errorResponse, successResponse } from "@/dto";
import api, { allowCookie } from "@/services";

const GET_ADDRESS_API = "dashboard/address";
export const getAddresses = () => {
  try {
    const response = api.get(GET_ADDRESS_API, allowCookie());
    console.log(response.data.data);
    // const domainData = domainAddress(response.data.data);
    // return successResponse(domainData);
  } catch (err) {
    return errorResponse(err?.response?.data?.errors);
  }
};
