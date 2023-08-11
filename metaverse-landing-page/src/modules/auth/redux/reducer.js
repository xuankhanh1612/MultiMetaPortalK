import ReducerRegistry from "../../base/redux/ReducerRegistry";
import { ACTION_TYPES } from "./actionTypes";

const initState = {
  user: null,
  isFetchingLogin: false,
  isFetchingUserInfo: false,
  errorLogin: "",
  errorSignup: "",
  errorGetUserInfo: "",
};

ReducerRegistry.register("auth", (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN:
      return {
        isFetchingLogin: true,
        errorLogin: "",
      };
    case ACTION_TYPES.LOGIN_SUCCESS:
      return {
        isFetchingLogin: false,
        errorLogin: "",
      };
    case ACTION_TYPES.LOGIN_ERROR:
      return {
        isFetchingLogin: false,
        errorLogin: action.error,
      };
    case ACTION_TYPES.SIGNUP:
      return {
        isFetchingLogin: true,
        errorSignup: "",
      };
    case ACTION_TYPES.SIGNUP_SUCCESS:
      return {
        isFetchingLogin: false,
        errorSignup: "",
      };
    case ACTION_TYPES.SIGNUP_ERROR:
      return {
        isFetchingLogin: false,
        errorSignup: action.error,
      };
    case ACTION_TYPES.GET_USER_INFO:
      return {
        isFetchingUserInfo: true,
        errorGetUserInfo: "",
        user: action.user,
      };
    case ACTION_TYPES.GET_USER_INFO_SUCCESS:
      return {
        isFetchingUserInfo: false,
        errorGetUserInfo: "",
        user: action.user,
      };
    case ACTION_TYPES.GET_USER_INFO_ERROR:
      return {
        isFetchingUserInfo: false,
        errorGetUserInfo: action.error,
        user: null,
      };
    default:
      return state;
  }
});
