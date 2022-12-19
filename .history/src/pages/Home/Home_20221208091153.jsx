import React from "react";
import Banner from "@pages/Home/Banner";
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
      <div className="">
        <h1>Top bán chạy</h1>
        <div className="">
          <div className="">
            <div className="">
              <img src="" alt="" />
            </div>
            <div className="">
              <div className="">Hoc dem dan Guitar cung Hekaky</div>
              <div className="">
                <span>Ha ke tu</span>
                <span>700.000</span>
              </div>
              <div className="">
                <span>Rate</span>
                <span>199.000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
