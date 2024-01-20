import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/Header/Header";
import churchTop from "./assests/churchTop.jpg";
import church from "./assests/churches.png";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function Churches() {
  const [churches, setChurches] = useState([
    {
      name: "st barnabas anglican church keffi, nasarawa state",
      address: "Behind otunsha hotel, dadin kowa keffi",
      vicar: "Rev. Can Okafor Josiah",
      number: "08136553986",
      image: church,
      socialMedia: {
        facebook: "www.facebook",
        whatsapp: "https://wa.me/08136553986",
      },
    },
    {
      name: "emmanuel church, gidan zakara",
      address: "Oppo first baptist church, gidan zakara",
      vicar: "Rev.Can Ejike Arinze",
      number: "08136553986",
      image: church,
      socialMedia: { facebook: null, whatsapp: "https://wa.me/09020098285" },
    },
    {
      name: "church of advent jigwada",
      address: "Behind Otunsha Hotel, jigwada",
      vicar: "Evang Ali Onyeka",
      number: "08136553986",
      image: church,
      socialMedia: { facebook: null, whatsapp: "https://wa.me/08136553986" },
    },
    {
      name: "st philip anglican church, garaku",
      address: "Behind Otunsha Hotel, garaku",
      vicar: "Rev. Can iam coming",
      number: "08136553986",
      image: church,
      socialMedia: { facebook: null, whatsapp: "https://wa.me/08136553986" },
    },
    {
      name: "church of epiphany, keffi",
      address: "government resisdential area keffi",
      vicar: "Rev enugu man",
      number: "08136553986",
      image: church,
      socialMedia: { facebook: null, whatsapp: "https://wa.me/08136553986" },
    },
    {
      name: "Bro bayos church",
      address: "sabon garerikr",
      vicar: "Evang Bayo",
      number: "08136553986",
      image: church,
      socialMedia: { facebook: null, whatsapp: "https://wa.me/08136553986" },
    },
    {
      name: "evang kenneths church",
      address: "marababa shamaki",
      vicar: "Bro Kenneth",
      number: "08136553986",
      image: church,
      socialMedia: { facebook: null, whatsapp: "https://wa.me/08136553986" },
    },
  ]);
  return (
    <div className="text-gray-200 bg-gray-200 text-center font-lato">
      <Header isHomePage={false} page={"CHURCHES"} />
      <div className=" text-textCol-primary mt-24 lg:grid lg:grid-cols-2 w-[90%] gap-8 m-auto">
        {churches.map((church, index) => (
          <div
            key={index}
            className=" border col-span-1 border-lime-900 rounded-t-xl mb-20 shadow-lg"
          >
            <div
              className="h-[30vh] md:h-[40vh] relative rounded-t-xl bg-emerald-900 bg-cover bg-blend-multiply bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${church.image})` }}
            >
              <p className="absolute top-2/4 w-[100%] m-auto uppercase font-bold animate-pulse px-10 text-orange-500 drop-shadow-lg">
                {church.name}
              </p>
              <a
                href="www.facebook.com"
                className="bottom-4 absolute text-blue-700"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
            <div className="md:text-xl py-4">
              <div className=" flex mt-3 px-3 items-center">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-emerald-700"
                />
                <p className=" px-4">{church.address}</p>
              </div>
              <div className=" flex mt-3 px-3 items-center py-3">
                <FontAwesomeIcon icon={faUser} className="text-emerald-700" />
                <p className=" px-4">{church.vicar}</p>
              </div>
              <div className=" flex mt-3 px-3 items-center">
                <FontAwesomeIcon icon={faPhone} className="text-emerald-700" />
                <p className=" px-4">{church.number}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <span className="text-red-600 ">
        NB: All churches are located in Nasarawa State{" "}
      </span>
    </div>
  );
}
