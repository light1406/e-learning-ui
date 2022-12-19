import React from "react";
import Banner from "@pages/Home/Banner";
import Course from "@pages/Home/Course";

const Home = () => {
  return (
    <div className="container my-5">
      <div className="flex gap-6 w-full">
        <div className="w-[25%]">
          <ul className="shadow bg-white">
            <li className="p-4 hover:bg-backGround cursor-pointer">
              <a href="">Test</a>
            </li>
            <li className="p-4 hover:bg-backGround cursor-pointer">
              <a href="">Test</a>
            </li>
            <li className="p-4 hover:bg-backGround cursor-pointer">
              <a href="">Test</a>
            </li>
            <li className="p-4 hover:bg-backGround cursor-pointer">
              <a href="">Test</a>
            </li>
            <li className="p-4 hover:bg-backGround cursor-pointer">
              <a href="">Test</a>
            </li>
            <li className="p-4 hover:bg-backGround cursor-pointer">
              <a href="">Test</a>
            </li>
            <li className="p-4 hover:bg-backGround cursor-pointer">
              <a href="">Test</a>
            </li>
            <li className="p-4 hover:bg-backGround cursor-pointer">
              <a href="">Test</a>
            </li>
            <li className="p-4 hover:bg-backGround cursor-pointer">
              <a href="">Test</a>
            </li>
            <li className="p-4 hover:bg-backGround cursor-pointer">
              <a href="">Test</a>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <div className="shadow h-full">
            <Banner></Banner>
          </div>
        </div>
      </div>
      <div className="my-[40px]">
        <h1 className="text-[20px] uppercase font-bold">Top bán chạy</h1>
        <div className="grid grid-cols-4 gap-[20px]">
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
        </div>
      </div>
    </div>
  );
};

export default Home;
