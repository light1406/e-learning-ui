import React from "react";

const New = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-[24px]">Mới ra mắt</h1>
        <a href="">Xem thêm</a>
      </div>
      <ul>
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
      </ul>
    </div>
  );
};

export default New;
