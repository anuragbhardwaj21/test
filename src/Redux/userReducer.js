import {
  SIGNUP_NEW_USER,
  LOGIN_NEW_USER,
  IS_AUTHENTICATED,
  LOG_OUT_USER,
} from "./actionTypes";

const initialState = {
  isAuthenticated: localStorage.getItem("token") ? true : false,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_NEW_USER:
    case LOGIN_NEW_USER:
    case LOG_OUT_USER:
      return { ...state, currentUser: {}, isAuthenticated: false };
    case IS_AUTHENTICATED:
      return { ...state, isAuthenticated: payload };
    default:
      return state;
  }
};

export { userReducer };
