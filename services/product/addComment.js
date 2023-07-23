import { errorResponse, successResponse } from "../error";
import { httpRequest } from "../http";

export const createComment = async (slug, comment) => {
  try {
    const response = await httpRequest.post(
      `product/create_comment/?slug=${slug}`,
      {
        title: comment.title,
        text: comment.description,
        rate: comment.rate,
      }
    );
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error.response.data.errors);
  }
};
