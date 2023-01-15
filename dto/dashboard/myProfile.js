export const domainUserInfo = (data) => {
  return {
    firstname: data.first_name,
    lastname: data.last_name,
    phoneNumber: data.phone_number,
    email: data.email,
  };
};
