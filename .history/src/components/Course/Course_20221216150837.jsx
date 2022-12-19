import React from "react";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <Link to="/course-detail" className="">
      <div className="rounded-2xl">
        <div className=""></div>
        <div className="">
          <h3>
            Phùng Thái Học: Khóa học viết quảng cáo - nghệ thuật của tư duy và
            ngôn từ
          </h3>
          <div className="">
            <div className="">
              <img src="" alt="" />
              <span>Phùng Thái Học</span>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Course;
