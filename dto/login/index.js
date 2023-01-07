export const apiPostSendOTPBody = (phoneNumber) => {
  return {
    phone_number: phoneNumber,
  };
};
