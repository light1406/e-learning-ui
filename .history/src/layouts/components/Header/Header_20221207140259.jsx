import React from "react";

const Header = () => {
  return (
    <div className="container">
      <div className="mx-[10px]">
        <a href="/">Caserou</a>
        <div className="">
          <input type="text" placeholder="Tìm khóa học, giảng viên" />
        </div>
      </div>
    </div>
  );
};

export default Header;
