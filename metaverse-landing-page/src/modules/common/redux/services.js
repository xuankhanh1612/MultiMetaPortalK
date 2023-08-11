import { Api } from "../../common/utils/request";
import { BASE_API_URL } from "../../common/constants";

const apiGetUserInfoByToken = () => {
  return Api.get(`${BASE_API_URL}/auth/user_info/`);
};


export const CommonService = {
    apiGetUserInfoByToken,
};