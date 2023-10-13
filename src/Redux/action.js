import axios from "axios";
import {
  SIGNUP_NEW_USER,
  LOGIN_NEW_USER,
  CURRENT_USER,
  IS_AUTHENTICATED,
  LOG_OUT_USER,
} from "./actionTypes";

export const signupNewUser = (userData) => ({
  type: SIGNUP_NEW_USER,
  payload: userData,
});

export const loginNewUser = (userData) => ({
  type: LOGIN_NEW_USER,
  payload: userData,
});

export const setCurrentUser = (userData) => ({
  type: CURRENT_USER,
  payload: userData,
});

export const setIsAuthenticated = (value) => ({
  type: IS_AUTHENTICATED,
  payload: value,
});

export const logOutUser = () => ({
  type: LOG_OUT_USER,
});

export const signupUser = (fullName, email, password) => (dispatch) => {
  axios
    .post("https://json-rhch.onrender.com/users", {
      fullName,
      email,
      password,
    })
    .then((response) => {

      localStorage.setItem("userData", JSON.stringify(response.data.user));
      dispatch(signupNewUser(response.data.user));
      dispatch(setCurrentUser(response.data.user));
      dispatch(setIsAuthenticated(true));
    })
    .catch((error) => {
      console.error("Error");
    });
};

export const loginUser = (email, password) => (dispatch) => {
  axios
    .post("https://json-rhch.onrender.com/login", { email, password })
    .then((response) => {
      console.log(response.data.user);
      localStorage.setItem("userData", JSON.stringify(response.data.user));
      dispatch(loginNewUser(response.data.user));
      dispatch(setCurrentUser(response.data.user));
      dispatch(setIsAuthenticated(true));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("userData");

  dispatch(logOutUser());
  dispatch(setIsAuthenticated(false));
};
