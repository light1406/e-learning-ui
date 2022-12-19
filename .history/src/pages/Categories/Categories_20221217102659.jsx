import React from "react";
import Course from "@components/Course";
const Categories = () => {
  return (
    <div className="py-[5rem]">
      <div className="container__page">
        <h2 className="text-[3rem] text-center mb-[1.5rem]">
          👋
          <span>Hôm nay, bạn muốn học gì?</span>
        </h2>
        <div className="w-[48rem] mx-auto mb-[8rem] rounded-2xl bg-lightBlue flex items-center px-10 py-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 mr-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            placeholder="Tìm kiến thức"
            className="bg-transparent h-[4rem] w-full"
          />
        </div>
        <ul className="flex flex-wrap justify-center items-center mb-[3rem]">
          <li className="flex items-center mr-[2rem] mb-[2rem] text-[2rem] bg-lightBlue rounded-3xl cursor-pointer">
            <div className="flex items-center justify-center bg-primary text-white rounded-full w-[4rem] h-[4rem] mr-[1.25rem]">
              #
            </div>
            <span className="px-4">Tất cả</span>
          </li>
          <li className="flex items-center mr-[2rem] mb-[2rem] text-[2rem] bg-lightBlue rounded-3xl cursor-pointer">
            <div className="flex items-center justify-center bg-primary text-white rounded-full w-[4rem] h-[4rem] mr-[1.25rem]">
              #
            </div>
            <span className="px-4">Tất cả</span>
          </li>
          <li className="flex items-center mr-[2rem] mb-[2rem] text-[2rem] bg-lightBlue rounded-3xl cursor-pointer">
            <div className="flex items-center justify-center bg-primary text-white rounded-full w-[4rem] h-[4rem] mr-[1.25rem]">
              #
            </div>
            <span className="px-4">Tất cả</span>
          </li>
        </ul>
        <div className="mb-[3rem]">
          <h3 className="flex items-center gap-x-6 text-[2rem] font-semibold mb-[2.5rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="rgb(250, 94, 94)"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
              />
            </svg>
            Nổi bật
          </h3>
          <div className="grid grid-cols-3 gap-x-[3rem]">
            <Course></Course>
            <Course></Course>
            <Course src="https://kt.city/_next/image?url=%2Fstatic%2Flabel-new.png&w=128&q=75"></Course>
          </div>
        </div>
        <div className="mb-[3rem]">
          <h3 className="flex items-center gap-x-6 text-[2rem] font-semibold mb-[2.5rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="rgb(250, 94, 94)"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
              />
            </svg>
            Tất cả kiến thức
          </h3>
          <div className="grid grid-cols-3 gap-x-[3rem]">
            <Course></Course>
            <Course></Course>
            <Course src="https://kt.city/_next/image?url=%2Fstatic%2Flabel-new.png&w=128&q=75"></Course>
          </div>
        </div>
        <div className="mb-[3rem]">
          <h3 className="flex items-center gap-x-6 text-[2rem] font-semibold mb-[2.5rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="rgb(250, 94, 94)"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
              />
            </svg>
            Xu hướng 24h qua
          </h3>
          <div className="grid grid-cols-3 gap-x-[3rem]">
            <Course></Course>
            <Course></Course>
            <Course src="https://kt.city/_next/image?url=%2Fstatic%2Flabel-new.png&w=128&q=75"></Course>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
