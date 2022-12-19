import image1 from "@assets/home/banner1.png";
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
      infiniteLoop={true}
      stopOnHover={true}
    >
      {slides.map((slide, index) => (
        <div key={index} className="react-carousel-slide cursor-pointer">
          <div className="image-wrapper">
            <img className="object-cover" src={slide.image} />
          </div>
        </div>
      ))}
    </ReactCarousel>
  </div>
);
export default Banner;
