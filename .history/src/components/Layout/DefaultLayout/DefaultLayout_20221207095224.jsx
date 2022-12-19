import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div className="container">{children}</div>
    </>
  );
};

export default DefaultLayout;
