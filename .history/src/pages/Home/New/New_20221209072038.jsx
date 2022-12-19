import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from "react-responsive-carousel";

import image1 from "@assets/home/logo.svg";
import "./New.scss";

// const slides = [
//   {
//     courses: [
//       {
//         id: 1,
//         image: image1,
//         title: "Tạo nguồn thu nhập thụ động",
//         author: "Lê Xuân Tú",
//         oldPrice: "2.000.000",
//         newPrice: "399.000",
//       },
//       {
//         id: 2,
//         image: image1,
//         title: "Tạo nguồn thu nhập thụ động",
//         author: "Lê Xuân Tú",
//         oldPrice: "2.000.000",
//         newPrice: "399.000",
//       },
//       {
//         id: 3,
//         image: image1,
//         title: "Tạo nguồn thu nhập thụ động",
//         author: "Lê Xuân Tú",
//         oldPrice: "2.000.000",
//         newPrice: "399.000",
//       },
//     ],
//   },
//   {
//     courses: [
//       {
//         id: 1,
//         image: image1,
//         title: "Tạo nguồn thu nhập thụ động",
//         author: "Lê Xuân Tú",
//         oldPrice: "2.000.000",
//         newPrice: "399.000",
//       },
//       {
//         id: 2,
//         image: image1,
//         title: "Tạo nguồn thu nhập thụ động",
//         author: "Lê Xuân Tú",
//         oldPrice: "2.000.000",
//         newPrice: "399.000",
//       },
//       {
//         id: 3,
//         image: image1,
//         title: "Tạo nguồn thu nhập thụ động",
//         author: "Lê Xuân Tú",
//         oldPrice: "2.000.000",
//         newPrice: "399.000",
//       },
//     ],
//   },
//   {
//     courses: [
//       {
//         id: 1,
//         image: image1,
//         title: "Tạo nguồn thu nhập thụ động",
//         author: "Lê Xuân Tú",
//         oldPrice: "2.000.000",
//         newPrice: "399.000",
//       },
//       {
//         id: 2,
//         image: image1,
//         title: "Tạo nguồn thu nhập thụ động",
//         author: "Lê Xuân Tú",
//         oldPrice: "2.000.000",
//         newPrice: "399.000",
//       },
//       {
//         id: 3,
//         image: image1,
//         title: "Tạo nguồn thu nhập thụ động",
//         author: "Lê Xuân Tú",
//         oldPrice: "2.000.000",
//         newPrice: "399.000",
//       },
//     ],
//   },
// ];
const slides = [
  {
    image: [
      {
        img: image1,
      },
      {
        img: image1,
      },
      {
        img: image1,
      },
    ],
  },
  {
    image: image1,
  },
  {
    image: image1,
  },
];
const New = () => {
  return (
    <div className="card h-full">
      <ReactCarousel
        className="react-carousel"
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        swipeable={true}
        emulateTouch={true}
        autoPlay={true}
        infiniteLoop={true}
      >
        {slides.map((slide, index) => (
          <div key={index} className="react-carousel-slide">
            <div className="image-wrapper">
              <img className="object-cover" src={slide.image} />
            </div>
          </div>
        ))}
      </ReactCarousel>
    </div>
  );
};

export default New;
