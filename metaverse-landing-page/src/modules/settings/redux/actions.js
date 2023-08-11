import { SettingService } from "./services";
import { ACTION_TYPES } from "./actionTypes";
import { COMPONENT_STATUS } from "../../common";

const getSettings = (params) => {
  return (dispatch) => {
    dispatch({
      type: ACTION_TYPES.GET_SETTINGS,
      payload: { status: COMPONENT_STATUS.LOADING },
    });
    SettingService.apiGetSettings(params)
      .then((res) => {
        if (res) {
          dispatch({
            type: ACTION_TYPES.GET_SETTINGS,
            payload: {
              status: COMPONENT_STATUS.SUCCESS,
              data: res.data.list,
              total: res.data.total,
            },
          });
        } else {
          dispatch({
            type: ACTION_TYPES.GET_SETTINGS,
            payload: { status: COMPONENT_STATUS.ERROR },
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: ACTION_TYPES.GET_SETTINGS,
          payload: { status: COMPONENT_STATUS.ERROR },
        });
      });
  };
};

export const SettingActions = {
  getSettings,
};
