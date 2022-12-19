import React from "react";

const CourseActive = () => {
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
      <div className="mb-[2.5rem] grid-cols-2 gap-x-[2rem]">
        <input
          type="text"
          placeholder="Mã COD/E-voucher"
          className="py-[1.5rem] px-[2rem]"
        />
        <button>Kích hoạt</button>
      </div>
    </div>
  );
};

export default CourseActive;
