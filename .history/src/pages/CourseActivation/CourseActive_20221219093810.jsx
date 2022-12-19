import React, { useState } from "react";
import { Link } from "react-router-dom";

const CourseActive = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleBubbling = (e) => {
    setOpenModal(false);
  };
  return (
    <div className="max-w-[52.5rem] text-center py-[4.5rem] px-[2rem] mx-auto">
      <h2 className="text-[3rem] font-bold text-primary mb-[1.5rem]">
        Kích hoạt mã
      </h2>
      <h4 className="mb-[3.5rem] text-[2rem] font-medium">
        Sử dụng mã COD hoặc E-voucher
      </h4>
      <img
        className="mb-[3.5rem] max-w-[16rem] mx-auto"
        src="https://kt.city/static/icon-active-cod.png"
        alt=""
      />
      <div className="mb-[2.5rem] md:grid md:grid-cols-auto md:gap-x-5">
        <input
          type="text"
          placeholder="Mã COD/E-voucher"
          className="py-[1.5rem] px-[2rem] placeholder:text-lightBlack bg-lightBlue rounded-lg shadow-xl"
        />
        <button className="w-[15rem] p-[1.5rem] font-semibold rounded-lg bg-primary text-white">
          Kích hoạt
        </button>
      </div>
      <div
        className="flex gap-x-4 items-center cursor-pointer"
        onClick={() => setOpenModal(true)}
      >
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
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
          />
        </svg>
        <span>Xem video hướng dẫn</span>
      </div>
      <div
        onClick={(e) => handleBubbling(e)}
        className={`fixed overflow-hidden inset-0 z-50 flex items-center justify-center  ${
          openModal ? "opacity-100 visible" : "opacity-0 invisible"
        }  bg-fadeBlack`}
      >
        <div className="max-w-[100rem] mx-auto m-h-[90vh] h-auto bg-backGround shadow-xl rounded-2xl relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="rgba(0, 0, 0, 0.4)"
            className="w-10 h-10 absolute right-4 top-4 cursor-pointer"
            onClick={() => setOpenModal(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div
            className="p-[5rem] grid grid-cols-2 gap-x-[5rem]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="">
              <Link>
                <img
                  className="w-[80rem] h-[25rem] rounded-lg"
                  src="https://source.unsplash.com/random"
                  alt=""
                />
              </Link>
              <h3 className="my-6 text-[2rem] font-medium text-primary">
                Video hướng dẫn kích hoạt COD
              </h3>
              <p>
                Dành cho khách hàng thanh toán tại KTcity sử dụng phương thức
                thanh toán nhận mã kích hoạt tại nhà
              </p>
            </div>
            <div className="">
              <Link>
                <img
                  className="w-[80rem] h-[25rem] rounded-lg"
                  src="https://source.unsplash.com/random"
                  alt=""
                />
              </Link>
              <h3 className="my-6 text-[2rem] font-medium text-primary">
                Video hướng dẫn sử dụng E-voucher
              </h3>
              <p>
                Dành cho khách hàng thanh toán tại KTcity sử dụng phương thức
                thanh toán nhận mã kích hoạt tại nhà
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseActive;
