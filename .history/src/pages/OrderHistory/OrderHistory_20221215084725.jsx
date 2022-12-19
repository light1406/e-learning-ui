import React from "react";

const OrderHistory = () => {
  return (
    <div className="">
      <div className="heading flex items-center gap-x-5">
        Cá nhân
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
        Lịch sử mua hàng
      </div>
      <div className="grid grid-cols-order place-items-center gap-x-10  mt-12 my-6">
        <div className="w-full flex items-center justify-between p-4 border border-lightBlue rounded-xl">
          Tất cả
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
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div className="w-full flex items-center justify-between p-4 border border-lightBlue  rounded-xl">
          Tất cả
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
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div className="relative p-4 pr-20 w-[calc(100%_-_3.5rem)] border border-lightBlue rounded-3xl">
          <input type="text" placeholder="Tìm kiếm..." className="w-full" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 absolute right-5 top-[50%] translate-y-[-50%]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex justify-between">
          <h3>VT3XAX</h3>
          <h3 className="">Đã duyệt</h3>
        </div>
        <div className="flex items-center gap-x-6">
          <span>22/07/2021</span>
          <img
            src="https://kt.city/static/pm-vnpay.png"
            alt=""
            className="max-h-[2rem]"
          />
          <span>VNPay(649,000đ)</span>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
