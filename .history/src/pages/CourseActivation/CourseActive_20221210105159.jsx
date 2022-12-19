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
      <div className="flex flex-col items-center relative my-10">
        <label htmlFor="">Nhập mã kích hoạt</label>
        <input
          className="min-w-[460px] rounded-2xl shadow-lg p-4"
          type="text"
          placeholder="13x3ad3DosZ"
        />
        <button></button>
      </div>
      <a href="">Kích hoạt ngay</a>
      <p>Vui lòng đăng nhập trước khi nhập kích hoạt mã</p>
      <p>Hỗ trợ: 19001568 || 090 488 6095</p>
    </div>
  );
};

export default CourseActive;
