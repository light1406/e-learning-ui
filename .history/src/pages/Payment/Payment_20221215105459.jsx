import React from "react";
import { Link } from "react-router-dom";

const Payment = () => {
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
        Thông tin thanh toán
      </div>
      <div className="">
        <form action="" className="w-full mt-10">
          <div className="grid grid-cols-2 gap-x-20 gap-y-4">
            <div className="">
              <label htmlFor="name" className="font-medium">
                Chủ tài khoản
              </label>
              <div className="py-4 px-6 my-5 border border-lightBlue rounded-2xl">
                <input
                  id="name"
                  type="text"
                  className="w-full "
                  placeholder="Chủ tài khoản"
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="" className="font-medium">
                số CCCD/CMND
              </label>
              <div className="py-4 px-6 my-5 border border-lightBlue rounded-2xl">
                <input
                  type="text"
                  className="w-full "
                  placeholder="Số CCCD/CMND"
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="" className="font-medium">
                Số tài khoản
              </label>
              <div className="py-4 px-6 my-5 border border-lightBlue rounded-2xl">
                <input
                  type="text"
                  className="w-full "
                  placeholder="Số tài khoản"
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="" className="font-medium">
                Ngân hàng
              </label>
              <div className="py-4 px-6 my-5 border border-lightBlue rounded-2xl relative">
                <div className="flex items-center justify-between cursor-pointer">
                  <span>Ngân hàng</span>
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
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
                <ul className="absolute w-full translate-y-4 translate-x-[-1.5rem] border border-lightBlue rounded-xl bg-backGround max-h-[30rem] overflow-auto hidden">
                  <li className="px-5 py-2 shadow-md">
                    <input type="text" placeholder="Tìm kiếm ngân hàng" />
                  </li>
                  <li className="px-5 py-2 hover:bg-lightBlue">Test</li>
                  <li className="px-5 py-2 hover:bg-lightBlue">Test</li>
                  <li className="px-5 py-2 hover:bg-lightBlue">Test</li>
                  <li className="px-5 py-2 hover:bg-lightBlue">Test</li>
                  <li className="px-5 py-2 hover:bg-lightBlue">Test</li>
                  <li className="px-5 py-2 hover:bg-lightBlue">Test</li>
                  <li className="px-5 py-2 hover:bg-lightBlue">Test</li>
                  <li className="px-5 py-2 hover:bg-lightBlue">Test</li>
                  <li className="px-5 py-2 hover:bg-lightBlue">Test</li>
                  <li className="px-5 py-2 hover:bg-lightBlue">Test</li>
                  <li className="px-5 py-2 hover:bg-lightBlue">Test</li>
                  <li className="px-5 py-2 hover:bg-lightBlue">Test</li>
                  <li className="px-5 py-2 hover:bg-lightBlue">Test</li>
                  <li className="px-5 py-2 hover:bg-lightBlue">Test</li>
                  <li className="px-5 py-2 hover:bg-lightBlue">Test</li>
                </ul>
              </div>
            </div>
            <div className="">
              <label htmlFor="" className="font-medium">
                Chi nhánh
              </label>
              <div className="py-4 px-6 my-5 border border-lightBlue rounded-2xl">
                <input
                  type="text"
                  className="w-full "
                  placeholder="Chi nhánh"
                />
              </div>
            </div>
            <div className=""></div>
            <div className="">
              <label htmlFor="" className="font-medium">
                CMND/CCCD mặt trước
              </label>
              <div className="py-4 px-6 my-5 border border-lightBlue rounded-2xl">
                <label
                  htmlFor="idFront"
                  className="cursor-pointer flex justify-center items-center h-[20rem]"
                >
                  <input type="file" id="idFront" className="hidden" />
                  <img
                    src="https://kt.city/static/icon-upload.png"
                    alt=""
                    className="max-w-[55%]"
                  />
                </label>
              </div>
            </div>
            <div className="">
              <label htmlFor="" className="font-medium">
                CMND/CCCD mặt sau
              </label>
              <div className="py-4 px-6 my-5 border border-lightBlue rounded-2xl">
                <label
                  htmlFor="idBack"
                  className="cursor-pointer flex justify-center items-center h-[20rem]"
                >
                  <input type="file" id="idBack" className="hidden" />
                  <img
                    src="https://kt.city/static/icon-upload.png"
                    alt=""
                    className="max-w-[55%]"
                  />
                </label>
              </div>
            </div>
            <button className="p-4 w-[50% - 2] bg-primary">
              Lưu thông tin
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Payment;
