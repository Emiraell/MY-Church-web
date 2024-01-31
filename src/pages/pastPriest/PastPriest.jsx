import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/Header/Header";
import user from "./assests/users.png";
import {
  faCalendar,
  faUser,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Footer from "../../components/footer/Footer";

export default function PastPriest() {
  const [priests, setPriests] = useState([
    {
      name: "Rt. Rev Henry Okeke Samuel",
      duration: "late 90s - early 2000",
      image: (
        <FontAwesomeIcon
          icon={faUser}
          className="h-[30vh] lg:h-[45vh] w-[100%] object-cover mt-10 text-gray-400"
        />
      ),
    },
    {
      name: "Ven. Ayiejto kyoms",
      duration: "2004 - 2009",
      image: (
        <FontAwesomeIcon
          icon={faUser}
          className="h-[30vh] w-[100%] lg:h-[45vh] object-cover mt-10 text-gray-400"
        />
      ),
    },
    {
      name: "Late Ven. Chuks Moronu",
      duration: "2009 - 2012",
      image: (
        <FontAwesomeIcon
          icon={faUser}
          className="h-[30vh] w-[100%] lg:h-[45vh] object-cover mt-10 text-gray-400"
        />
      ),
    },
    {
      name: "Ven Azubuike",
      duration: "2012 - 2018",
      image: (
        <FontAwesomeIcon
          icon={faUser}
          className="h-[30vh] w-[100%] lg:h-[45vh] object-cover mt-10 text-gray-400"
        />
      ),
    },
    {
      name: "Ven Kefas Jatua",
      duration: "2018 - 2019",
      image: (
        <FontAwesomeIcon
          icon={faUser}
          className="h-[30vh] w-[100%] lg:h-[45vh] object-cover mt-10 text-gray-400"
        />
      ),
    },
    {
      name: "Rev. Can Stephen Ugochukwu",
      duration: "2019 - 2022",
      image: (
        <FontAwesomeIcon
          icon={faUser}
          className="h-[30vh] w-[100%] lg:h-[45vh] object-cover mt-10 text-gray-400"
        />
      ),
    },
    {
      name: "Ven. Dr Luka Allu J.P",
      duration: "2022 - Present",
      image: (
        <FontAwesomeIcon
          icon={faUser}
          className="h-[30vh] w-[100%] lg:h-[45vh] object-cover mt-10 text-gray-400"
        />
      ),
    },
  ]);
  return (
    <div className="bg-gray-300 text-gray-200">
      <Header page={"Our Past Priests"} pageName={"Past Priest"} />
      <div className="text-textCol-secondary w-[90%] lg:w-[80%] m-auto mt-32 lg:grid gap-6 lg:grid-cols-2">
        {priests.map((priest) => (
          <div className=" shadow-2xl bg-gray-950 rounded-t-3xl mb-16 col-span-1">
            {priest.image}
            <div className="mt-9 bg-gray-800 text-gray-300 text-lg py-5">
              <div className="flex justify-center items-center py-3">
                <FontAwesomeIcon
                  icon={faUserTie}
                  className="mr-5 text-orange-400 text-lg"
                />
                <p className="font-semibold">{priest.name}</p>
              </div>
              <div className="flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="mr-5 text-orange-400 text-lg"
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
