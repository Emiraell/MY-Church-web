import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import styles from "./styles/Leaders.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faChurch, faStar, faUserTie } from "@fortawesome/free-solid-svg-icons";

export default function TeamOfLeaders() {
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
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [leadersDetails, setLeadersDetails] = useState([
    {
      backgroundImage: styles.vicar,
      name: "Ven. Dr Luka Allu J.P",
      church: "St Peter's Anglican Church, Keffi",
      position: "Vicar",
      socialMedia: [{ facebook: "", whatsapp: "" }],
    },
    {
      backgroundImage: styles.curate,
      name: "Rev Emma Chukwu",
      church: "St Peter's Anglican Church, Keffi",
      position: "Curate",
      socialMedia: { facebook: "", whatsapp: "" },
    },
    {
      backgroundImage: styles.okafor,
      name: "Rev Canon. Okafor Josiah",
      church: "St Barnabas Anglican Church, Keffi",
      position: "Vicar",
      socialMedia: { facebook: "", whatsapp: "" },
    },
    {
      backgroundImage: styles.shutdown,
      name: "Rev Canon Arinze",
      church: "Emmanuel Church Gidan Zakara",
      position: "Vicar",
      socialMedia: { facebook: "", whatsapp: "" },
    },
    {
      backgroundImage: styles.gra,
      name: "GRA pastor",
      church: "Epiphany church, GRA keffi",
      position: "Vicar",
      socialMedia: { facebook: "", whatsapp: "" },
    },
    {
      backgroundImage: styles.garaku,
      name: "Rev Garaku",
      church: "St philips Anglican Church Garaku",
      position: "Vicar",
      socialMedia: { facebook: "", whatsapp: "" },
    },
    {
      backgroundImage: styles.jigwada,
      name: "Rev Emma Jigwada",
      church: "All saint jigwada",
      position: "vicar",
      socialMedia: { facebook: "", whatsapp: "" },
    },
  ]);

  return (
    <div className=" font-lato w-[100%] m-auto text-center mt-20 leading-normal mb-10">
      <div>
        <p className="text-emerald-800 font-montserrat text-lg md:text-2xl">
          Our Team of Leaders
        </p>
      </div>

      <Slider {...settings} className=" mt-10 w-[100%] m-auto">
        {leadersDetails.map((detail, index) => (
          <div className="px-3" key={index}>
            <div
              className={`${detail.backgroundImage} relative bg-textCol-secondary rounded-t-2xl h-[48vh] bg-cover bg-no-repeat bg-blend-multiply bg-center`}
            >
              <div className="absolute w-[100%] bottom-3">
                <a href={`${detail.socialMedia.facebook}`} className="mr-4">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="2xl"
                    color="lightblue"
                  />
                </a>
                <a href={`${detail.socialMedia.whatsapp}`}>
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    size="2xl"
                    color="lightgreen"
                  />
                </a>
              </div>
            </div>
            <div className="text-center text-lg pb-5">
              <div className="text-gray-900 mt-4 flex-col justify-between px-5 py-1">
                <div className="">
                  <FontAwesomeIcon icon={faUserTie} color="orange" size="xl" />
                </div>
                <p className="text-lg ">{detail.name}</p>
              </div>
              <div className="flex-col justify-between px-5 py-1">
                <div className="">
                  <FontAwesomeIcon icon={faStar} color="orange" size="lg" />
                </div>
                <p className="text-emerald-900 text-lg">{detail.position}</p>
              </div>

              <div className="text-gray-600 mt-4 flex-col justify-between px-5 py-[-5px]">
                <div>
                  <FontAwesomeIcon icon={faChurch} size="lg" color="orange" />
                </div>
                <p>{detail.church}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
