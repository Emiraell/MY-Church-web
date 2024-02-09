import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faExchange,
  faMicrophone,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import sermon1 from "./assests/sermon1.mp4";
import sermon2 from "./assests/sermon2.mp4";
import poster from "./assests/poster.jpg";
import Footer from "../../components/footer/Footer";
import { motion } from "framer-motion";

export default function Goai() {
  // initialized my count down value
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // To trigger the count down functionality only on page load
  useEffect(() => {
    // set timer to count at interval of one seconds
    const intervalId = setInterval(() => {
      // get the current date on page load
      const currentDate = new Date();
      // date to count down to
      const programDate = new Date("Oct 1, 2024");
      const distance = (programDate - currentDate) / 1000;

      // trigger only when the distance between the current date and the count down date
      if (distance > 0) {
        setDays(Math.floor(distance / 60 / 60 / 24));
        setHours(Math.floor((distance / 60 / 60) % 24));
        setMinutes(Math.floor((distance / 60) % 60));
        setSeconds(Math.floor(distance % 60));
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
    // clean up
    return () => clearInterval(intervalId);
  }, []);
  const [sermons, setSermons] = useState([
    {
      video: sermon1,
      title: "The two days involved in every problem",
      speaker: "Evang Peters Nwokocha",
      link: "https://web.facebook.com/saintpeters.anglicankeffi/videos/766651728556766",
    },
    {
      video: sermon2,
      title: "The move of the Spirit",
      speaker: "Ven. Dr. Emeka EZEA",
      link: "https://web.facebook.com/saintpeters.anglicankeffi/videos/699675174951938",
    },
  ]);
  const [daetails, setDetails] = useState([
    {
      title: "GREAT SPEAKERS",
      image: <FontAwesomeIcon icon={faMicrophone} className="px-2" />,
      content:
        "Yearly, God blesses us with ministrations from the Holy Spirit through his servants, thus annoucing Himself mightily.",
    },
    {
      title: "GLORIOUS ECOUNTER",
      image: <FontAwesomeIcon icon={faExchange} className="px-2" />,
      content:
        "This program results in yearly encounters with the realms of Heaven. The Lost are discovered, and the already found are rekindled.",
    },
    {
      title: "MIRACLES",
      image: <FontAwesomeIcon icon={faMicrophone} className="px-2" />,
      content:
        "Throughout this program, miracles are worked by the Holy Spirit and Heavens. Are raised heads are been met with the power of Christ",
    },
    {
      title: "GREAT COMMISION",
      image: <FontAwesomeIcon icon={faExchange} className="px-2" />,
      content:
        "During the duration of this program, the Holy Spirit is also involved in raising and commissioning individuals for the purpose of spreading the gospel.",
    },
  ]);
  return (
    <div className="text-textCol-primary">
      <Header page={"God of all impossibilities"} pageName={"GOAI"} />
      <div>
        <p className="mt-5 text-xl font-bold font-lato">
          GOD OF ALL IMPOSSIBILITIES 2024
        </p>
        <p className="mt-3 italic text-orange-400">October, 2024</p>

        {/* count down section */}
        <div className="flex-col lg:flex, justify-around text-xl py-5 font-roboto tracking-wider">
          <div className="flex justify-evenly">
            <p className=" border-dashed py-7 px-8 font-bold border-8 rounded-full border-blue-500">
              <span>{days < 10 ? `0${days}` : days}</span>{" "}
              <span className="block">Days</span>
            </p>
            <p className=" border-dashed p-7 font-bold border-8 rounded-full border-yellow-500">
              <span>{hours < 10 ? `0${hours}` : hours}</span>{" "}
              <span className="block">Hours</span>
            </p>
          </div>
          <div className="flex justify-evenly my-10">
            <p className=" border-dashed py-7 px-5 font-bold border-8 rounded-full border-purple-500">
              <span>{minutes < 10 ? `0${minutes}` : minutes}</span>{" "}
              <span className="block">Minutes</span>
            </p>
            <p className=" border-dashed py-7 px-4 font-bold border-8 rounded-full border-red-500">
              <span className="">{seconds < 10 ? `0${seconds}` : seconds}</span>
              <span className="block">Seconds</span>
            </p>
          </div>
        </div>

        <div className="w-[90%] lg:w-[75%] m-auto text-xl font-montserrat tracking-wide">
          <p className="py-5 font-semibold">
            The Annaul program, "God of All Impossibilities," was started by
            Ven. Innocent Azubuike, the vicar at the time. The program, which
            was formerly known as God of Hannah, made its debut in October 2017
            and has shown amazing growth ever since.
          </p>

          <div>
            <p className="font-bold font-poppins text-emerald-800 py-5">
              Why you shouldn't miss
            </p>
            <p>
              God of All Impossibilities is one program that Heaven and its host
              have used to demonstrate the power of Christ's finished work in St
              Peter's Anglican Church Keffi and throughout the Keffi region.
              Aiming to teach, equip, develop, and raise testifiers for Christ
              not only to Keffi but also to the country and the world at large,
              the organization has been growing yearly.
            </p>
          </div>
        </div>
        <div className="w-[90%] lg:w-[75%] m-auto text-xl font-montserrat lg:grid grid-cols-2 gap-6 tracking-wide mt-14 ">
          {daetails.map((detail, index) => (
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              key={index}
              className="shadow-xl rounded-md col-span-1  bg-gray-200 mt-10 lg:mt-0 rounded-br-3xl"
            >
              <span className="block text-emerald-900 font-bold pt-5">
                {detail.image}
                {detail.title}
              </span>
              <p className="p-5">{detail.content}</p>
            </motion.div>
          ))}
        </div>
        <h2 className="text-emerald-900 font-bold pt-2 pb-7 mt-14 text-xl md:text-2xl">
          SERMONS
        </h2>
        <div className="w-[90%] lg:w-[75%] m-auto text-xl font-montserrat lg:grid grid-cols-2 gap-6 tracking-wide my-10">
          {sermons.map((sermon, index) => (
            <div key={index} className=" shadow-lg mt-10 lg:mt-0 ">
              <video
                src={sermon.video}
                controls
                poster={poster}
                className="pb-4 rounded-t-xl"
              ></video>
              <div className="font-semibold font-lato">
                <p>
                  {" "}
                  <FontAwesomeIcon
                    icon={faBook}
                    className="text-emerald-800"
                  />{" "}
                  {sermon.title}
                </p>
                <p className="py-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faUserTie}
                    className="text-emerald-800"
                  />{" "}
                  {sermon.speaker}
                </p>{" "}
                <p className=" font-rochester text-blue-500 text-2xl py-3 cursor-pointer">
                  <a href={sermon.link}>Watch full sermon</a>{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="pb-10">
          Listen to more sermons on our{" "}
          <a href="https://web.facebook.com/saintpeters.anglicankeffi">
            <span className=" text-blue-800">facebook page</span>
          </a>
        </p>
        <Footer />
      </div>
    </div>
  );
}
