import React from "react";
import { Link } from "react-router-dom";

const MyRecommend = () => {
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
        Khuyến nghị của tôi
      </div>
      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-x-3 p-4 border border-lightBlue rounded-xl">
          <span>Lọc trạng thái</span>
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
        <div className="">
          <input
            type="text"
            className="w-full rounded-xl py-4 px-6"
            placeholder="Tìm kiếm"
          />
        </div>
      </div>
    </>
  );
};

export default MyRecommend;
