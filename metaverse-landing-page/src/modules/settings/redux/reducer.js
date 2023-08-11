import ReducerRegistry from "../../base/redux/ReducerRegistry";
import { ACTION_TYPES } from "./actionTypes";

const initState = {
  settings: {
    status: "",
    data: [],
    total: 0,
  },
};

ReducerRegistry.register("setting", (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_SETTINGS: {
      return {
        ...state,
        settings: {
          ...state.settings,
          ...action.payload,
        },
      };
    }
    default:
      return state;
  }
});
