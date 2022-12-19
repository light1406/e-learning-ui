import React from "react";

const CourseDetail = () => {
  return (
    <div className="py-[4rem] bg-hero px-[8rem]">
      <div className="flex items-center justify-center gap-x-[1rem] max-w-[18rem] text-white tex-[2.8rem] font-semibold bg-primary py-3 rounded-xl mb-[2.5rem]">
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
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span>12345 đang học</span>
      </div>
      <h1 className="text-white text-[3rem] font-semibold mb-[3rem]">
        Khoá học đầu tư Crypto 101 - Từng bước để hiểu và đầu tư đúng đắn trong
        thị trường tiền điện tử.
      </h1>
      <div className="flex items-center justify-between w-[calc(60%_-_4rem)] text-[2.4rem] text-white mb-[3rem]">
        <a href="" className="text-primary font-semibold">
          Bởi: <span>Madihu</span>
        </a>
        <h4>
          Cập nhật <span>08/2022</span>
        </h4>
      </div>
      <div className="flex justify-between gap-x-[6rem]">
        <div className="flex flex-col w-[65%] ">
          <img
            src="https://static.kt.city/ck7ogwf9m04zh0872r31is970/photo_2020-08-11_17-27-31-1597141668992.jpg"
            alt=""
            className="max-h-[35rem] cursor-zoom-in w-full"
          />
          <ul className="flex justify-between p-4">
            <li>
              <img src="" alt="" className="w-[8rem] h-[8rem]" />
            </li>
            <li>
              <img src="" alt="" className="w-[8rem] h-[8rem]" />
            </li>
            <li>
              <img src="" alt="" className="w-[8rem] h-[8rem]" />
            </li>
            <li>
              <img src="" alt="" className="w-[8rem] h-[8rem]" />
            </li>
            <li>
              <img src="" alt="" className="w-[8rem] h-[8rem]" />
            </li>
            <li>
              <img src="" alt="" className="w-[8rem] h-[8rem]" />
            </li>
          </ul>
        </div>
        <div className="p-4 bg-white rounded-2xl text-[2.4rem] w-[40%] px-6 py-8">
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
    </div>
  );
};

export default CourseDetail;
