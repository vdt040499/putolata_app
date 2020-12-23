import React from "react";
import Header from "../Header";
import MenuHeader from "../MenuHeader";
import Footer from "../Footer";

const Layout = (props) => {
  return (
    <>
      <Header />
      <MenuHeader />
      {props.children}
      <Footer/>
    </>
  );
};

export default Layout;
