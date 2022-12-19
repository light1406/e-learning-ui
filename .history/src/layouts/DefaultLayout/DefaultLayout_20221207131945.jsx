import React from "react";

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
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DefaultLayout;
