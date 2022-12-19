import React from "react";

const Course = () => {
  return (
    <div className="bg-white rounded-xl relative shadow-md overflow-hidden">
      <a href="">
        <span className="absolute bg-primary text-white px-2 py-1 rounded">
          72%
        </span>
        <div className="">
          <img
            src="https://static.unica.vn/upload/images/2019/04/khoa-hoc-dem-hat-guitar-can-ban_m_1555570862.jpg"
            alt=""
          />
        </div>
        <div className="p-6">
          <h2 className="font-semibold">Học đệm đàn cùng Kikikta</h2>
          <div className="mt-6 flex items-center justify-between text-[12px] text-lightBlack">
            <span className="">Hà thủ ô</span>
            <span>
              700.000<sup>đ</sup>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span>rate</span>
            <span>200.000</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Course;
