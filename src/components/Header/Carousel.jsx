import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Header.module.css";

export default function Carousel({
  isHomePage,
  page,
  pageName,
  blogs,
  image,
  author,
}) {
  //settings to control the functionality of my slider section
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

  //my slider contents
  const carouselDetails = [
    {
      tittle: "ST PETER'S ANGLICAN CHURCH, KEFFI",
      subTittle: "(Lafia Diocese)",
      image: styles.imageOne,
      passage:
        "I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice, holy, acceptable unto God",
      buttons: [{ name: "About Us", path: "about" }],
    },
    {
      tittle: "MOVING IN GOD'S DIRECTION",
      subTittle: "Theme of the year",
      image: styles.imageTwo,
      passage:
        "The Lord makes firm the steps of the one who delights in him; though he may stumble, he will not fall, for the Lord upholds him with his hand.",

      buttons: [{ name: "Join Us", path: "contact" }],
    },
    {
      tittle: "A PRAYING CHURCH",
      subTittle: "",
      image: styles.imageThree,
      passage:
        "Do not be anxious about anything, but in everysituation, by prayer and petition, with thanksgiving, present your requests to God",
      buttons: [{ name: "Request a Prayer", path: "prayer" }],
    },
  ];

  return (
    <div>
      {/*header Content to display if not on home page or blogs page */}
      {!isHomePage && !blogs && (
        <div
          className={`relative bg-greeny-100 background 
          ${styles.imageOne} h-[75vh] md:h-[85vh]`}
        >
          <p
            className="font-bold absolute px-3 font-lato text-3xl md:text-4xl
          w-full bottom-1/2 text-gray-200 tracking-wider"
          >
            {page}
          </p>
          <p className="text-gray-100 italic text-xl absolute bottom-24 w-full">
            Home <span className="px-3">/</span>
            <span className=" text-orang-200">{pageName}</span>
          </p>
        </div>
      )}

      {/*header content to display on blogs page */}
      {!isHomePage && blogs && (
        <div
          className={`background bg-greeny-100 relative ${styles.imageOne} h-[75vh] md:h-[85vh]`}
        >
          <p className="font-bold font-lato text-2xl md:text-4xl absolute w-full bottom-1/2 text-gray-200 tracking-wider">
            {page}
          </p>
          <div className="text-gray-200 absolute w-full bottom-16 ">
            <div className="absolute md:left-[46%] left-[37%] -top-16 md:-top-20">
              <img
                src={image}
                alt="author"
                className="rounded-full h-20 md:h-24 object-cover"
              />
            </div>
            <p className=" text-blue-100 text-lg lg:text-2xl font-poppins pt-5">
              {author}
            </p>
          </div>
        </div>
      )}

      {/* header content to slide when on homepage */}
      {isHomePage && (
        <Slider {...settings} className="overflow-hidden ">
          {carouselDetails.map((detail, index) => (
            <div
              key={index}
              className={`relative bg-greeny-100 background ${detail.image} h-[77vh] lg:h-[85vh]`}
            >
              <div className="font-semibold absolute left-0 right-0 bottom-2/3">
                <p className="text-xl md:text-3xl px-3 font-lato ">
                  {detail.tittle}
                  <span className="block text-blue-300 font-light font-rochester">
                    {detail.subTittle}
                  </span>
                </p>
              </div>
              <div className="absolute bottom-1/3 leading-10">
                <p className="md:text-xl lg:px-52 px-4 tracking-wide font-light text-lg ">
                  {detail.passage}
                </p>
              </div>

              <div className="absolute w-[100%] bottom-20">
                {detail.buttons.map((button, index) => (
                  <Link to={`/${button.path}`} key={index}>
                    <button
                      className={`w-56 text-orange-200 border py-5 tracking-wider text-xl rounded-full hover:opacity-90 mx-2
                      border-orange-400 hover:scale-75 hover:text-gray-100 hover:bg-orang-200 transition-all duration-0.5 ease-in`}
                    >
                      {button.name}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}
