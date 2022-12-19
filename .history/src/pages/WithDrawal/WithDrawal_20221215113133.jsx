import React from "react";
import { Link } from "react-router-dom";

const Withdrawal = () => {
  return (
    <>
      <div className="heading flex items-center gap-x-5">
        <Link to="/me" className="heading">
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
        Yêu cầu thanh toán
      </div>
      <h3 className="text-lightRed px-4 py-2">
        Bạn chưa cập nhật thông tin thanh toán
      </h3>
      xxx
    </>
  );
};

export default Withdrawal;
