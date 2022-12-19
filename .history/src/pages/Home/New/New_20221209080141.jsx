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
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  );
};

export default New;
