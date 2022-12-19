import React from "react";

const CourseActive = () => {
  return (
    <div className="text-center p-6">
      <p>Kích hoạt khóa học</p>
      <h5>
        <span>Lưu ý:</span> Mỗi khóa học chỉ cần kích hoạt 1 lần duy nhất
      </h5>
      <p>
        <span>1</span>Bạn <strong>chưa có</strong> tài khoản đăng nhập?, vui
        lòng
        <a href="">đăng ký tài khoản mới</a>
      </p>
      <p>
        Bạn <strong>đã có</strong> tài khoản đăng nhập?, vui lòng{" "}
        <a href="">Đăng nhập tài khoản</a>
      </p>
      <label htmlFor="">Nhập mã kích hoạt</label>
      <div className="">
        <input type="text" placeholder="13x3ad3DosZ" />
        <button></button>
      </div>
    </div>
  );
};

export default CourseActive;
