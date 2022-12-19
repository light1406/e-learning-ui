import React from "react";

const Categories = () => {
  return (
    <div className="py-[5rem]">
      <div className="container__page">
        <h2 className="text-[3rem] text-center mb-[1.5rem]">
          👋
          <span>Hôm nay, bạn muốn học gì?</span>
        </h2>
        <div className="w-[48rem] mx-auto rounded-xl bg-lightBlue flex items-center px-4 py-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 mr-2"
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
            className="bg-transparent h-[4rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
