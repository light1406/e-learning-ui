import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-[10px] bg-white shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between gap-x-24">
          <div className="flex items-center justify-between gap-x-[30px] w-[60%]">
            <a href="#" className="flex gap-x-32 w-[50%]">
              <img
                className="w-auto h-[34px]"
                src="https://unica.vn/media/img/logo-unica.svg"
                alt=""
              />
            </a>
            <div className="relative w-full">
              <input
                className="w-full h-[38px] p-6 rounded-full border-2 border-backGround focus:border-primary shadow text-[14px] font-semibold"
                type="text"
                placeholder="Tìm khóa học, giảng viên"
              />
              <Link
                to="/search"
                className="absolute right-5 top-[50%] translate-y-[-50%]"
              >
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
              </Link>
            </div>
          </div>
          <div className="flex items-center w-[50%] gap-x-10  justify-between">
            <button className="flex items-baseline gap-x-3 bg-backGround px-4 py-4 rounded-full text-[14px] font-semibold">
              <span>Kích hoạt khóa học</span>
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
                  d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </button>
            <button className="text-[14px] font-semibold">Hỗ trợ</button>
            <button className="border-2 border-primary rounded-full py-3 px-6 text-[14px] font-semibold">
              Đăng nhập
            </button>

            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[24px] h-[26px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
