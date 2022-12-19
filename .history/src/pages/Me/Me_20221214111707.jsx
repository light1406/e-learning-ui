import React from "react";

const Me = () => {
  return (
    <div className="container">
      <div className="flex gap-x-10 py-20">
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
        <div className="ml-[2rem]">
          <h2 className="text-[2rem] font-semibold mb-4">
            Tài khoản: Tran Doan Kien Thuc
          </h2>
          <p className="mb-12">
            Quản lý thông tin cá nhân, đổi quà & xem lại hình thức thanh toán
          </p>
          <div className="grid grid-cols-3 gap-6">
            <div className="flex items-center gap-x-3 shadow-xl cursor-pointer rounded-2xl px-4 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <div className="px-4 py-2 max-w-[20rem]">
                <h2 className="font-semibold">Thông tin cá nhân</h2>
                <p className="text-[1.3rem]">Chỉnh sửa thông tin cá nhân</p>
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
            <div className="flex items-center gap-x-3 shadow-xl rounded-2xl px-4 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-24 h-24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <div className="px-4 py-2 max-w-[20rem]">
                <h2 className="font-semibold">Số dư và thanh toán</h2>
                <p className="text-[1.3rem]">
                  Xem số dư tài khoản hiện tại và yêu cầu rút tiền
                </p>
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
            <div className="flex items-center gap-x-3 shadow-xl cursor-pointer rounded-2xl px-4 py-2">
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
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="px-4 py-2 max-w-[20rem]">
                <h2 className="font-semibold">Lịch sử đơn hàng</h2>
                <p className="text-[1.3rem]">Xem lại đơn hàng mà bạn đã tạo</p>
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
            <div className="flex items-center gap-x-3 shadow-xl cursor-pointer rounded-2xl px-4 py-2">
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
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>

              <div className="px-4 py-2 max-w-[20rem]">
                <h2 className="font-semibold">Quản lý khuyến nghị</h2>
                <p className="text-[1.3rem]">
                  {" "}
                  Xem và cập nhật nội dung khuyến nghị của bạn
                </p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
