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
      {slides[0].courses.map((course) => (
        <SwiperSlide>
          <div className="p-4">
            <a className="flex gap-x-3">
              <img
                src={course.image}
                alt=""
                className="max-w-[100px] max-h-[100px]"
              />
              <div className="">
                <h2>{course.title}</h2>
                <span>{course.author}</span>
                <div className="">
                  <span>{course.newPrice}</span>
                  <span>{course.oldPrice}</span>
                </div>
              </div>
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default New;
