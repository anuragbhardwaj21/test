import { ADD_EMPLOYEE,GET_EMPLOYEES, DELETE_SINGLE_EMPLOYEE,EDIT_EMPLOYEE } from "./actionTypes";

const initialState = {
  employees: JSON.parse(localStorage.getItem("employees")) || [],
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return { ...state, employees: [...state.employees, action.payload] };
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
      };
    case DELETE_SINGLE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ),
      };
    case EDIT_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map((employee) =>
          employee._id === action.payload._id ? action.payload : employee
        ),
      };
    default:
      return state;
  }
};

export default employeeReducer;
