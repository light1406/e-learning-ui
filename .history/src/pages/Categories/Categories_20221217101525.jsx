import React from "react";

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
          <li className="flex items-center mr-[2rem] mb-[2rem] text-[2rem] bg-lightBlue rounded-3xl">
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
      </div>
    </div>
  );
};

export default Categories;
