import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/Header/Header";
import bishop from "./assests/bishop.png";
import ali from "./assests/evangAli.png";
import okafor from "./assests/okafor.png";
import daniel from "./assests/ordDaniel.png";
import ejike from "./assests/revEjike.png";
import ernest from "./assests/revErnest.png";
import luka from "./assests/venLuka.png";
import { useState } from "react";
import {
  faBank,
  faChurch,
  faDonate,
  faStar,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer/Footer";
export default function ChurchOfficials() {
  const [leaderDetails, setLeaderDetails] = useState([
    {
      image: bishop,
      name: "Rt. Rev Adeyemi Robinson",
      church: "Lafia Diocese",
      position: "The Diocesan",
      socialMedia: [{ facebook: "", whatsapp: "" }],
    },
    {
      image: luka,
      name: "Ven. Dr. Luka B. Allu J.P",
      church: "St. Peter's Anglican Church, Keffi",
      position: "Vicar",
      socialMedia: [{ facebook: "", whatsapp: "" }],
    },
    {
      image: okafor,
      name: "Rev'd Canon Dr Josiah C. Okafor",
      church: "St. Barnabas Anglican Church, Keffi",
      position: "Vicar",
      socialMedia: { facebook: "", whatsapp: "" },
    },
    {
      image: ejike,
      name: "Rev'd. Ejike C. Arinze",
      church: "Emmanuel Church Gidan Zakara",
      position: "Vicar",
      socialMedia: { facebook: "", whatsapp: "" },
    },
    {
      image: ernest,
      name: "Rev'd. Ernest C. Eleje",
      church: "St. philips Anglican Church Garaku",
      position: "Vicar",
      socialMedia: { facebook: "", whatsapp: "" },
    },
    {
      image: <FontAwesomeIcon icon={faUserTie} />,
      name: "Rev'd Emmanuel Chukwu",
      church: "St. Peter's Anglican Church, Keffi",
      position: "Curate",
      socialMedia: { facebook: "", whatsapp: "" },
    },
    {
      image: <FontAwesomeIcon icon={faUserTie} />,
      name: "Ord. Bayo Ajayi",
      church: "All soul's Anglican Church, Sabon Gari",
      position: "vicar",
      socialMedia: { facebook: "", whatsapp: "" },
    },
    {
      image: <FontAwesomeIcon icon={faUserTie} />,
      name: "Ord. Abednego Ibrahim",
      church: "Zion Anglican Church, Shamake",
      position: "vicar",
      socialMedia: { facebook: "", whatsapp: "" },
    },

    {
      image: daniel,
      name: "Ord. Daniel Onyekachi",
      church: "Church of Epiphany, GRA keffi",
      position: "Vicar",
      socialMedia: { facebook: "", whatsapp: "" },
    },

    {
      image: ali,
      name: "Evang. Onyeka Ali",
      church: "Church of Advent, Jigwada",
      position: "vicar",
      socialMedia: { facebook: "", whatsapp: "" },
    },
  ]);

  return (
    <div className="bg-gray-300 text-center">
      <>
        <Header page={"CHURCH OFFICIALS"} />
      </>
      <div>
        <div className="my-12 text-lg w-[90%] lg:w-[70%] m-auto tracking-wider leading-normal font-poppins text-textCol-primary">
          <div className="lg:grid grid-cols-2 gap-8">
            {leaderDetails.map((leader) => (
              <div className="shadow-xl mt-10 lg:mt-0 bg-gray-200">
                <div
                  style={{ backgroundImage: `url(${leader.image})` }}
                  className="bg-cover bg-center bg-no-repeat h-[40vh] md:h-[50vh] bg-blend-multiply bg-green-200 rounded-xl border-b-8 border-orange-600"
                >
                  <p className="py-16 lg:py-20 text-gray-200">{}</p>
                </div>
                <div className="text-2xl pb-7">
                  <div className="flex items-center justify-center pt-8 pb-2">
                    <FontAwesomeIcon
                      icon={faUserTie}
                      className="text-orange-700 pl-4 pr-2"
                    />
                    <p className="font-semibold">{leader.name}</p>
                  </div>
                  <div className="flex items-center justify-center px-5 py-2">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-orange-700"
                    />
                    <p className="px-5">{leader.position}</p>
                  </div>
                  <div className="flex justify-center py-2">
                    <FontAwesomeIcon
                      icon={faChurch}
                      className="text-orange-700 px-5"
                    />
                    <p className="">{leader.church}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="px-10 my-7 text-red-600">
            NB: All churches are located in Nasarawa State
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
