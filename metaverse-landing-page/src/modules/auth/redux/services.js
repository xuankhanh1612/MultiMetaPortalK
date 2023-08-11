import { Api } from "../../common/utils/request";
import { BASE_API_URL } from "../../common/constants";

const login = (data) => {
  return Api.post(`${BASE_API_URL}/token/`, data);
};

const signup = (data) => {
  return Api.post(`${BASE_API_URL}/user/sigup`, data);
};

const getUserInfo = () => {
  return Api.get(`${BASE_API_URL}/user/get_info/`);
};

export const AuthService = {
  login,
  signup,
  getUserInfo,
};
