import React from "react";

const CourseDetail = () => {
  return (
    <div>
      <div className="flex items-center gap-x-[1rem] max-w-[18rem] text-white tex-[2.4rem] font-semibold bg-primary px-1 py-2 rounded-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span>12345 đang học</span>
      </div>
      <h1>
        Khoá học đầu tư Crypto 101 - Từng bước để hiểu và đầu tư đúng đắn trong
        thị trường tiền điện tử.
      </h1>
      <div className="">
        <a href="">
          Bởi: <span>Madihu</span>
        </a>
        <h4>
          Cập nhật <span>08/2022</span>
        </h4>
      </div>
      <div className="">
        <div className="">
          <img src="" alt="" />
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="">
          <span>2412312đ</span>
          <div className="">
            <h2>123123đ</h2> <h4>Tiết kiệm 20%</h4>
          </div>
          <form action="">
            <input type="text" placeholder="Tên của bạn" />
            <input type="text" placeholder="Email của bạn" />
            <button>Đăng ký học (online)</button>
            <h4>Hoàn tất đăng ký bằng</h4>
            <div className="">
              <div className="">Facebook</div>
              <div className="">Google</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
