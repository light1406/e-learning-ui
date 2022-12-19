import React from "react";

const Me = () => {
  return (
    <div className="container">
      <div className="flex gap-x-10 p-20">
        <div className="shadow-xl rounded-2xl pr-20">
          <div className="flex items-center gap-x-4 px-5 pb-[4rem] border-b border-b-primary">
            <img
              src="https://kt.city/static/avatar/avatar10.jpg"
              alt=""
              className="w-[5.5rem] h-[5.5rem] rounded-full"
            />
            <div className="">
              <h2 className="font-semibold">Tran Doan Kien Thuc</h2>
              <span className="text-[1.4rem]">Người dùng tại Ktcity</span>
            </div>
          </div>
          <h2 className="px-8 py-4 cursor-pointer font-semibold">
            Khu vực học tập
          </h2>
          <h2 className="px-8 py-4 cursor-pointer font-semibold">
            Kích hoạt mã
          </h2>
          <h2 className="px-8 py-4 cursor-pointer font-semibold">
            Nhận hỗ trợ
          </h2>
        </div>
        <div className="ml-[4rem]">
          <h2 className="text-[2rem] font-semibold mb-4">
            Tài khoản: Tran Doan Kien Thuc
          </h2>
          <p className="mb-12">
            Quản lý thông tin cá nhân, đổi quà & xem lại hình thức thanh toán
          </p>
          <div className="grid grid-cols-3 gap-6">
            <div className="flex p-4 items-center gap-x-3 shadow-xl cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-20 h-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <div className="p-4">
                <h2>Thông tin cá nhân</h2>
                <p>Chỉnh sửa thông tin cá nhân</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
            <div className="">
              <img src="" alt="" />
              <div className="p-4 shadow-xl">
                <h2>Thông tin cá nhân</h2>
                <p>Chỉnh sửa thông tin cá nhân</p>
              </div>
            </div>
            <div className="">
              <img src="" alt="" />
              <div className="p-4 shadow-xl">
                <h2>Thông tin cá nhân</h2>
                <p>Chỉnh sửa thông tin cá nhân</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
