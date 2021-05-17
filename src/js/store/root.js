import { combineReducers } from "redux";

const initialState = {
  name: "E-brairire",
  init: false,
  loading: false,
};

const initialStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "APP_READY":
      return { ...state, init: true, loading: false };
    case "APP_INIT":
      return { ...state, init: false, loading: true };
    case "APP_RESET":
      return initialState;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ app: initialStateReducer });

export { rootReducer };
