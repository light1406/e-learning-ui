import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import image1 from "@assets/home/logo.svg";

const slides = [
  {
    courses: [
      {
        id: 1,
        image: image1,
        title: "Tạo nguồn thu nhập thụ động",
        author: "Lê Xuân Tú",
        oldPrice: "2.000.000",
        newPrice: "399.000",
      },
      {
        id: 2,
        image: image1,
        title: "Tạo nguồn thu nhập thụ động",
        author: "Lê Xuân Tú",
        oldPrice: "2.000.000",
        newPrice: "399.000",
      },
      {
        id: 3,
        image: image1,
        title: "Tạo nguồn thu nhập thụ động",
        author: "Lê Xuân Tú",
        oldPrice: "2.000.000",
        newPrice: "399.000",
      },
    ],
  },
  {
    courses: [
      {
        id: 1,
        image: image1,
        title: "Tạo nguồn thu nhập thụ động",
        author: "Lê Xuân Tú",
        oldPrice: "2.000.000",
        newPrice: "399.000",
      },
      {
        id: 2,
        image: image1,
        title: "Tạo nguồn thu nhập thụ động",
        author: "Lê Xuân Tú",
        oldPrice: "2.000.000",
        newPrice: "399.000",
      },
      {
        id: 3,
        image: image1,
        title: "Tạo nguồn thu nhập thụ động",
        author: "Lê Xuân Tú",
        oldPrice: "2.000.000",
        newPrice: "399.000",
      },
    ],
  },
  {
    courses: [
      {
        id: 1,
        image: image1,
        title: "Tạo nguồn thu nhập thụ động",
        author: "Lê Xuân Tú",
        oldPrice: "2.000.000",
        newPrice: "399.000",
      },
      {
        id: 2,
        image: image1,
        title: "Tạo nguồn thu nhập thụ động",
        author: "Lê Xuân Tú",
        oldPrice: "2.000.000",
        newPrice: "399.000",
      },
      {
        id: 3,
        image: image1,
        title: "Tạo nguồn thu nhập thụ động",
        author: "Lê Xuân Tú",
        oldPrice: "2.000.000",
        newPrice: "399.000",
      },
    ],
  },
];

const New = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {slides.map((slide) => (
        <SwiperSlide>
          <div className="p-4 max-h-[460px]">
            {slides[0].courses.map((course) => (
              <a
                key={course.id}
                className="flex items-center gap-x-3 cursor-pointer"
              >
                <img
                  src={course.image}
                  alt=""
                  className="max-w-[100px] max-h-[100px]"
                />
                <div className="text-left p-[10px]">
                  <h2 className="text-[16px] font-semibold mb-[10px]">
                    {course.title}
                  </h2>
                  <span className="text-[12px] text-lightBlack">
                    {course.author}
                  </span>
                  <div className="flex gap-x-[16px]">
                    <span className="text-[16px] font-semibold">
                      {course.newPrice}
                      <sup>đ</sup>
                    </span>
                    <span className="text-[12px] line-through">
                      {course.oldPrice}
                      <sup>đ</sup>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default New;
