import React from "react";

const Help = () => {
  return (
    <div className="container my-20">
      <h1 className="heading">Bạn cần hỗ trợ?</h1>
      <div className="grid grid-cols-2 gap-[150px]">
        <div className="mt-[30px]">
          <div className="gap-x-3 p-6 rounded-2xl bg-lightBlue mb-[20px]">
            <div className="flex items-center gap-x-3 p-2">
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
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
              <span className="text-[20px] font-semibold">
                Thời gian hỗ trợ?
              </span>
            </div>
            <p className="p-2">
              Thời gian KTcity hỗ trợ là từ 9:00 đến 18:00 từ T2 đến T6. Tuy
              nhiên chúng tôi sẽ ưu tiên hỗ trợ những vấn đề quan trọng ngoài
              giờ làm việc.
            </p>
          </div>
          <form action="">
            <div className="">
              <input
                className="p-3 bg-lightBlue rounded-sm w-full mt-[10px]"
                type="text"
                placeholder="Nhập tên của bạn"
              />
            </div>
            <div className="">
              <input
                className="p-3 bg-lightBlue rounded-sm w-full mt-[10px]"
                type="email"
                placeholder="Nhập email của bạn"
              />
            </div>
            <div className="">
              <select name="" id="">
                <option value="">Sự cố đơn hàng</option>
              </select>
            </div>
            <textarea
              name=""
              className="w-full min-h-[100px] p-3 mt-[10px] bg-lightBlue rounded-md"
              placeholder="Nhập nội dung cần hỗ trợ"
            ></textarea>
            <div className="">
              <h3 className="font-semibold">Tải ảnh lên</h3>
              <div className="grid grid-cols-3">
                <label className="flex cursor-pointer">
                  <input className="hidden" type="file" />
                  <img src="https://kt.city/static/icon-upload.png" alt="" />
                </label>
                <div className="">h2</div>
                <div className="">h3</div>
              </div>
            </div>
            <a
              href=""
              className="block mt-[20px] py-5 bg-primary text-white font-semibold text-center rounded-2xl"
            >
              Gửi yêu cầu hỗ trợ
            </a>
          </form>
        </div>
        <div className="">
          <img
            className="w-full h-full"
            src="https://kt.city/static/img-support.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Help;
