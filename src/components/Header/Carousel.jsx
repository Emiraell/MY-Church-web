import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Header.module.css";

export default function Carousel({ isHomePage, page, pageName }) {
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

  const [carouselDetails, setCarouselDetails] = useState([
    {
      Id: 1,
      tittle: "ST PETER'S ANGLICAN CHURCH, KEFFI",
      subTittle: "(Lafia Diocese)",
      image: styles.imageOne,
      passage: [
        "I beseech you therefore, brethren, by the mercies of God, that",
        "ye present your bodies a living sacrifice, holy, acceptable",
        "unto God, which is your reasonable service.",
      ],
      buttons: [{ name: "About Us", path: "about" }],
    },
    {
      Id: 2,
      tittle: "MOVING IN GOD'S DIRECTION",
      subTittle: "THEME OF THE YEAR",
      image: styles.imageTwo,
      passage: [
        "The LORD makes firm the steps of the one who delights in",
        "him; though he may stumble, he will not fall,",
        "for the LORD upholds him with his hand.",
      ],
      buttons: [{ name: "Join Us", path: "contact" }],
    },
    {
      Id: 3,
      tittle: "A PRAYING CHURCH",
      subTittle: "",
      image: styles.imageThree,
      passage: [
        "The Lord is near. Do not be anxious about anything,",
        " but in everysituation, by prayer and petition, with",
        "thanksgiving, present your requests to God",
      ],
      buttons: [{ name: "Request a Prayer", path: "prayer" }],
    },
  ]);

  return (
    <div>
      {!isHomePage && (
        <div
          className={`text-center bg-cover bg-center bg-blend-multiply bg-greeny-100 bg-no-repeat ${styles.imageOne} h-[75vh] md:h-[85vh]`}
        >
          <p className="font-bold font-poppins text-2xl md:text-4xl pt-[35vh] text-gray-200 tracking-wider">
            {page}
          </p>
          <p className="text-gray-200 italic pt-40">
            {" "}
            Home <span className="px-3">/</span>
            <span className=" text-orang-300">{pageName}</span>
          </p>
        </div>
      )}
      {isHomePage && (
        <Slider {...settings} className=" overflow-hidden">
          {carouselDetails.map((detail, index) => (
            <div
              key={index}
              className={`text-center bg-cover bg-center bg-blend-multiply bg-greeny-100 bg-no-repeat ${detail.image} h-[77vh] lg:h-[85vh]`}
            >
              <div className="mt-[23vh]  leading-normal md:tracking-widest ">
                <div className="font-bold">
                  <p className="md:text-lg">
                    {detail.tittle}
                    <span className="block text-blue-500 text-sm font-thin">
                      {detail.subTittle}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-sm py-16 md:text-lg px-4 tracking-wide">
                    {detail.passage[0]}
                    <span className="block"> {detail.passage[1]}</span>{" "}
                    <span className="block">{detail.passage[2]}</span>
                  </p>
                </div>

                <div>
                  {detail.buttons.map((button, index) => (
                    <Link to={`/${button.path}`} key={index}>
                      <button
                        className={` bg-oran-light py-4 px-6 rounded-full hover:opacity-90 mx-2 ${
                          detail[2] && "bg-blood-700 hover:bg-emerald-600"
                        }`}
                      >
                        {button.name}
                      </button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}
