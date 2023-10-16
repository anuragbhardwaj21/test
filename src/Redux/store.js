import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./userReducer";
import employeeReducer from "./employeeReducer";


const rootReducer = combineReducers({
  userReducer,employeeReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
