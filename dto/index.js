export const successResponse = (data) => ({
  success: true,
  data,
});

export const errorResponse = (errors) => ({
  success: false,
  errors,
});
