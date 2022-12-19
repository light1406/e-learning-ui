import React from "react";

const MyClass = () => {
  return (
    <div className="container">
      <h1>Khu vực học tập</h1>
      <p>Khóa học, tài liệu mà bạn đăng ksý sẽ được hiển thị dưới đây</p>
      <ul className="flex items-center gap-x-12">
        <li className="cursor-pointer px-12 py-4 font-semibold border-b border-b-primary">
          <h4>Của tôi</h4>
        </li>
        <li className="cursor-pointer px-12 py-4 font-semibold border-b border-b-primary">
          <h4>Trend 24h qua?</h4>
        </li>
        <li className="cursor-pointer px-12 py-4 font-semibold border-b border-b-primary">
          <h4>Review mới</h4>
        </li>
        <li className="w-[32rem] ml-auto">
          <div className="border border-lightBlue rounded-2xl p-4">
            <input type="text" placeholder="Tìm kiếm" />
          </div>
        </li>
      </ul>
      {/* Mine */}
      <div className="">
        <img src="" alt="" />
        <div className="">
          <h3>
            Khoá học HTML CSS nâng cao cắt giao diện toàn tập với Gulp, Pug và
            Sass
          </h3>
          <h4>Học cách đây 2 tháng trước</h4>
          <div className="bg-lightBlue rounded-2xl">
            <div className="bg-primary w-[80%] rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClass;
