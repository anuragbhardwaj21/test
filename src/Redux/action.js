import axios from "axios";
import {
  SIGNUP_NEW_USER,
  LOGIN_NEW_USER,
  IS_AUTHENTICATED,
  LOG_OUT_USER,
  CURRENT_USER,
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

export const signupUser = (name, email, password) => (dispatch) => {
  console.log(11);
  axios
    .post("https://todo-7jpp.onrender.com/signup", { name, email, password })
    .then((response) => {
      const { username, userid, token } = response.data;
      const userData = { username, userid, token };

      localStorage.setItem("token", token);
      localStorage.setItem("userData", JSON.stringify(userData));
      dispatch(signupNewUser(userData));
      dispatch(setCurrentUser(userData));
      dispatch(setIsAuthenticated(true));
    })
    .catch((error) => {
      console.error("Error");
    });
};

export const loginUser = (email, password) => (dispatch) => {
  axios
    .post("https://todo-7jpp.onrender.com/login", { email, password })
    .then((response) => {
      const { username, userid, token } = response.data;
      const userData = { username, userid, token };
      localStorage.setItem("token", token);
      localStorage.setItem("userData", JSON.stringify(userData));
      dispatch(loginNewUser(userData));
      dispatch(setCurrentUser(userData));
      dispatch(setIsAuthenticated(true));

      axios
        .get("https://todo-7jpp.onrender.com/todos", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((todoResponse) => {
          localStorage.setItem("tododata", JSON.stringify(todoResponse.data));
        })
        .catch((todoError) => {
          console.error("Error fetching todo data:", todoError);
        });
    })
    .catch((error) => {
      console.error("error");
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("userData");
  dispatch(logOutUser());
  dispatch(setIsAuthenticated(false));
};
