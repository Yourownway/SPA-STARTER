import { combineReducers } from "redux";
import appStateReducer from "./reducer/appReducer";
import userReducer from "./reducer/userReducer";

const rootReducer = combineReducers({
  app: appStateReducer,
  user: userReducer,
});

export default rootReducer;
