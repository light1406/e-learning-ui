import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
// import "./styles.css";

const image1 = "";
const image2 = "";
const image3 = "";

const slides = [
  {
    title: "Get Started",
    subtitle: "Start with your email",
    control: <input type="email" placeholder="Email" />,
    image: image1,
  },
  {
    title: "Your Password",
    subtitle: "Let's make things secure",
    control: <input type="password" placeholder="Password" />,
    image: image2,
  },
  {
    title: "Let's Go",
    subtitle: "Smash the button below",
    control: <button>Sign Up</button>,
    image: image3,
  },
];

const Banner = () => (
  <div className="flex flex-col w-full h-full shadow-sm">
    <ReactCarousel
      className="react-carousel"
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      swipeable={true}
      emulateTouch={true}
    >
      {slides.map((slide) => (
        <div key={slide.title} className="react-carousel-slide">
          <div className="image-wrapper">
            <img src={slide.image} />
          </div>
          <h2>{slide.title}</h2>
          <h3>{slide.subtitle}</h3>
          {slide.control}
        </div>
      ))}
    </ReactCarousel>
  </div>
);
export default Banner;
