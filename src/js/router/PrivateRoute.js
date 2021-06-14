import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { api } from "../utils";

const PrivateRoute = ({ children, path, exact = exact || false }) => {
  useEffect(async () => {
    const auth = await api.get("/me");
    console.log(auth, "ici");
  }, []);
  console.log(exact, "exact");
  return <Router path={path}>{children}</Router>;
};

export default PrivateRoute;
