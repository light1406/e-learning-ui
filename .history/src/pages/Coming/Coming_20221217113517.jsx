import React from "react";
import Banner from "@components/Banner";
const Coming = () => {
  return (
    <div>
      <div className="bg-coming h-[80rem] bg-center bg-cover bg-no-repeat flex justify-center items-end ">
        <div className="-translate-y-[100%]">
          <h1 className="uppercase text-[4.8rem] font-bold text-white mb-3">
            Sắp diễn ra tại KTCity
          </h1>
          <h4 className="text-[2.2rem] font-semibold text-white text-center py-5 bg-lightPurple rounded-xl">
            Đặt trước bây giờ để tiết kiệm chi phí.
          </h4>
        </div>
      </div>
      <div className="px-[2rem]">
        <div className="w-[102rem] mx-auto">
          <div className="flex">
            <a
              href=""
              className="w-[20rem] h-[20rem] rounded-2xl overflow-hidden shadow-shadowSmall flex-shrink"
            >
              <img
                src="https://static.kt.city/ckdh3zgkqqk5z0872fk9h6et2/banhangtrangcanhankhoahoc2x-100-1622103760819.jpg"
                alt=""
                className="w-full h-full  flex-shrink"
              />
            </a>
            <a className="px-[3.5rem] py-[2rem] mb-[1.5rem] line-clamp-3">
              <h2 className="text-[2.4rem]">
                Khóa học Bán hàng trên trang cá nhân: Kinh doanh bài bản - Thu
                nhập không giới hạn - PingGo Việt Nam
              </h2>
              <div className="">
                <span className="px-2">Ra mắt</span>
                <span className="px-2">15/06/2023</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coming;
