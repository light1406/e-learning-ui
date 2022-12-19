import React from "react";
import Header from "../components/Header";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Headerer />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </>
  );
};
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DefaultLayout;
