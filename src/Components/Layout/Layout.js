import React, { Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Fotter from "../Fotter/Fotter";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      {children}
      <Fotter />
    </Fragment>
  );
};

export default Layout;
