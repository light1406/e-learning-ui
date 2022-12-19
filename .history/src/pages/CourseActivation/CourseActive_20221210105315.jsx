import React from "react";

const CourseActive = () => {
  return (
    <div className="text-center p-6 container my-[40px]">
      <h1 className="text-[32px] font-semibold uppercase">
        Kích hoạt khóa học
      </h1>
      <h5 className="font-semibold">
        <span>Lưu ý:</span> Mỗi khóa học chỉ cần kích hoạt 1 lần duy nhất
      </h5>
      <p className="mt-[10px]">
        <span className="inline-block rounded-full bg-lightBlue w-[24px] h-[24px] mr-4">
          1
        </span>
        Bạn
        <strong>chưa có</strong> tài khoản đăng nhập?, vui lòng
        <a href="">đăng ký tài khoản mới</a>
      </p>
      <p className="mt-[10px]">
        <span className="inline-block rounded-full bg-lightBlue w-[24px] h-[24px] mr-4">
          2
        </span>
        Bạn <strong>đã có</strong> tài khoản đăng nhập?, vui lòng
        <a href="">Đăng nhập tài khoản</a>
      </p>
      <label htmlFor="">Nhập mã kích hoạt</label>
      <div className="my-10">
        <input
          className="min-w-[460px] rounded-2xl shadow-lg p-4"
          type="text"
          placeholder="13x3ad3DosZ"
        />
        <button className="">
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
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
            />
          </svg>
        </button>
      </div>
      <a href="">Kích hoạt ngay</a>
      <p>Vui lòng đăng nhập trước khi nhập kích hoạt mã</p>
      <p>Hỗ trợ: 19001568 || 090 488 6095</p>
    </div>
  );
};

export default CourseActive;
