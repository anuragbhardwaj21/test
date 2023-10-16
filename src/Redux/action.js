import axios from "axios";
import {
  SIGNUP_NEW_USER,
  LOGIN_NEW_USER,
  IS_AUTHENTICATED,
  LOG_OUT_USER,
  GET_EMPLOYEES,
  DELETE_SINGLE_EMPLOYEE,
  EDIT_EMPLOYEE,
  ADD_EMPLOYEE,
} from "./actionTypes";

export const signupNewUser = (userData) => ({
  type: SIGNUP_NEW_USER,
  payload: userData,
});

export const loginNewUser = (userData) => ({
  type: LOGIN_NEW_USER,
  payload: userData,
});

export const setIsAuthenticated = (value) => ({
  type: IS_AUTHENTICATED,
  payload: value,
});

export const logOutUser = () => ({
  type: LOG_OUT_USER,
});

export const signupUser = (email, password) => (dispatch) => {
  axios
    .post("https://empl-gsl5.onrender.com/signup", {
      email,
      password,
    })
    .then((response) => {
      localStorage.setItem("userData", JSON.stringify(response.data.user));
      dispatch(signupNewUser(response.data.token));
      dispatch(setIsAuthenticated(true));
    })
    .catch((error) => {
      console.error("Error");
    });
};

export const loginUser = (email, password) => (dispatch) => {
  axios
    .post("https://empl-gsl5.onrender.com/login", { email, password })
    .then((response) => {
      const token = response.data.token;
      localStorage.setItem("token", token);
      dispatch(loginNewUser(response.data.token));
      dispatch(setIsAuthenticated(true));
      dispatch(fetchEmployees());
    })
    .catch((error) => {
      console.log(error);
    });
};
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("employees");
  

  dispatch(logOutUser());
  dispatch(setIsAuthenticated(false));
};

export const addEmployee = (employee) => ({
  type: ADD_EMPLOYEE,
  payload: employee,
});

export const getEmployees = (employees) => ({
  type: GET_EMPLOYEES,
  payload: employees,
});

export const deleteSingleEmployee = (employeeId) => ({
  type: DELETE_SINGLE_EMPLOYEE,
  payload: employeeId,
});
export const editEmployee = (employee) => ({
  type: EDIT_EMPLOYEE,
  payload: employee,
});

export const addNewEmployee = (newEmployee) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "https://empl-gsl5.onrender.com/emp/create",
        newEmployee,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        const addedEmployee = response.data;
        dispatch(addEmployee(addedEmployee));
        dispatch(fetchEmployees());
      } else {
        console.error("Failed to add employee:", response.status);
      }
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };
};
export const fetchEmployees = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        "https://empl-gsl5.onrender.com/employees",
        config
      );

      const employees = response.data;
      localStorage.setItem("employees", JSON.stringify(employees));
      dispatch(getEmployees(employees));
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };
};

export const removeEmployee = (employeeId) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        await axios.delete(
          `https://empl-gsl5.onrender.com/emp/delete/${employeeId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(deleteSingleEmployee(employeeId));
        dispatch(fetchEmployees());
      } else {
        console.error(
          "Token is missing. Please ensure the user is authenticated."
        );
      }
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };
};

export const updateEmployee = (employee) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `https://empl-gsl5.onrender.com/emp/edit/${employee._id}`,
        employee,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const updatedEmployee = response.data;
      dispatch(editEmployee(updatedEmployee));
      dispatch(fetchEmployees());
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };
};
