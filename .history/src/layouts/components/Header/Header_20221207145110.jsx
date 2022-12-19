import React from "react";

const Header = () => {
  return (
    <div className="container">
      <div className="mx-[10px] flex items-center justify-between">
        <img
          className="w-[138px] h-[34px]"
          src="https://unica.vn/media/img/logo-unica.svg"
          alt=""
        />
        <div className="">
          <input type="text" placeholder="Tìm khóa học, giảng viên" />
        </div>
        <div className="flex items-center gap-x-[24px]">
          <div className="">KH khoa hoc</div>
          <div className="">Cart</div>
          <ul className="flex items-center">
            <li>Dang nhap</li>
            <li>Dang ky</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
