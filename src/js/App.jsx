import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css, keyframes } from "styled-components";

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
  text-align: center;

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
      <h1> Welcome to React Redux </h1>
      <button onClick={() => handleClick()}>Reload</button>
    </>
  );
};

export default App;
