export const apiPatchRegisterBody = (signupData) => {
  return {
    first_name: signupData.firstname,
    last_name: signupData.lastname,
    email: signupData.email,
    referal_code: signupData.refCode,
  };
};
