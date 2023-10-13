import {
  SIGNUP_NEW_USER,
  LOGIN_NEW_USER,
  CURRENT_USER,
  IS_AUTHENTICATED,
  LOG_OUT_USER,
} from "./actionTypes";

const initialState = {
  loginError: false,
  currentUser: JSON.parse(localStorage.getItem("userData")) || {},
  isAuthenticated: localStorage.getItem("token") ? true : false,
  address: JSON.parse(localStorage.getItem("savedAddress")) || null,
  personalDetails:
    JSON.parse(localStorage.getItem("savedPersonalDetails")) || null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_NEW_USER:
    case LOGIN_NEW_USER:
    case CURRENT_USER:
      return { ...state, currentUser: payload, isAuthenticated: true };

    case LOG_OUT_USER:
      return { ...state, currentUser: {}, isAuthenticated: false };
    case IS_AUTHENTICATED:
      return { ...state, isAuthenticated: payload };
    default:
      return state;
  }
};

export { userReducer };
