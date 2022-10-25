import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../pages/Shared/Header/Header";
import RightSideNav from "../pages/Shared/RightSideNav/RightSideNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
