import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from "react-responsive-carousel";

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
slides[0].courses.map((course) => {
  console.log(course);
});
const New = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-[24px]">Mới ra mắt</h1>
        <a href="">Xem thêm</a>
      </div>
      <div className="card h-full">
        <ReactCarousel
          className="react-carousel"
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          swipeable={true}
          emulateTouch={true}
        >
          {slides.map((slide, index) => (
            <div key={index} className="react-carousel-slide">
              {slide.courses.map((course) => {
                <div key={course.title} className="h-[400px]">
                  <a href="">
                    <img src={course.image} alt="" />
                    <div className="">
                      <h1 className="">{course.title}</h1>
                      <span>{course.author}</span>
                      <div className="">
                        <span>{course.newPrice}</span>
                        <span>{course.oldPrice}</span>
                      </div>
                    </div>
                  </a>
                </div>;
              })}
            </div>
          ))}
        </ReactCarousel>
      </div>
    </div>
  );
};

export default New;
