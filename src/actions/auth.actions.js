import axios from "../helpers/axios";
import { authConstants, cartConstants } from "./constants";

export const signup = (user) => {
  return async (dispatch) => {
    let res;
    try {
      dispatch({ type: authConstants.SIGNUP_REQUEST });
      res = await axios.post(`/signup`, user);
      if (res.status === 201) {
        dispatch({ type: authConstants.SIGNUP_SUCCESS });
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
      } else {
        const { error } = res.data;
        dispatch({ type: authConstants.SIGNUP_FAILURE, payload: { error } });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const login = (user) => {
  console.log(user);

  return async (dispatch) => {
    try {
      dispatch({ type: authConstants.LOGIN_REQUEST });
      const res = await axios.post("/signin", {
        ...user,
      });

      if (res.status === 200) {
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
      } else {
        if (res.status === 400) {
          dispatch({
            type: authConstants.LOGIN_FAILURE,
            payload: { error: res.data.error },
          });
        }
      }
    } catch (error) {
      dispatch({
        type: authConstants.FORGOT_PASSWORD_FAILURE,
        payload: { error: "Email hoặc mật khẩu không đúng" },
      });
    }
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: "Failed to login" },
      });
    }
  };
};

export const signout = () => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGOUT_REQUEST });
    localStorage.clear();
    dispatch({ type: authConstants.LOGOUT_SUCCESS });
    dispatch({ type: cartConstants.RESET_CART });
    //const res = await axios.post(`/admin/signout`);
    // if(res.status === 200){

    // }else{
    //     dispatch({
    //         type: authConstants.LOGOUT_FAILURE,
    //         payload: { error: res.data.error }
    //     });
    // }
  };
};

export const forgetPassword = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({ type: authConstants.FORGOT_PASSWORD_REQUEST });
      const res = await axios.post("/forgotpassword", payload);

      if (res.status === 201) {
        dispatch({ type: authConstants.FORGOT_PASSWORD_SUCCESS });
      } else {
        console.log(res.data.message);
        dispatch({
          type: authConstants.FORGOT_PASSWORD_FAILURE,
          payload: { error: res.data.message },
        });
      }
    } catch (error) {
      dispatch({
        type: authConstants.FORGOT_PASSWORD_FAILURE,
        payload: { error: "Có vấn đề về email của bạn! Kiểm tra lại nhé" },
      });
    }
  };
};

export const resetPassword = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({ type: authConstants.RESET_PASSWORD_REQUEST });
      const res = await axios.post("/resetpassword", payload);

      if (res.status === 201) {
        dispatch({ type: authConstants.RESET_PASSWORD_SUCCESS });
      } else {
        dispatch({
          type: authConstants.RESET_PASSWORD_FAILURE,
          payload: { error: res.data.error },
        });
      }
    } catch (error) {
      dispatch({
        type: authConstants.RESET_PASSWORD_FAILURE,
        payload: { error: "Mã xác nhận không đúng" },
      });
    }
  };
};

export const resetError = () => {
  return async (dispatch) => {
    dispatch({ type: authConstants.RESET_ERROR });
  };
};

export const resetTokenSuccess = () => {
  return async (dispatch) => {
    dispatch({ type: authConstants.RESET_SUCCESS_TOKEN });
  };
};
