import React from "react";
import Banner from "@pages/Home/Banner";
const Home = () => {
  return (
    <div className="container my-5">
      <div className="flex gap-6 w-full">
        <div className="w-[25%]">
          <ul className="shadow">
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
        <div className="w-full  h-[400px]">
          <div className="shadow h-full">
            <Banner></Banner>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
