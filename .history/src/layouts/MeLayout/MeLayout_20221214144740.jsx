import React from "react";
import Header from "@layouts/components/Header";
import Sidebar from "@layouts/components/Sidebar";
const MeLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="py-24 flex">
        <Sidebar></Sidebar>
        <div className=""></div>
      </div>
    </div>
  );
};

export default MeLayout;
