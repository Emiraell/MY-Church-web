import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/Header/Header";
import kephas from "./assests/kephas.jpg";
import bishopHenry from "./assests/bishopHenry.png";
import steven from "./assests/steven.jpg";
import luka from "./assests/luka.jpg";
import pastors from "./assests/users.svg";
import { faCalendar, faUserTie } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer/Footer";

export default function PastPriest() {
  const priests = [
    {
      name: "Rt. Rev Henry Okeke Samuel",
      duration: "late 90s - 2001",
      image: bishopHenry,
    },
    {
      name: "Ven. Stephen kyoms",
      duration: "2001 - 2005",
      image: pastors,
    },
    {
      name: "Rt. Ven. Joshua Aiyejoto",
      duration: "2005 - 2009",
      image: pastors,
    },

    {
      name: "Late Ven. Chuks Moronu",
      duration: "2009 - 2012",
      image: pastors,
    },
    {
      name: "Ven. Innocent Nnamdi Azubuike",
      duration: "2012 - 2018",
      image: pastors,
    },
    {
      name: "Ven. Kefas Jatua",
      duration: "2018 - 2019",
      image: kephas,
    },
    {
      name: "Rev. Can Stephen Ugochukwu",
      duration: "2019 - 2022",
      image: steven,
    },
    {
      name: "Ven. Dr Luka Allu J.P",
      duration: "2022 - Present",
      image: luka,
    },
  ];
  return (
    <div className=" text-gray-100 text-lg">
      <Header page={"Our Past Priests"} pageName={"Past Priest"} />
      <div className="text-textCol-secondary w-[90%] lg:w-[80%] m-auto mt-32 lg:grid gap-6 lg:grid-cols-2">
        {priests.map((priest) => (
          <div className=" shadow-2xl bg-gray-600 rounded-t-2xl mb-16 col-span-1">
            <img
              src={priest.image}
              alt={priest.name}
              className=" object-cover rounded-t-2xl h-[50vh] md:h-[57vh] w-full"
            />
            <div className=" bg-gray-800 text-gray-300 text-lg py-5">
              <div className="flex justify-center items-center py-3">
                <FontAwesomeIcon
                  icon={faUserTie}
                  className="mr-5 text-orange-400 text-lg"
                />
                <p className="font-semibold text-xl">{priest.name}</p>
              </div>
              <div className="flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="mr-5 text-orange-400 "
                />
                <p>{priest.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
