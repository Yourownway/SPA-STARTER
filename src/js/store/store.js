// import { createStore, applyMiddleware } from "redux";
// import { createLogger } from "redux-logger";
// import { rootReducer } from "./root";

// const loggerMiddleware = createLogger();

// export default (preloadedState) => {
//   return createStore(
//     rootReducer,
//     preloadedState,
//     applyMiddleware(loggerMiddleware)
//   );
// };

import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "./root";

let preloadedState;
const persistedUserData = localStorage.getItem("user");

if (persistedUserData) {
  preloadedState = {
    user: JSON.parse(persistedUserData),
  };
}

export default function store(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(createLogger())
  );
}
