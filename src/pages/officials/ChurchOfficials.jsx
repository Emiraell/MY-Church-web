import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/Header/Header";
import bishop from "./assests/bishop.png";
import ali from "./assests/evangAli.png";
import okafor from "./assests/okafor.png";
import daniel from "./assests/ordDaniel.png";
import ejike from "./assests/revEjike.png";
import ernest from "./assests/revErnest.png";
import luka from "./assests/luka.jpg";
import curate from "./assests/curate.jpg";
import {
  faBank,
  faChurch,
  faDonate,
  faStar,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer/Footer";
export default function ChurchOfficials() {
  const leaderDetails = [
    {
      image: bishop,
      name: "Rt. Rev Adeyemi Robinson",
      church: "Lafia Diocese",
      position: "The Bishop",
    },
    {
      image: luka,
      name: "Ven. Dr. Luka B. Allu J.P",
      church: "St. Peter's Anglican Church, Keffi",
      position: "Vicar",
    },
    {
      image: okafor,
      name: "Rev'd Canon Dr Josiah C. Okafor",
      church: "St. Barnabas Anglican Church, Keffi",
      position: "Vicar",
    },
    {
      image: ejike,
      name: "Rev'd. Ejike C. Arinze",
      church: "Emmanuel Church Gidan Zakara",
      position: "Vicar",
    },
    {
      image: ernest,
      name: "Rev'd. Ernest C. Eleje",
      church: "St. philips Anglican Church Garaku",
      position: "Vicar",
    },
    {
      image: curate,
      name: "Rev'd Emmanuel Chukwu",
      church: "St. Peter's Anglican Church, Keffi",
      position: "Curate",
    },
    {
      image: <FontAwesomeIcon icon={faUserTie} />,
      name: "Ord. Bayo Ajayi",
      church: "All soul's Anglican Church, Sabon Gari",
      position: "vicar",
    },
    {
      image: <FontAwesomeIcon icon={faUserTie} />,
      name: "Ord. Abednego Ibrahim",
      church: "Zion Anglican Church, Shamake",
      position: "vicar",
    },

    {
      image: daniel,
      name: "Ord. Daniel Onyekachi",
      church: "Church of Epiphany, GRA keffi",
      position: "Vicar",
    },

    {
      image: ali,
      name: "Evang. Onyeka Ali",
      church: "Church of Advent, Jigwada",
      position: "vicar",
    },
  ];

  return (
    <div className="bg-gray-200 text-center">
      <>
        <Header page={"CHURCH OFFICIALS"} pageName={"officials"} />
      </>
      <div>
        <div className="my-12 text-lg w-[90%] lg:w-[70%] m-auto tracking-wider leading-normal font-poppins text-textCol-primary">
          <div className="lg:grid grid-cols-2 gap-8">
            {leaderDetails.map((leader) => (
              <div className="shadow-xl mt-10 lg:mt-0 bg-gray-100 text-start">
                <div
                  style={{ backgroundImage: `url(${leader.image})` }}
                  className="bg-cover bg-center bg-no-repeat h-[45vh] md:h-[50vh] bg-blend-multiply bg-green-200 rounded-xl border-b-8 border-orange-600"
                >
                  <p className="py-16 lg:py-20 text-gray-200">{}</p>
                </div>
                <div className="text-xl pb-7">
                  <div className=" pt-8 pb-2 flex">
                    <FontAwesomeIcon
                      icon={faUserTie}
                      className="text-orange-400 pl-6 pr-4"
                    />
                    <p className="font-semibold ">{leader.name}</p>
                  </div>
                  <div className="py-2">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-orange-400 pl-6 pr-4"
                    />
                    <p className=" inline-block">{leader.position}</p>
                  </div>
                  <div className="flex py-2">
                    <FontAwesomeIcon
                      icon={faChurch}
                      className="text-orange-400 pl-6 pr-4"
                    />
                    <p className=" inline">{leader.church}</p>
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
