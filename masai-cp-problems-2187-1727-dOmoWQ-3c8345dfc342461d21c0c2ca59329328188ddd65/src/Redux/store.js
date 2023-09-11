
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";

const initialState = {
  isLoading: false,
  isError: false,
  restaurants: [],
  totalPages: 0,
  restaurant: {},
  currentPage: 1,
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
