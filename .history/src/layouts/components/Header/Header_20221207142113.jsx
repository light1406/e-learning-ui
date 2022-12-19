import React from "react";

const Header = () => {
  return (
    <div className="container">
      <div className="mx-[10px] flex items-center justify-between">
        <a href="/">Caserou</a>
        <div className="">
          <input type="text" placeholder="Tìm khóa học, giảng viên" />
        </div>
        <div className="">
          <div className="">KH khoa hoc</div>
          <div className="">Cart</div>
          <ul className="">
            <li>Dang nhap</li>
            <li>Dang ky</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
