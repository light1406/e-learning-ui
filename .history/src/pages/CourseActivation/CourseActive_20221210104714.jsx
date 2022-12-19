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
        <h4 className="p-4 rounded-full bg-lightBlue">1</h4>Bạn{" "}
        <strong>chưa có</strong> tài khoản đăng nhập?, vui lòng
        <a href="">đăng ký tài khoản mới</a>
      </p>
      <p>
        <span>2</span> Bạn <strong>đã có</strong> tài khoản đăng nhập?, vui lòng
        <a href="">Đăng nhập tài khoản</a>
      </p>
      <label htmlFor="">Nhập mã kích hoạt</label>
      <div className="">
        <input type="text" placeholder="13x3ad3DosZ" />
        <button></button>
      </div>
      <a href="">Kích hoạt ngay</a>
      <p>Vui lòng đăng nhập trước khi nhập kích hoạt mã</p>
      <p>Hỗ trợ: 19001568 || 090 488 6095</p>
    </div>
  );
};

export default CourseActive;
