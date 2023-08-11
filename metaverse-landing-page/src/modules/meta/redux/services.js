import { Api } from "../../common/utils/request";
import { BASE_API_URL } from "../../common/constants";
import queryString from "query-string";

const getMetaList = (params) => {
  const stringified = queryString.stringify(params, {
    skipEmptyString: true,
    skipNull: true,
  });

  return Api.get(`${BASE_API_URL}/model_3d/?${stringified}`);
};

const getMetaDetails = (id) => {
  return Api.get(`${BASE_API_URL}/model_3d/${id}`);
};

const searchByName = (params) => {
  const stringified = queryString.stringify(params, {
    skipEmptyString: true,
    skipNull: true,
  });
  return Api.get(`${BASE_API_URL}/model_3d/search_by_name/?${stringified}`);
};

const getList3DmodelBỵMetaId = (meta_id) => {
  return Api.get(`${BASE_API_URL}/metaverse/${meta_id}/meta_model_3d/`);
};

const createMeta3DModel = (params) => {
  return Api.post(`${BASE_API_URL}/meta_model_3d/`, params);
};

const updateMeta3DModel = (params) => {
  return Api.put(`${BASE_API_URL}/meta_model_3d/${params.meta3dModalId}/`, params);
};

export const MetaService = {
  getMetaList,
  getMetaDetails,
  searchByName,
  createMeta3DModel,
  getList3DmodelBỵMetaId,
  updateMeta3DModel,
};
