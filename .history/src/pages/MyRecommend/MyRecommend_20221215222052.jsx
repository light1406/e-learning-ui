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
      <div className="mt-8 flex items-center justify-between mb-10 ">
        <div className="relative">
          <div className="flex items-center gap-x-3 p-4 border border-lightBlue rounded-xl ">
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
          <ul className="absolute border border-lightBlue w-full rounded-xl bg-backGround">
            <li className="py-2 px-4">Tất cả</li>
            <li className="py-2 px-4">Chờ duyệt</li>
            <li className="py-2 px-4">Chấp nhận</li>
            <li className="py-2 px-4">Từ chối</li>
          </ul>
        </div>
        <div className="relative py-4 pl-8 pr-16 border border-lightBlue rounded-3xl">
          <input
            type="text"
            className="w-full rounded-xl"
            placeholder="Tìm kiếm..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 absolute right-3 top-[50%] translate-y-[-50%]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      <div className="p-[2.5rem] border border-lightBlue rounded-xl">
        <div className="my-[2.5rem] flex flex-col items-center justify-center ">
          <img
            src="https://kt.city/static/img-no-result.png"
            alt=""
            className="max-w-[13rem] mb-10"
          />
          <h3 className="text-[2rem] text-lightBlack">
            Không tìm thấy kết quả nào
          </h3>
        </div>
      </div>
    </>
  );
};

export default MyRecommend;
