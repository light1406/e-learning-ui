import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import image1 from "@assets/home/banner1.png";
import image2 from "@assets/home/banner2.png";

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
      loop
      speed={1200}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="cursor-pointer">
          <img src={slide.image} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  </>
);
export default Banner;
