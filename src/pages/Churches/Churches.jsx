import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/Header/Header";
import churchTop from "./assests/churchTop.jpg";
import barnabas from "./assests/barnabas.jpg";
import garaku from "./assests/garaku.jpg";
import jigwada from "./assests/jigwada.jpg";
import sabonGida from "./assests/sabonGida.jpg";
import shamaki from "./assests/shamaki.jpg";
import zakara from "./assests/zakara.jpg";
import gra from "./assests/churches.png";
import {
  faChurch,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer/Footer";

export default function Churches() {
  const churches = [
    {
      name: "St. Peter's Anglican Church",
      address: "Keffi, Nasarawa State",
      vicar: "Ven. Dr. Luka Allu JP",
      number: "+2348035913155",
      image: churchTop,
    },

    {
      name: "St. Barnabas Anglican Church ",
      address: "Dadin kowa keffi, Nasarawa State",
      vicar: "Rev'd. Canon Dr. Josiah C. Okafor",
      number: "+2347061546004",
      image: barnabas,
    },
    {
      name: "Emmanuel Anglican church",
      address: "Gidan zakara, Nasarawa State",
      vicar: "Rev'd. Ejike C. Arinze",
      number: "+2349020098285",
      image: zakara,
    },
    {
      name: "St. Philips Anglican Church",
      address: "Garaku, Nasarawa State",
      vicar: " Rev'd. Ernest C. Eleje",
      number: "+2348036041339",
      image: garaku,
    },
    {
      name: "All Soul's Anglican Church,",
      address: "Sabon gari, Nasarawa State",
      vicar: "Ord. Bayo Ajayi",
      number: "+2347039020485",
      image: sabonGida,
    },
    {
      name: "Zion Anglican Church",
      address: "Shamake, Nasarawa State",
      vicar: "Ord. Abednego Ibrahim",
      number: "+2348131211557",
      image: shamaki,
    },
    {
      name: "Church of Advent",
      address: "Jigwada, Nasarawa State",
      vicar: "Evang. Onyekachi Ali",
      number: "+2349060749752",
      image: jigwada,
    },
    {
      name: "Church of Epiphany",
      address: "Gra, Keffi, Nasarawa State",
      vicar: " Ord. Daniel Onyekachi",
      number: "+2347038965341",
      image: gra,
    },
  ];
  return (
    <div className=" font-lato text-lg">
      <Header page={"Our Churches"} pageName={"churches"} />
      <div className=" text-textCol-primary mt-24 lg:grid lg:grid-cols-2 w-[90%] gap-8 m-auto">
        {churches.map((church, index) => (
          <div
            key={index}
            className=" border col-span-1 border-lime-900 rounded-t-xl bg-gray-200 mb-20 shadow-lg"
          >
            <div
              className="h-[40vh] md:h-[40vh] rounded-t-xl bg-gray-300 background"
              style={{ backgroundImage: `url(${church.image})` }}
            ></div>
            <div className="md:text-xl py-4">
              <div className=" flex mt-3 px-2 items-center">
                <FontAwesomeIcon icon={faChurch} className="text-emerald-700" />
                <p className=" px-4">{church.name}</p>
              </div>
              <div className=" flex mt-5 px-3 items-center">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-emerald-700"
                />
                <p className=" px-4">{church.address}</p>
              </div>
              <div className=" flex mt-3 px-3 items-center py-3">
                <FontAwesomeIcon icon={faUser} className="text-emerald-700" />
                <p className=" px-4">{church.vicar}</p>
              </div>{" "}
              {church.number && (
                <div className=" flex mt-3 px-3 items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-emerald-700"
                  />
                  <p className=" px-4">{church.number}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
