import { Api } from "../../common/utils/request";
import { BASE_API_URL } from "../../common/constants";

const apiGetWebsiteByDomain = (data) => {
  return Api.get(`${BASE_API_URL}/metagroups/`, data);
};
export const CacheService = {
  apiGetWebsiteByDomain,
};
