import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./store/store";
const INSERT_DIV = document.getElementById("app");

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  INSERT_DIV
);
