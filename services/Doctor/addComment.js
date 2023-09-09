import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";

export const createCommentForDoctor = async (slug, comment) => {
  try {
    const response = await httpRequest.post(`vet/create_comment/${slug}`, {
      title: comment.title,
      text: comment.description,
      rate: comment.rate,
    });
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error.response.data.errors);
  }
};
