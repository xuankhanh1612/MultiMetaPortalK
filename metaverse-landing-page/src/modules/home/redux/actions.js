import { HomeService } from "./services";
import { ACTION_TYPES } from "./actionTypes";
import { COMPONENT_STATUS } from "../../common";

const getCategories = (params) => {
  return (dispatch) => {
    dispatch({
      type: ACTION_TYPES.GET_CATEGORIES,
      payload: { status: COMPONENT_STATUS.LOADING },
    });
    HomeService.apiGetListCategory(params)
      .then((res) => {
        if (res) {
          dispatch({
            type: ACTION_TYPES.GET_CATEGORIES,
            payload: {
              status: COMPONENT_STATUS.SUCCESS,
              data: [{ id: null, name: "All" }, ...res.results],
              total: res.count,
            },
          });
        } else {
          dispatch({
            type: ACTION_TYPES.GET_CATEGORIES,
            payload: { status: COMPONENT_STATUS.ERROR },
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: ACTION_TYPES.GET_CATEGORIES,
          payload: { status: COMPONENT_STATUS.ERROR },
        });
      });
  };
};

export const HomeActions = {
  getCategories,
};
