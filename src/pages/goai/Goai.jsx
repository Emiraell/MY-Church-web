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

export default function Goai() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const programDate = new Date("Oct 1, 2024");
      const distance = (programDate - currentDate) / 1000;
      if (distance > 0) {
        setDays(Math.floor(distance / 60 / 60 / 24));
        setHours(Math.floor((distance / 60 / 60) % 24));
        setMinutes(Math.floor((distance / 60) % 60));
        setSeconds(Math.floor(distance % 60));
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const [sermons, setSermons] = useState([
    {
      video: sermon1,
      title: "The two days involved in every problem",
      speaker: "Evang Peters Nwokocha",
      link: "",
    },
    {
      video: sermon2,
      title: "The move of the Spirit",
      speaker: "Ven. Dr. Emeka EZEA",
      link: "",
    },
  ]);
  const [daetails, setDetails] = useState([
    {
      title: "GREAT SPEAKERS",
      image: <FontAwesomeIcon icon={faMicrophone} className="px-2" />,
      content:
        "Yearly, God blesses us with ministrations from the Holy Spirit through his servants thereby annoucing Himself mightly",
    },
    {
      title: "GLORIOUS ECOUNTER",
      image: <FontAwesomeIcon icon={faExchange} className="px-2" />,
      content:
        "Ecounters with the realms of Heavens are made yearly at the cause of this program. The Lost are found and the aleady found are rekindled",
    },
    {
      title: "MIRACLES",
      image: <FontAwesomeIcon icon={faMicrophone} className="px-2" />,
      content:
        "Miracles are administered by Heavens and Holy Spirit at the course of this program. Are raised heads are been met with the power of Christ",
    },
    {
      title: "GREAT COMMISION",
      image: <FontAwesomeIcon icon={faExchange} className="px-2" />,
      content:
        "The Holy Spirit is also in the business of raising and commison people for the propagation of the gospel during the cause of this program",
    },
  ]);
  return (
    <div className="bg-gray-100 text-center text-textCol-primary">
      <Header page={"God of all impossibilities"} pageName={"GOAI"} />
      <div>
        <p className="mt-5 text-xl font-bold font-lato">
          GOD OF ALL IMPOSSIBILITIES 2024
        </p>
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
            {" "}
            God of all impossibilities is annaul program which was initated by
            then then vicar <span>Ven Azubuike</span>. Initially called{" "}
            <span>God of Hannah</span>, the program had it first outing in the
            october 2017 and it has since then expressed a tremendous growth
            over the years.
          </p>
          <div>
            <p className="font-bold font-poppins text-emerald-800 py-5">
              Why you shouldn't miss
            </p>
            <p>
              God of all impossibilities is one program that Heaven and it host
              has used to prove the power of the finish work of Christ in St
              peter's Anglican Church Keffi and to the land of keffi at large.
              Recording an increase in numbers yearly, the aimed to teach,
              equip, develop and raise testifies for Christ not only to keffi
              but to the nation and the world at large.
            </p>
          </div>
        </div>
        <div className="w-[90%] lg:w-[75%] m-auto text-xl font-montserrat lg:grid grid-cols-2 gap-6 tracking-wide mt-14 ">
          {daetails.map((detail, index) => (
            <div
              key={index}
              className="shadow-xl rounded-md col-span-1  bg-gray-200 mt-10 lg:mt-0 rounded-br-3xl"
            >
              <span className="block text-emerald-900 font-bold pt-5">
                {detail.image}
                {detail.title}
              </span>
              <p className="p-5">{detail.content}</p>
            </div>
          ))}
        </div>
        <h2 className="text-emerald-900 font-bold pt-2 pb-7 mt-14">SERMONS</h2>
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
                <a href={sermon.link}></a>
              </div>
            </div>
          ))}
        </div>
        <p className="pb-10">
          Listen to more sermons on our{" "}
          <a href="">
            <span className=" text-blue-800">facebook page</span>
          </a>
        </p>
        <Footer />
      </div>
    </div>
  );
}
