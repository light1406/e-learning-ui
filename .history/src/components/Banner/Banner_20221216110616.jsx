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
const pagination = {
  clickable: true,
  renderBullet: function () {
    return "<div className='p-4 rounded-full bg-primary'></div>";
  },
};
const Banner = () => (
  <>
    <Swiper
      loop
      speed={500}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={pagination}
      modules={[Pagination, Autoplay]}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="cursor-pointer">
          <Link to="#" className="overflow-hidden">
            <img src={slide.image} className="" alt="" />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="p-4 rounded-full bg-primary"></div>
  </>
);
export default Banner;
