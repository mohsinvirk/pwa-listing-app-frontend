import { combineReducers } from "redux";
import ads from "./ads";
import auth from "./authReducer";
import error from "./errorReducer";

const rootReducer = combineReducers({
  ads,
  auth,
  error
});

export default rootReducer;
