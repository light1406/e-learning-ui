import React from "react";
import Header from "@layouts/components/Header";

const Sidebar = () => {
  return (
    <div className="container">
      <div className="shadow-xl rounded-2xl w-[30%] text-primary">
        <div className="flex items-center gap-x-4 px-6 pb-[4rem] border-b border-b-primary">
          <img
            src="https://kt.city/static/avatar/avatar10.jpg"
            alt=""
            className="w-[5.5rem] h-[5.5rem] rounded-full"
          />
          <div className="">
            <h2 className="font-semibold">Tran Doan Kien Thuc</h2>
            <span className="text-[1.4rem] text-lightBlack">
              Người dùng tại Ktcity
            </span>
          </div>
        </div>
        <h2 className="px-8 py-4 cursor-pointer font-semibold flex gap-x-4 mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
          <span> Khu vực học tập</span>
        </h2>
        <h2 className="px-8 py-4 cursor-pointer font-semibold flex gap-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>

          <span>Kích hoạt mã</span>
        </h2>
        <h2 className="px-8 py-4 cursor-pointer font-semibold flex gap-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
            />
          </svg>
          <span>Nhận hỗ trợ</span>
        </h2>
      </div>
    </div>
  );
};

export default Sidebar;
