export const successResponse = (data = {}) => ({
  success: true,
  data,
});

const DEFAULT_ERROR = "Unknown Error!";
export const errorResponse = (errors = [DEFAULT_ERROR]) => ({
  success: false,
  errors,
});
