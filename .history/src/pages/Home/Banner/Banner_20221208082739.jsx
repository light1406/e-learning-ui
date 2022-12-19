import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from "react-responsive-carousel";

import classNames from "classnames/bind";
import style from "./Banner.scss";

import image1 from "@assets/home/logo.svg";
// const cx = classNames.bind(style);

const slides = [
  {
    image: image1,
  },
  {
    image: image1,
  },
  {
    image: image1,
  },
];

const Banner = () => (
  <div className="card h-full">
    <ReactCarousel
      className="react-carousel"
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      swipeable={true}
      emulateTouch={true}
      autoPlay={true}
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
export default Banner;
