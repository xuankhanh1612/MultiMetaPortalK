import toastr from "toastr";
import { setAuth } from "../../caches";
import { setAccessToken } from "../../common";
import { ACTION_TYPES } from "./actionTypes";
import { AuthService } from "./services";
const login = ({ remember, ...data }) => {
  return (dispatch) => {
    dispatch({ type: ACTION_TYPES.LOGIN });
    AuthService.login(data)
      .then((res) => {
        if (res && res.access) {
          const { access } = res;
          // if (remember) {
          // }
          setAccessToken(access);
          dispatch(setAuth(res));
          dispatch({
            type: ACTION_TYPES.LOGIN_SUCCESS,
          });
        } else {
          toastr.error("Tài khoản hoặc mật khẩu không đúng");
          dispatch({
            type: ACTION_TYPES.LOGIN_ERROR,
            errorLogin: "The username or password is incorrect",
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: ACTION_TYPES.LOGIN_ERROR,
          errorLogin: "Network Error",
        });
      });
  };
};

const signup = (data, callback) => {
  return (dispatch) => {
    dispatch({ type: ACTION_TYPES.SIGNUP });
    AuthService.signup(data)
      .then((res) => {
        if (res?.domain) {
          AuthService.login(data)
            .then((response) => {
              setAccessToken(response.access);
              dispatch(setAuth(response));
              dispatch({
                type: ACTION_TYPES.LOGIN_SUCCESS,
              });
              callback();
            })
            .catch((error) => {
              dispatch({
                type: ACTION_TYPES.LOGIN_ERROR,
                errorLogin: "Network Error",
              });
            });
        } else {
          dispatch({
            type: ACTION_TYPES.SIGNUP_ERROR,
            errorSignup: "The email has already been taken",
          });
          toastr.error("The email has already been taken");
        }
      })
      .catch((error) => {
        dispatch({
          type: ACTION_TYPES.SIGNUP_ERROR,
          errorSignup: "Network Error",
        });
      });
  };
};

const getUserInfo = () => {
  return (dispatch) => {
    AuthService.getUserInfo()
      .then((res) => {
        if (res?.data) {
          dispatch({
            type: ACTION_TYPES.GET_USER_INFO_SUCCESS,
            user: res.data,
          });
        } else {
          dispatch({
            type: ACTION_TYPES.GET_USER_INFO_ERROR,
            errorGetUserInfo: "Get user info error",
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: ACTION_TYPES.GET_USER_INFO_ERROR,
          errorGetUserInfo: "Network Error",
        });
      });
  };
};

export const authAction = {
  login,
  signup,
  getUserInfo,
};
