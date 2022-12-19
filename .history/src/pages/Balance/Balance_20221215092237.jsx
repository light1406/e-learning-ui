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
      <p>
        Để thao tác rút tiền, bạn cần có số dư tối thiểu đạt
        <span className="text-primary font-medium"> 200,000đ</span> và cập nhật
        đầy đủ thông tin thanh toán.
      </p>
    </div>
  );
};

export default Balance;
