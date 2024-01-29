import { useEffect, useRef, useState } from "react";
import bishop from "./assets/bishop.png";

import ChurchStat from "./ChurchStat";

export default function Welcome() {
  // const statRef = useRef();

  const [visible, setVisible] = useState(false);
  const [bishopInfoShown, setBishopInfoShown] = useState(false);
  // let [stats, setStats] = useState([
  //   {
  //     image: <FontAwesomeIcon icon={faUsers} color="orange" size="3x" />,
  //     title: "Members",
  //     number: 0,
  //   },
  //   {
  //     image: <FontAwesomeIcon icon={faChurch} color="orange" size="3x" />,
  //     title: "Churches",
  //     number: 0,
  //   },
  //   {
  //     image: <FontAwesomeIcon icon={faUserTie} color="orange" size="3x" />,
  //     title: "Pastors",
  //     number: 0,
  //   },
  //   {
  //     image: <FontAwesomeIcon icon={faPeopleGroup} color="orange" size="3x" />,
  //     title: "Group",
  //     number: 0,
  //   },
  // ]);
  let [statIterated, setStatIterated] = useState(false);
  // const [members, setMembers] = useState(0);
  // const [pastors, setPastors] = useState(0);
  // const [churches, setChurches] = useState(0);
  // const [groups, setGroups] = useState(0);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setVisible(entry.isIntersecting);
  //   });
  //   observer.observe(statRef.current);
  // }, []);

  // let interId;
  // useEffect(() => {
  //   if (!statIterated && visible) {
  //     interId = setInterval(() => {
  //       setStats([
  //         ...stats,
  //         ((stats[0].number = stats[0].number + 12.5),
  //         (stats[1].number = stats[1].number + 0.125),
  //         (stats[2].number = stats[2].number + 0.125),
  //         (stats[3].number = stats[3].number + 0.125)),
  //       ]);
  //       stats[0].number >= 1000 && setStatIterated(true);
  //     }, 30);
  //   }
  //   return () => {
  //     clearInterval(interId);
  //   };
  // }, [statIterated, visible]);

  return (
    <div className="text-textCol-secondary pt-28  text-center py-5 xl:w-[90%] xl:m-auto">
      <p className="pb-16 font-rochester text-2xl md:text-4xl tracking-widest">
        Our Church, Our Home
      </p>
      <div className=" shadow-sm">
        {/* Welcome div */}
        <div className="w-[92%]  m-auto lg:grid gap-10 lg:grid-cols-2 xl:grid-cols-3 lg:px-2  ">
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
              <p className="font-bold tracking-wide text-xl">
                Rt. Rev. Robinson Adeyemi
              </p>
              <span className=" text-greeny-50">Bishop of Lafia Diocese </span>
            </div>
          </div>
          <p className="p-4  xl:col-span-2 lg:col-span-1 lg:text-xl text-lg mt-5 lg:mt-0 leading-8 tracking-wide lg:tracking-widest font-semibold lg:leading-10  xl:pt-20 ">
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
      </div>
      <ChurchStat />
    </div>
  );
}
