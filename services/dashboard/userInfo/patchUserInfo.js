import { errorResponse, successResponse } from "../../error";
import { httpRequest } from "../../http";

export const editUserData = async (userInfo) => {
  const dataForServer = {
    first_name: userInfo.first_name,
    last_name: userInfo.last_name,
    email: userInfo.email,
    birth_date: userInfo.birth_date,
  };
  try {
    const response = await httpRequest.patch(
      `/dashboard/user-profile`,
      dataForServer
    );
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error?.response?.data?.errors);
  }
};
