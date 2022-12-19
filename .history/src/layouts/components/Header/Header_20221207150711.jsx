import React from "react";

const Header = () => {
  return (
    <div className="container">
      <div className="my-[10px] flex items-center justify-between">
        <div className="flex gap-x-24 w-[50%]">
          <img
            className="w-[138px] h-[34px]"
            src="https://unica.vn/media/img/logo-unica.svg"
            alt=""
          />
          <div className="relative">
            <input
              className="w-[500px] h-[38px] p-3 rounded-lg"
              type="text"
              placeholder="Tìm khóa học, giảng viên"
            />
            <button className="absolute right-5 top-[50%] translate-y-[-50%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
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
