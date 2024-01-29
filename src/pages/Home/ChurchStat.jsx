import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChurch,
  faPeopleGroup,
  faUserTie,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

export default function ChurchStat() {
  const memRef = useRef();
  const churchRef = useRef();
  const [memIntersected, setMemIntersected] = useState(false);
  const [churchIntersected, setChurchIntersected] = useState(false);

  const stats = { mem: memIntersected, chu: churchIntersected };
  const [members, setMembers] = useState(0);
  const [pastors, setPastors] = useState(0);
  const [Churches, setChurches] = useState(0);
  const [groups, setGroups] = useState(0);
  const [iterated, setIterated] = useState(false);
  let intervalId;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setMemIntersected(entries[0].isIntersecting);
    });
    observer.observe(memRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setChurchIntersected(entries[0].isIntersecting);
    });
    observer.observe(churchRef.current);
  }, []);

  useEffect(() => {
    if (!iterated && (memIntersected || churchIntersected)) {
      intervalId = setInterval(() => {
        setMembers((prev) => prev + 100);
        setPastors((prev) => prev + 1);
        setChurches((prev) => prev + 1);
        setGroups((prev) => prev + 1);
        members >= 900 && setIterated(true);
      }, 100);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [members, memIntersected, churchIntersected]);

  return (
    <div
      className="w-[90%] m-auto py-10 grid grid-cols-2 gap-1 
			md:flex md:justify-between h-[100%]"
    >
      <div
        className={` p-2  md:p-10 -translate-x-full blur-md duration-0.5 transition-all ease-in-out ${
          memIntersected && "translate-x-0 blur-none"
        }`}
      >
        <div className={`pt-5`}>
          <FontAwesomeIcon icon={faUsers} className="h-12 text-orang-600" />
        </div>
        <div className="pl-3">
          <p className="text-greeny-200 font-bold text-xl  md:text-2xl md:py-6 py-3">
            {members}+
          </p>
          <p className="md:text-2xl" ref={memRef}>
            members
          </p>
        </div>
      </div>
      <div
        className={` p-2  md:p-10 translate-x-full duration-0.5 blur-md transition-all ease-in-out ${
          memIntersected && "-translate-x-0 blur-none"
        }`}
      >
        <div className={`pt-5`}>
          <FontAwesomeIcon icon={faUserTie} className="h-12 text-orang-600" />
        </div>
        <div className="pl-3">
          <p className="text-greeny-200 font-bold text-xl md:text-2xl md:py-6 py-3">
            {pastors}+
          </p>
          <p className="md:text-2xl">Pastors</p>
        </div>
      </div>
      <div
        className={` p-2  md:p-10 -translate-x-full duration-0.5 blur-md transition-all ease-in-out ${
          churchIntersected && "translate-x-0 blur-none"
        }`}
      >
        <div className={`pt-5`}>
          <FontAwesomeIcon icon={faChurch} className="h-12 text-orang-600" />
        </div>
        <div className="pl-3">
          <p className="text-greeny-200 font-bold text-xl md:text-2xl md:py-6 py-3">
            {Churches}+
          </p>
          <p className="md:text-2xl" ref={churchRef}>
            Churches
          </p>
        </div>
      </div>
      <div
        className={` p-2  md:p-10 translate-x-full duration-0.5 blur-md transition-all ease-in-out ${
          churchIntersected && "-translate-x-0 blur-none"
        }`}
      >
        <div className={`pt-5`}>
          <FontAwesomeIcon
            icon={faPeopleGroup}
            className="h-12 text-orang-600"
          />
        </div>
        <div className="pl-3">
          <p className="text-greeny-200 font-bold text-xl pl-3 md:text-2xl md:py-6 py-3">
            {groups}+
          </p>
          <p className="md:text-2xl pl-3">Groups</p>
        </div>
      </div>
    </div>
  );
}
