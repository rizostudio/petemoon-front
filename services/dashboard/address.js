import { errorResponse, successResponse } from "@/dto";
import api, { allowCookie } from "@/services";
import { apiAddress, domainAddresses } from "@/dto/dashboard/address";

const GET_ADDRESS_API = "dashboard/address/";
export const getAddresses = async () => {
  try {
    const response = await api.get(GET_ADDRESS_API, allowCookie());
    const domainData = domainAddresses(response.data.data);
    return successResponse(domainData);
  } catch (err) {
    return errorResponse(err?.response?.data?.errors ?? []);
  }
};

const POST_ADDRESS_API = "dashboard/address/";
export const postAddNewAddress = async (newAddress) => {
  try {
    const response = await api.post(
      POST_ADDRESS_API,
      apiAddress(newAddress),
      allowCookie()
    );
    return successResponse();
  } catch (err) {
    return errorResponse(err?.response?.data?.errors ?? []);
  }
};

const fetchPatchEditAddress = (id) => `dashboard/address/${id}`;
export const patchEditAddress = async (id, newAddress) => {
  try {
    const response = await api.patch(
      fetchPatchEditAddress(id),
      apiAddress(newAddress),
      allowCookie()
    );
    return successResponse();
  } catch (err) {
    return errorResponse(err?.response?.data?.errors ?? []);
  }
};

const fetchDeleteAddress = fetchPatchEditAddress;
export const deleteAddress = async (id) => {
  try {
    const response = await api.delete(fetchDeleteAddress(id), allowCookie());
    return successResponse();
  } catch (err) {
    return errorResponse(err?.response?.data?.errors ?? []);
  }
};
