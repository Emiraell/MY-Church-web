import { useEffect, useRef, useState } from "react";
import bishop from "./assets/bishop.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChurch,
  faPeopleGroup,
  faUserTie,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function Welcome() {
  const statRef = useRef();

  const [visible, setVisible] = useState(false);
  const [bishopInfoShown, setBishopInfoShown] = useState(false);
  let [stats, setStats] = useState([
    {
      image: <FontAwesomeIcon icon={faUsers} color="orange" size="3x" />,
      title: "Members",
      number: 0,
    },
    {
      image: <FontAwesomeIcon icon={faChurch} color="orange" size="3x" />,
      title: "Churches",
      number: 0,
    },
    {
      image: <FontAwesomeIcon icon={faUserTie} color="orange" size="3x" />,
      title: "Pastors",
      number: 0,
    },
    {
      image: <FontAwesomeIcon icon={faPeopleGroup} color="orange" size="3x" />,
      title: "Group",
      number: 0,
    },
  ]);
  let [statIterated, setStatIterated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisible(entry.isIntersecting);
    });
    observer.observe(statRef.current);
  }, []);

  let interId;
  useEffect(() => {
    if (!statIterated && visible) {
      interId = setInterval(() => {
        setStats([
          ...stats,
          ((stats[0].number = stats[0].number + 12.5),
          (stats[1].number = stats[1].number + 0.125),
          (stats[2].number = stats[2].number + 0.125),
          (stats[3].number = stats[3].number + 0.125)),
        ]);
        stats[0].number >= 1000 && setStatIterated(true);
      }, 30);
    }
    return () => {
      clearInterval(interId);
    };
  }, [statIterated, visible]);

  return (
    <div className="text-textCol-secondary pt-28  text-center py-5 xl:w-[90%] xl:m-auto">
      <p className="pb-16 font-rochester text-2xl md:text-4xl tracking-widest">
        Our Church, Our Home
      </p>
      <div className=" border-2 ">
        {/* Welcome div */}
        <div className="w-[92%]  m-auto border-2 border-blue-100 lg:grid gap-10 lg:grid-cols-2 xl:grid-cols-3 lg:px-2  ">
          <div
            className="relative h-[50vh] bg-cover bg-center bg-no-repeat rounded-t-3xl  bg-gray-500 bg-blend-multiply"
            style={{ backgroundImage: `url(${bishop})` }}
          >
            <div
              className={`text-gray-100 absolute bottom-[50%] w-[100%] ${
                bishopInfoShown ? "block" : "hidden"
              }`}
            >
              {/* hidden */}
              <span>fac</span> <span>wha</span>
            </div>
            <div className="absolute text-gray-200 w-[100%] bottom-4">
              <p className="font-bold tracking-wide text-lg">
                Rt. Rev. Robinson Adeyemi
              </p>
              <span className="text-sm text-blue-300">
                Bishop of Lafia Diocese{" "}
              </span>
            </div>
          </div>
          <p className="p-4  xl:col-span-2 lg:col-span-1 lg:text-xl lg:tracking-wide lg:leading-10  xl:pt-20 ">
            <span className="text-5xl font-bold text-red-600 font-rochester">
              P
            </span>
            leasurable greetings and welcome to the official website of st
            peter's anglicain church keffi, nasarawa state, a place were Jesus
            lives.. We do hope this website serves your need during this visit
            As you encounter our Archdeaconry via this medium, we pray and hope
            you also encounter it with your physical presence.
          </p>
        </div>
        <div className="w-[90%] m-auto lg:pl-20 py-10 grid grid-cols-2 gap-1 md:flex md:justify-between h-[100%]">
          {stats.map((stat, index) => (
            <div className={` p-2  md:p-10`} key={index}>
              {" "}
              <div className={`pt-5`}>{stat.image}</div>{" "}
              <div className="">
                <p
                  ref={statRef}
                  className="text-emerald-700 font-bold text-2xl pl-3 md:pl-0 md:text-3xl md:py-6 py-3"
                >
                  {index > 3 ? "" : stat.number + "+"}
                </p>
                <p className="md:text-3xl">{stat.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
