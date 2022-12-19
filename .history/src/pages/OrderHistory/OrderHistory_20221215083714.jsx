import React from "react";

const OrderHistory = () => {
  return (
    <div>
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
      <div className="grid grid-cols-order">
        <div className="">Tất cả</div>
        <div className="">Tất cả</div>
        <div className="relative p-4 w-full border border-lightBlack">
          <input type="text" placeholder="Tìm kiếm..." />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 absolute right-4 top-[50%] translate-y-[-50%]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
