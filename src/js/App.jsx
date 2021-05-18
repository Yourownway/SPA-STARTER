import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css, keyframes } from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Books from "./components/pages/Books";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import AuthLayout from "./components/templates/AuthLayout";
import MainLayout from "./components/templates/MainLayout";
import Header from "./components/molecules/Header";
import "./style/globalStyle.css";

const rotate = keyframes`
from{
    transform: rotate(0deg)
}
to {
    transform: rotate(360deg)
}
`;

const Title = styled.h1`
  font-size: 1.5em;
  margin: auto;
  width: 30%;
  text-align: right;

  margin-top: 100px;
  &::before {
    content: "";
    position: absolute;
    width: 1.5em;
    height: 1.5em;
    border: 1rem solid blue;
    border-radius: 50%;
    border-top: 1rem solid yellow;
    border-bottom: 1rem solid green;
    margin-left: -140px;
    top: 70px;
    animation: ${rotate} 2s linear infinite;
  }
`;

const App = () => {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.app);

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
      <Header />
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/register"> Register</Link>
            </li>
            <li>
              <Link to="/login"> Login </Link>
            </li>
          </ul>
        </div>
        <Switch>
          <MainLayout>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/books">
              <Books />
            </Route>
          </MainLayout>
        </Switch>
        <AuthLayout>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </AuthLayout>
      </Router>
      {/* <Nav></Nav>
      <h1> Welcome to React Redux </h1>
      <button onClick={() => handleClick()}>Reload</button> */}
    </>
  );
};

export default App;
