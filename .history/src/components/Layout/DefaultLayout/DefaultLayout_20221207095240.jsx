import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </>
  );
};

export default DefaultLayout;
