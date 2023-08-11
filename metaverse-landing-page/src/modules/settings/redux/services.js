import { Api, UploadFile } from "../../common/utils/request";
import { BASE_API_URL } from "../../common/constants";

const apiCreateMedia = (data) => {
  return UploadFile(`${BASE_API_URL}/upload/media/`, data);
};
const apiGetListMedia = (data) => {
  return Api.get(`${BASE_API_URL}/metaverse/medias/`, data);
};

export const SettingService = {
  apiGetListMedia,
  apiCreateMedia
};
