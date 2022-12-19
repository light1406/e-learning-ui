import React from "react";

const Header = () => {
  return (
    <div className="container">
      <div className="mx-[10px]">
        <a href="/">Caserou</a>
        <div className="">
          <input type="text" placeholder="Tìm khóa học, giảng viên" />
        </div>
        <div className="">
          <div className="">KH</div>
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
