import PropTypes from "prop-types";
import React from "react";
import Header from "@layouts/components/Header";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="content bg-backGround">{children}</div>
      </div>
    </>
  );
};
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DefaultLayout;
