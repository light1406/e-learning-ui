import React from "react";
import Banner from "@components/Banner";
import Course from "@components/Course";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="container__page">
        <div className="my-[6rem]">
          <h3 className="flex items-center gap-x-6 text-[2rem] font-semibold mb-[2.5rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="rgb(250, 94, 94)"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
              />
            </svg>
            Xu hướng 24h qua
          </h3>
          <div className="grid grid-cols-3 gap-x-[3rem]">
            <Course></Course>
            <Course></Course>
            <Course src="https://kt.city/_next/image?url=%2Fstatic%2Flabel-new.png&w=128&q=75"></Course>
          </div>
        </div>
        <div className="my-[6rem]">
          <h3 className="flex items-center gap-x-6 text-[2rem] font-semibold mb-[2.5rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="rgb(250, 94, 94)"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
              />
            </svg>
            Nổi bật tháng này
          </h3>
          <div className="grid grid-cols-3 gap-x-[3rem]">
            <Course src="https://kt.city/_next/image?url=%2Fstatic%2Flabel-new.png&w=128&q=75"></Course>
            <Course></Course>
            <Course></Course>
          </div>
        </div>
        <div className="my-[6rem]">
          <h3 className="flex items-center gap-x-6 text-[2rem] font-semibold mb-[2.5rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="rgb(250, 94, 94)"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
              />
            </svg>
            Sắp ra mắt
          </h3>
          <div className="grid grid-cols-3 gap-x-[3rem]">
            <Course></Course>
            <Course></Course>
            <Course></Course>
          </div>
        </div>
        <div className="my-[6rem]">
          <h3 className="flex items-center gap-x-6 text-[2rem] font-semibold mb-[2.5rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="rgb(250, 94, 94)"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
              />
            </svg>
            Kiến thức chất lượng khác
          </h3>
          <div className="grid grid-cols-3 gap-x-[3rem]">
            <Course></Course>
            <Course src="https://kt.city/_next/image?url=%2Fstatic%2Flabel-new.png&w=128&q=75"></Course>
            <Course></Course>
          </div>
        </div>
        <button className="block mt-[3rem] py-2 px-6 rounded-2xl bg-lightBlue mx-auto">
          Xem thêm...
        </button>
        <div className="pt-[10rem]">
          <div className="flex items-center justify-between gap-x-[8rem] px-[2rem]">
            <img
              className="max-w-[450px]"
              src="https://kt.city/static/img-experts1.png"
              alt=""
            />
            <div className="">
              <h1 className="mb-6 text-[2.8rem] font-extrabold">
                Nâng cao kiến thức của bạn lên từng ngày, có kết quả tương xứng
                với chi phí bỏ ra
              </h1>
              <p>
                Tất cả kiến thức tại XXX đều được review bởi đội ngũ chuyên gia
                có kinh nghiệm. Hãy chọn Expert hoặc Brand mà bạn tin tưởng &
                bắt đầu trải nghiệm. Bạn cũng có thể theo lời khuyến nghị của
                những cá nhân đã trải nghiệm trước đó, người bạn quen hoặc các
                KOLs để lựa chọn kiến thức phù hợp.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-x-[30px]">
            <div className="">
              <h1 className="mb-6 text-[24px] font-extrabold">
                Trở thành Expert hoặc Brand, chia sẻ kiến thức & nhận lại không
                giới hạn giá trị
              </h1>
              <p>
                Xây dựng cộng đồng của riêng bạn & nhận lại không giới hạn giá
                trị. XXX & hệ thống đối tác sẽ quảng bá kiến thức hữu ích tới
                hàng trăm ngàn cá nhân có nhu cầu cải thiện chuyên môn. XXX tập
                trung xây dựng hình ảnh, thương hiệu cho bạn 1 cách hoàn chỉnh.
                Ngoài ra, tất cả các vấn đề về công nghệ luôn được tối ưu.
              </p>
            </div>
            <img
              className="max-w-[450px]"
              src="https://kt.city/static/img-experts2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
