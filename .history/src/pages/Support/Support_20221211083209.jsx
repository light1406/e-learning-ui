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
              <div class="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    Options
                    <svg
                      class="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                <div
                  class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div class="py-1" role="none">
                    <a
                      href="#"
                      class="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                    >
                      Account settings
                    </a>
                    <a
                      href="#"
                      class="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-1"
                    >
                      Support
                    </a>
                    <a
                      href="#"
                      class="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-2"
                    >
                      License
                    </a>
                    <form method="POST" action="#" role="none">
                      <button
                        type="submit"
                        class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-3"
                      >
                        Sign out
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <textarea
              name=""
              className="w-full min-h-[100px] p-3 mt-[10px] bg-lightBlue rounded-md"
              placeholder="Nhập nội dung cần hỗ trợ"
            ></textarea>
            <div className="mt-[20px]">
              <h3 className="font-semibold">Tải ảnh lên</h3>
              <div className="grid grid-cols-3 my-[10px] gap-x-4">
                <label className="flex items-center justify-center cursor-pointer border-[1px] border-lightBlue">
                  <input className="hidden" type="file" />
                  <img
                    className="max-w-[55%] "
                    src="https://kt.city/static/icon-upload.png"
                    alt=""
                  />
                </label>
                <label className="flex items-center justify-center cursor-pointer border-[1px] border-lightBlue">
                  <input className="hidden" type="file" />
                  <img src="https://kt.city/static/icon-upload.png" alt="" />
                </label>
                <label className="flex items-center justify-center cursor-pointer border-[1px] border-lightBlue">
                  <input className="hidden" type="file" />
                  <img src="https://kt.city/static/icon-upload.png" alt="" />
                </label>
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
            className="max-w-full"
            src="https://kt.city/static/img-support.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Help;
