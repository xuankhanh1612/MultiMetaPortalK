import ReducerRegistry from "../../base/redux/ReducerRegistry";
import { ACTION_TYPES } from "./actionTypes";

const initState = {
  auth: null,
  website: null,
  statusApi: "",
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : null,
};
ReducerRegistry.register("caches", (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_AUTH:
      return {
        ...state,
        auth: action.auth,
      };
    case ACTION_TYPES.GET_WEBSITE_BY_DOMAIN:
      return {
        ...state,
        website: action.payload.data,
        statusApi: action.payload.status,
      };
    case ACTION_TYPES.UPDATE_CART:
      return {
        ...state,
        cart: action.payload.data,
      };
    case ACTION_TYPES.CLEAR_CACHES:
      return initState;

    default:
      return state;
  }
});
