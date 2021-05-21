import React from "react";
import Nav from "../molecules/Nav";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default MainLayout;
