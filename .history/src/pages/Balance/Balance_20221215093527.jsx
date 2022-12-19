import React from "react";
import { Link } from "react-router-dom";

const Balance = () => {
  return (
    <div>
      <div className="heading flex items-center gap-x-5">
        <Link className="heading" to="/me">
          Cá nhân
        </Link>
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
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
        Số dư
      </div>
      <p className="my-6">
        Để thao tác rút tiền, bạn cần có số dư tối thiểu đạt
        <span className="text-primary font-medium"> 200,000đ</span> và cập nhật
        đầy đủ thông tin thanh toán.
      </p>
      <div className="my-10 flex items-center gap-x-14">
        <div className="w-[26rem] h-[16rem] bg-primary rounded-3xl p-8 text-white font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
            />
          </svg>
          <h3 className="mt-5">Số dư</h3>
          <h1 className="text-[2.4rem]">120.000đ</h1>
        </div>
        <div className="w-[26rem] h-[16rem] bg-yellow rounded-3xl p-8 text-white font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
            />
          </svg>
          <h3 className="mt-5">Số dư</h3>
          <h1 className="text-[2.4rem]">120.000đ</h1>
        </div>
      </div>
      <h3 className="font-semibold text-[1.8rem]">Chọn tác vụ</h3>
      <div className="grid grid-cols-3 gap-x-16 mt-10 font-semibold">
        <Link to="" className="px-6 py-4 rounded-2xl bg-lightBlue">
          Thông tin thanh toán
        </Link>
        <Link to="" className="px-6 py-4 rounded-2xl bg-lightBlue">
          Thông tin thanh toán
        </Link>
        <Link to="" className="px-6 py-4 rounded-2xl bg-lightBlue">
          Thông tin thanh toán
        </Link>
      </div>
    </div>
  );
};

export default Balance;
