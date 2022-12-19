import React from "react";

const Course = () => {
  return (
    <div className="bg-white rounded-xl relative">
      <a href="">
        <span className="absolute bg-primary text-white p-2">72%</span>
        <div className="">
          <img
            src="https://static.unica.vn/upload/images/2019/04/khoa-hoc-dem-hat-guitar-can-ban_m_1555570862.jpg"
            alt=""
          />
        </div>
        <h2>Hoc hat cung tui</h2>
        <div className="">
          <span>Ha ke tu</span>
          <span>700.000</span>
        </div>
        <div className="">
          <span>rate</span>
          <span>200.000</span>
        </div>
      </a>
    </div>
  );
};

export default Course;
