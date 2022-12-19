import image1 from "@assets/home/banner1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

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
  <>
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      {slides.map((slide, index) => {
        <SwiperSlide index={index}>
          <img src={slide} alt="" />
        </SwiperSlide>;
      })}
    </Swiper>
  </>
);
export default Banner;
