import React from "react";
import Course from "@pages/Home/Course";

const Search = () => {
  return (
    <div>
      <p>
        Kết quả tìm kiếm: <span>12</span>
      </p>
      <div className="flex items-center mt-[40px]">
        <div className="flex items-center gap-x-[10px] font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
            />
          </svg>

          <span className="mr-[20px]">Sắp xếp</span>
        </div>

        <ul className="flex items-center gap-x-[20px]">
          <li className="cursor-pointer">Sắp xếp</li>
          <li className="cursor-pointer">Sắp xếp</li>
          <li className="cursor-pointer">Sắp xếp</li>
          <li className="cursor-pointer">Sắp xếp</li>
          <li className="cursor-pointer">Sắp xếp</li>
        </ul>
      </div>
      <div className="grid grid-cols-4">
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
      </div>
    </div>
  );
};

export default Search;
