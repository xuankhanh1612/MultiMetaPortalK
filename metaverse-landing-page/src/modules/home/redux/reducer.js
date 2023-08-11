import ReducerRegistry from "../../base/redux/ReducerRegistry";
import { ACTION_TYPES } from "./actionTypes";

const initState = {
  categories: {
    status: "",
    data: [],
    total: 0,
  },
};

ReducerRegistry.register("home", (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_CATEGORIES: {
      return {
        ...state,
        categories: {
          ...state.categories,
          ...action.payload,
        },
      };
    }
    default:
      return state;
  }
});
