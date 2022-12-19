import React from "react";

const Me = () => {
  return (
    <div className="container">
      <div className="flex gap-x-10 p-20">
        <div className="shadow-xl">
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
