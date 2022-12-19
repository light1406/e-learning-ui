import React from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <>
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
        Thông tin thanh toán
      </div>
      <div className="">
        <form action="" className="w-full mt-10">
          <div className="grid grid-cols-2">
            <div className="">
              <label htmlFor="">Chủ tài khoản</label>
              <input
                type="text"
                className="w-full"
                placeholder="Chủ tài khoản"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Payment;
