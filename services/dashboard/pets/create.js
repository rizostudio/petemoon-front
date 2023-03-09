import { errorResponse, successResponse } from "../../error";
import { httpRequest } from "../../http";

export const createPet = async (petInfo) => {
  const form = new FormData();
  form.append("name", petInfo.name);
  form.append("pet_type", petInfo.pet_type);
  form.append("pet_category", petInfo.pet_category);
  form.append("sex", petInfo.sex);
  form.append("birth_date", petInfo.birth_date);
  form.append("weight", petInfo.weight);
  form.append("last_vaccine_date", petInfo.last_vaccine_date);
  form.append("underlying_disease", petInfo.underlying_disease);
  form.append(
    "last_anti_parasitic_vaccine_date",
    petInfo.last_anti_parasitic_vaccine_date
  );
  form.append(petInfo.petImage);
  try {
    const response = await httpRequest.post("/dashboard/pet/", form);
    const data = response.data.data;
    return successResponse(data);
  } catch (error) {
    return errorResponse(error.response.data.errors);
  }
};
