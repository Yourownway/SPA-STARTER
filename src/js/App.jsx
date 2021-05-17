import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.app);

  const handleClick = () => {
    dispatch({ type: "APP_INIT" });
    setTimeout(() => {
      dispatch({ type: "APP_READY" });
    }, 2000);
  };

  if (state.loading === true) return <div>Loading</div>;
  return (
    <>
      <h1> Welcome to React Redux </h1>
      <button onClick={() => handleClick()}>Reload</button>
    </>
  );
};

export default App;
