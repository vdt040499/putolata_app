import { authConstants } from "../actions/constants";

const initState = {
  token: null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  tokenSuccess: null,
  message: "",
};

const authReducer = (state = initState, action) => {
  console.log(action);

  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
      };
      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
      };
      break;
    case authConstants.LOGOUT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authConstants.LOGOUT_SUCCESS:
      state = {
        ...initState,
      };
      break;
    case authConstants.LOGOUT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    case authConstants.SIGNUP_REQUEST:
      break;
    case authConstants.SIGNUP_SUCCESS:
      break;
    case authConstants.SIGNUP_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
    case authConstants.FORGOT_PASSWORD_REQUEST:
      break;
    case authConstants.FORGOT_PASSWORD_SUCCESS:
      break;
    case authConstants.FORGOT_PASSWORD_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
    case authConstants.RESET_PASSWORD_REQUEST:
      break;
    case authConstants.RESET_PASSWORD_SUCCESS:
      state = {
        ...state,
        tokenSuccess: "Xác nhận thành công"
      };
      break;
    case authConstants.RESET_PASSWORD_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
    case authConstants.UPDATE_ACCOUNT_REQUEST:
      break;
    case authConstants.UPDATE_ACCOUNT_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
      };
      break;
    case authConstants.UPDATE_ACCOUNT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
    case authConstants.RESET_ERROR:
      state = {
        ...state,
        error: null,
      };
      break;
    case authConstants.RESET_SUCCESS_TOKEN:
      state = {
        ...state,
        tokenSuccess: null,
      };
      break;
    default:
      state = {
        ...state,
      };
      break;
  }

  return state;
};

export default authReducer;
