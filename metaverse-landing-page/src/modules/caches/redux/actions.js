import { ACTION_TYPES } from "./actionTypes";
import { CacheService } from "./services";
import { COMPONENT_STATUS } from "../../common";

export const setAuth = (auth) => {
  return { type: ACTION_TYPES.SET_AUTH, auth };
};
export const getWebsiteByDomain = (params) => {
  return (dispatch) => {
    dispatch({
      type: ACTION_TYPES.GET_WEBSITE_BY_DOMAIN,
      payload: { status: COMPONENT_STATUS.LOADING },
    });
    CacheService.apiGetWebsiteByDomain(params)
      .then((res) => {
        if (res?.results && res.results.length > 0) {
          dispatch({
            type: ACTION_TYPES.GET_WEBSITE_BY_DOMAIN,
            payload: {
              status: COMPONENT_STATUS.SUCCESS,
              data: { ...res.results[0] },
            },
          });
        } else {
          // dispatch({
          //   type: ACTION_TYPES.GET_WEBSITE_BY_DOMAIN,
          //   payload: { status: COMPONENT_STATUS.ERROR },
          // });
        }
      })
      .catch((error) => {
        dispatch({
          type: ACTION_TYPES.GET_WEBSITE_BY_DOMAIN,
          payload: { status: COMPONENT_STATUS.ERROR },
        });
      });
  };
};
