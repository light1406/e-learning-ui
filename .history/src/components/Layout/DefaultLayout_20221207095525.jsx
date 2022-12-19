import React from "react";
import Header from "./DefaultLayout/Header/Header";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </>
  );
};

export default DefaultLayout;
