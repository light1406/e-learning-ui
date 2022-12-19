import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import image1 from "@assets/home/banner1.png";
import image2 from "@assets/home/banner2.png";
import { Link } from "react-router-dom";

const slides = [
  {
    image: image1,
  },
  {
    image: image2,
  },
  {
    image: image1,
  },
];

const Banner = () => (
  <>
    <Swiper
      className=""
      loop
      speed={500}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="cursor-pointer">
          <Link to="#" className="">
            <img src={slide.image} className="w-full object-fill" alt="" />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  </>
);
export default Banner;
