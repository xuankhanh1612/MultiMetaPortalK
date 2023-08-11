import { Api } from "../../common/utils/request";
import { BASE_API_URL } from "../../common/constants";

const apiGetListCategory = (params) => {
  return Api.get(`${BASE_API_URL}/category/`, params);
};

export const HomeService = {
  apiGetListCategory,
};
