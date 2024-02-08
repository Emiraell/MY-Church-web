import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBible } from "@fortawesome/free-solid-svg-icons";
export default function Bible({ prayerPassages }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    adaptiveHeight: true,
    pauseOnHover: true,
  };

  return (
    <Slider
      {...settings}
      className="text-gray-800 p-10"
      style={{ backgroundColor: "#d5d1c3" }}
    >
      {prayerPassages.map((passage, index) => (
        <div key={index}>
          <div className="md:w-[70%] m-auto ">
            <div className="flex items-center justify-center">
              <FontAwesomeIcon icon={faBible} className="h-7 md:h-10" />
              <p className="font-bold font-rochester text-3xl text-blue-800 pb-7 px-5 md:px-10 pt-5">
                {passage.passage}
              </p>
              <FontAwesomeIcon icon={faBible} className="h-7 md:h-10 " />
            </div>

            <p className="text-lg font-montserrat text-orange-950">
              {passage.passageContent}
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
}
