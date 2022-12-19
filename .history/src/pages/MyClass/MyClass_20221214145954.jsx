import React from "react";

const MyClass = () => {
  return (
    <div className="container">
      <h1>Khu vực học tập</h1>
      <p>Khóa học, tài liệu mà bạn đăng ksý sẽ được hiển thị dưới đây</p>
      <ul className="flex items-center gap-x-12">
        <li className="cursor-pointer px-4 py-4 font-semibold border-b border-b-primary">
          <h4>Của tôi</h4>
        </li>
        <li>
          <h4>Trend 24h qua?</h4>
        </li>
        <li>
          <h4>Review mới</h4>
        </li>
        <li className="w-[32rem] ml-auto">
          <div className="border border-lightBlue rounded-2xl p-4">
            <input type="text" placeholder="Tìm kiếm" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MyClass;
