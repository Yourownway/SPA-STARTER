import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import store from "./store/store";
import Books from "./components/pages/Books";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import AuthLayout from "./components/templates/AuthLayout";
import MainLayout from "./components/templates/MainLayout";

import "./style/globalStyle.css";
import Nav from "./components/molecules/Nav";
import { api } from "./utils";
import PrivateRoute from "./router/PrivateRoute";

const App = () => {
  console.log(store);
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.app);

  useEffect(async () => {
    const auth = await api.get("/me");
    console.log(auth);
  }, []);

  const handleClick = () => {
    dispatch({ type: "APP_INIT" });
    setClicked(true);
    setTimeout(() => {
      dispatch({ type: "APP_READY" });
    }, 4000);
  };

  if (state.loading === true) return <Title clicked={clicked}>Loading</Title>;

  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute path="/" exact>
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/books">
            <Books />
          </PrivateRoute>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>{" "}
        </Switch>
      </Router>
      {/* <Nav></Nav>
      <h1> Welcome to React Redux </h1>
      <button onClick={() => handleClick()}>Reload</button> */}
    </>
  );
};

export default App;
