import React from "react";
import PropTypes from "prop-types";
import Header from "@layouts/components/Header";
import Sidebar from "@layouts/components/Sidebar";
const MeLayout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <div className="py-24 flex">
        <Sidebar></Sidebar>
        {children}
      </div>
    </div>
  );
};
MeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MeLayout;
