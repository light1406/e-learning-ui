import React from "react";

const Course = () => {
  return (
    <div className="bg-white rounded-xl relative shadow-md">
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
        <div className="p-4">
          <h2 className="font-semibold p-2 mt-2">Hoc hat cung tui</h2>
          <div className="mt-6 flex items-center justify-between">
            <span>Ha ke tu</span>
            <span>700.000</span>
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
