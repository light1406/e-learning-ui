import React from "react";
import Banner from "@components/Banner";
import Course from "@components/Course";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="container__page">
        <div className="my-[6rem]">
          <h2 className="flex items-center gap-x-6 mb-[2.5rem] heading-2">
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
          </h2>
          <div className="slider__home">
            <Course></Course>
            <Course></Course>
            <Course src="https://kt.city/_next/image?url=%2Fstatic%2Flabel-new.png&w=128&q=75"></Course>
          </div>
        </div>
        <div className="my-[6rem]">
          <h2 className="flex items-center gap-x-6 mb-[2.5rem] heading-2">
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
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            Nổi bật tháng này
          </h2>
          <div className="slider__home">
            <Course src="https://kt.city/_next/image?url=%2Fstatic%2Flabel-new.png&w=128&q=75"></Course>
            <Course></Course>
            <Course></Course>
          </div>
        </div>
        <div className="my-[6rem]">
          <h2 className="flex items-center gap-x-6 mb-[2.5rem] heading-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#0056d2"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Sắp ra mắt
          </h2>
          <div className="slider__home">
            <Course></Course>
            <Course></Course>
            <Course></Course>
          </div>
        </div>
        <div className="my-[6rem]">
          <h2 className="flex items-center gap-x-6 mb-[2.5rem] heading-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#0056d2"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
            Kiến thức chất lượng khác
          </h2>
          <div className="slider__home">
            <Course></Course>
            <Course src="https://kt.city/_next/image?url=%2Fstatic%2Flabel-new.png&w=128&q=75"></Course>
            <Course></Course>
          </div>
        </div>
        <button className="mt-[3rem] block font-medium py-2 px-6 rounded-2xl bg-lightBlue text-lightBlack mx-auto">
          Xem thêm...
        </button>
        <div className="">
          <div className="grid md:grid-cols-auto lg:grid-cols-2 gap-x-[3rem] mb-[10rem]">
            <img
              className="max-w-[450px] mx-auto mb-[1rem]"
              src="https://kt.city/static/img-experts1.png"
              alt=""
            />
            <div className="pt-3rem">
              <h1 className="p-expert__heading">
                Nâng cao kiến thức của bạn lên từng ngày, có kết quả tương xứng
                với chi phí bỏ ra
              </h1>
              <p className="p-expert__text">
                Tất cả kiến thức tại XXX đều được review bởi đội ngũ chuyên gia
                có kinh nghiệm. Hãy chọn Expert hoặc Brand mà bạn tin tưởng &
                bắt đầu trải nghiệm.
              </p>
              <p className="p-expert__text">
                Bạn cũng có thể theo lời khuyến nghị của những cá nhân đã trải
                nghiệm trước đó, người bạn quen hoặc các KOLs để lựa chọn kiến
                thức phù hợp.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-auto lg:grid-cols-2 gap-x-[3rem] items-center mb-[10rem]">
            <div className="">
              <h1 className="p-expert__heading">
                Trở thành Expert hoặc Brand, chia sẻ kiến thức & nhận lại không
                giới hạn giá trị
              </h1>
              <p className="p-expert__text">
                Xây dựng cộng đồng của riêng bạn & nhận lại không giới hạn giá
                trị. XXX & hệ thống đối tác sẽ quảng bá kiến thức hữu ích tới
                hàng trăm ngàn cá nhân có nhu cầu cải thiện chuyên môn.
              </p>
              <p className="p-expert__text">
                XXX tập trung xây dựng hình ảnh, thương hiệu cho bạn 1 cách hoàn
                chỉnh. Ngoài ra, tất cả các vấn đề về công nghệ luôn được tối
                ưu.
              </p>
            </div>
            <img
              className="max-w-[450px] mx-auto mb-[1rem]"
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
