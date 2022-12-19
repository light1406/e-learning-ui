import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Expert = () => {
  return (
    <div className="">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="min-h-[300px]">
          <div className="py-[25px] pt-[25px] pb-[50px] flex flex-col">
            <img
              src="https://kt.city/_next/image?url=https%3A%2F%2Fstatic.kt.city%2Fe0ebee87-aefb-40bf-96a3-9a53986dfc17.jpg&w=256&q=100"
              alt=""
            />
            <span>Hoc HTML Css tu</span>
            <span>Evondev</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="min-h-[300px]">Slide 1</SwiperSlide>
        <SwiperSlide className="min-h-[300px]">Slide 1</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Expert;
