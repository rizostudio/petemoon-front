export const domainUserInfo = (data) => {
  return {
    firstname: data.first_name,
    lastname: data.last_name,
    phoneNumber: data.phone_number,
    email: data.email,
  };
};

export const apiPatchUserInfoBody = (userInfo) => {
  return {
    first_name: userInfo.firstname,
    last_name: userInfo.lastname,
    phone_number: userInfo.phoneNumber,
    email: userInfo.email,
  };
};
