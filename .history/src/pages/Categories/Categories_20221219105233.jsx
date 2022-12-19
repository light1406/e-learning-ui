import React from "react";
import Course from "@components/Course";
const Categories = () => {
  return (
    <div className="pt-[1.5rem] pb-[3rem]">
      <div className="container__page">
        <h2 className="text-[2rem] md:text-[3rem] md:flex md:justify-center text-center mb-[1.5rem] text-primary">
          <h3 className="font-bold">Chào bạn👋</h3>
          <h3>Hôm nay, bạn muốn học gì?</h3>
        </h2>
        <div className="lg:w-[48rem] mx-auto mb-[3.5rem] rounded-2xl bg-lightBlue flex items-center px-10 py-3">
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
        <ul className="hidden md:flex md:flex-wrap md:justify-center md:items-center mb-[3rem]">
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
            <span className="px-4">Front-end</span>
          </li>
          <li className="flex items-center mr-[2rem] mb-[2rem] text-[2rem] bg-lightBlue rounded-3xl cursor-pointer">
            <div className="flex items-center justify-center bg-primary text-white rounded-full w-[4rem] h-[4rem] mr-[1.25rem]">
              #
            </div>
            <span className="px-4">Back-end</span>
          </li>
          <li className="flex items-center mr-[2rem] mb-[2rem] text-[2rem] bg-lightBlue rounded-3xl cursor-pointer">
            <div className="flex items-center justify-center bg-primary text-white rounded-full w-[4rem] h-[4rem] mr-[1.25rem]">
              #
            </div>
            <span className="px-4">E-commerce</span>
          </li>
          <li className="flex items-center mr-[2rem] mb-[2rem] text-[2rem] bg-lightBlue rounded-3xl cursor-pointer">
            <div className="flex items-center justify-center bg-primary text-white rounded-full w-[4rem] h-[4rem] mr-[1.25rem]">
              #
            </div>
            <span className="px-4">DevOps</span>
          </li>
          <li className="flex items-center mr-[2rem] mb-[2rem] text-[2rem] bg-lightBlue rounded-3xl cursor-pointer">
            <div className="flex items-center justify-center bg-primary text-white rounded-full w-[4rem] h-[4rem] mr-[1.25rem]">
              #
            </div>
            <span className="px-4">Networking</span>
          </li>
          <li className="flex items-center mr-[2rem] mb-[2rem] text-[2rem] bg-lightBlue rounded-3xl cursor-pointer">
            <div className="flex items-center justify-center bg-primary text-white rounded-full w-[4rem] h-[4rem] mr-[1.25rem]">
              #
            </div>
            <span className="px-4">Algorithms</span>
          </li>
          <li className="flex items-center mr-[2rem] mb-[2rem] text-[2rem] bg-lightBlue rounded-3xl cursor-pointer">
            <div className="flex items-center justify-center bg-primary text-white rounded-full w-[4rem] h-[4rem] mr-[1.25rem]">
              #
            </div>
            <span className="px-4">Data Structures</span>
          </li>
        </ul>
        <div className="mb-[3rem]">
          <h2 className="flex items-center gap-x-6 mb-[2.5rem] heading-2">
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
          </h2>
          <div className="slider__home">
            <Course></Course>
            <Course></Course>
            <Course src="https://kt.city/_next/image?url=%2Fstatic%2Flabel-new.png&w=128&q=75"></Course>
            <Course></Course>
            <Course src="https://kt.city/_next/image?url=%2Fstatic%2Flabel-new.png&w=128&q=75"></Course>
          </div>
        </div>
        <div className="mb-[3rem]">
          <h2 className="flex items-center gap-x-6 mb-[2.5rem] heading-2">
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
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            Nổi bật tháng này
          </h2>
          <div className="slider__home">
            <Course src="https://kt.city/_next/image?url=%2Fstatic%2Flabel-new.png&w=128&q=75"></Course>
            <Course></Course>
            <Course></Course>
          </div>
        </div>
        <div className="mb-[3rem]">
          <h2 className="flex items-center gap-x-6 mb-[2.5rem] heading-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#0056d2"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
            Kiến thức chất lượng khác
          </h2>
          <div className="slider__home">
            <Course></Course>
            <Course src="https://kt.city/_next/image?url=%2Fstatic%2Flabel-new.png&w=128&q=75"></Course>
            <Course></Course>
          </div>
        </div>
        <button className="block mt-[3rem] py-2 px-6 rounded-2xl bg-lightBlue mx-auto">
          Xem thêm...
        </button>
      </div>
    </div>
  );
};

export default Categories;
