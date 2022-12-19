import React from "react";

const Help = () => {
  return (
    <div className="px-20 container mt-20">
      <h1 className="heading">Bạn cần hỗ trợ</h1>
      <div className="flex justify-between gap-[150px]">
        <div className="">
          <div className="flex items-center gap-x-3">
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
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>
            <span>Thời gian hỗ trợ?</span>
          </div>
          <p>
            Thời gian KTcity hỗ trợ là từ 9:00 đến 18:00 từ T2 đến T6. Tuy nhiên
            chúng tôi sẽ ưu tiên hỗ trợ những vấn đề quan trọng ngoài giờ làm
            việc.
          </p>
          <form action="">
            <div className="">
              <input type="text" placeholder="Nhập tên của bạn" />
            </div>
            <div className="">
              <input type="email" placeholder="Nhập email của bạn" />
            </div>
            <div className="">
              <select name="" id="">
                <option value="">Sự cố đơn hàng</option>
              </select>
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Nhập nội dung cần hỗ trợ"
            ></textarea>
            <div className="flex justify-between">
              <h3>Tải ảnh lên</h3>
              <div className="">h1</div>
              <div className="">h2</div>
              <div className="">h3</div>
            </div>
            <a href="">Gửi yêu cầu hỗ trợ</a>
          </form>
        </div>
        <div className="">
          <img src="https://kt.city/static/img-support.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Help;
