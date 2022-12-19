import React from "react";
import Course from "@pages/Home/Course";

const Search = () => {
  return (
    <div>
      <p>
        Kết quả tìm kiếm: <span>12</span>
      </p>
      <div className="flex items-center mt-[40px]">
        <span className="mr-[20px]">Sắp xếp</span>
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
