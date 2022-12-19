import React from "react";

const Help = () => {
  return (
    <div className="px-20 container">
      <h1>Bạn cần hỗ trợ</h1>
      <div className="flex justify-between">
        <div className="">
          <div className="">Thời gian hỗ trợ</div>
          <p>
            Thời gian KTcity hỗ trợ là từ 9:00 đến 18:00 từ T2 đến T6. Tuy nhiên
            chúng tôi sẽ ưu tiên hỗ trợ những vấn đề quan trọng ngoài giờ làm
            việc.
          </p>
          <input type="text" placeholder="Nhập tên của bạn" />
          <input type="email" placeholder="Nhập email của bạn" />
          <select name="" id="">
            <option value="">Sự cố đơn hàng</option>
          </select>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Nhập nội dung cần hỗ trợ"
          ></textarea>
          <div className="">
            <h3>Tải ảnh lên</h3>
            <div className="">h1</div>
            <div className="">h2</div>
            <div className="">h3</div>
          </div>
          <div className="">
            <a href="">Gửi yêu cầu hỗ trợ</a>
          </div>
        </div>
        <div className="">
          <img src="https://kt.city/static/img-support.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Help;
