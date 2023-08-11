import { MetaService } from "./services";
import { ACTION_TYPES } from "./actionTypes";
import { COMPONENT_STATUS } from "../../common";

const getMetaList = (params) => {
  return (dispatch) => {
    dispatch({
      type: ACTION_TYPES.GET_META_LIST,
      payload: { status: COMPONENT_STATUS.LOADING },
    });
    MetaService.getMetaList(params)
      .then((res) => {
        if (res) {
          dispatch({
            type: ACTION_TYPES.GET_META_LIST,
            payload: {
              status: COMPONENT_STATUS.SUCCESS,
              data: res,
            },
          });
        } else {
          dispatch({
            type: ACTION_TYPES.GET_META_LIST,
            payload: { status: COMPONENT_STATUS.ERROR },
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: ACTION_TYPES.GET_META_LIST,
          payload: { status: COMPONENT_STATUS.ERROR },
        });
      });
  };
};

const getMetaDetails = (id) => {
  return (dispatch) => {
    dispatch({
      type: ACTION_TYPES.GET_META_DETAILS,
      payload: { statusDetails: COMPONENT_STATUS.LOADING },
    });
    MetaService.getMetaDetails(id)
      .then((res) => {
        if (res) {
          dispatch({
            type: ACTION_TYPES.GET_META_DETAILS,
            payload: {
              statusDetails: COMPONENT_STATUS.SUCCESS,
              dataDetails: res,
            },
          });
        } else {
          dispatch({
            type: ACTION_TYPES.GET_META_DETAILS,
            payload: { statusDetails: COMPONENT_STATUS.ERROR },
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: ACTION_TYPES.GET_META_DETAILS,
          payload: { statusDetails: COMPONENT_STATUS.ERROR },
        });
      });
  };
};

const searchKeyword = (value) => {
  return (dispatch) => {
    dispatch({
      type: ACTION_TYPES.SEARCH_KEYWORD,
      payload: {
        keyword: value,
      },
    });
  };
};

const searchMeta = (params) => {
  return (dispatch) => {
    dispatch({
      type: ACTION_TYPES.SEARCH_META,
      payload: { statusSearch: COMPONENT_STATUS.LOADING },
    });
    MetaService.searchByName(params)
      .then((res) => {
        if (res) {
          dispatch({
            type: ACTION_TYPES.SEARCH_META,
            payload: {
              statusSearch: COMPONENT_STATUS.SUCCESS,
              dataSearch: res,
            },
          });
        } else {
          dispatch({
            type: ACTION_TYPES.SEARCH_META,
            payload: { statusSearch: COMPONENT_STATUS.ERROR },
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: ACTION_TYPES.SEARCH_META,
          payload: { statusSearch: COMPONENT_STATUS.ERROR },
        });
      });
  };
};

const metaCategory = (value) => {
  return (dispatch) => {
    dispatch({
      type: ACTION_TYPES.META_CATEGORY,
      payload: {
        category: value,
      },
    });
  };
};

export const metaActions = {
  getMetaList,
  getMetaDetails,
  searchMeta,
  searchKeyword,
  metaCategory,
};
