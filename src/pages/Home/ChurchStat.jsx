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
  const [intersected, setIntersected] = useState(false);
  const [churchIntersected, setChurchIntersected] = useState(false);

  const [members, setMembers] = useState(0);
  const [pastors, setPastors] = useState(0);
  const [Churches, setChurches] = useState(0);
  const [groups, setGroups] = useState(0);
  const [iterated, setIterated] = useState(false);
  let intervalId;

  useEffect(() => {
    const memObserver = new IntersectionObserver((entries) => {
      setIntersected(entries[0].isIntersecting);
    });
    memObserver.observe(memRef.current);
  }, []);

  useEffect(() => {
    if (!iterated && intersected) {
      intervalId = setInterval(() => {
        setMembers((prev) => prev + 100);
        setPastors((prev) => prev + 1);
        setChurches((prev) => prev + 1);
        setGroups((prev) => prev + 1);
        members >= 900 && setIterated(true);
      }, 300);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [members, intersected]);

  return (
    <div
      className="w-[90%] m-auto py-10 grid grid-cols-2 gap-1 
			md:flex md:justify-between h-[100%]"
    >
      <div
        className={` p-2  md:p-10 translate-y-full blur-md duration-0.5 opacity-0 transition-all ease-in-out ${
          intersected && "-translate-y-0 blur-none opacity-100"
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
        className={` p-2  md:p-10 -translate-y-full duration-0.5 blur-md opacity-0 transition-all ease-in-out ${
          intersected && "-translate-y-0 blur-none opacity-100"
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
        className={` p-2  md:p-10 translate-y-full duration-0.5 opacity-0 blur-md transition-all ease-in-out ${
          intersected && "-translate-y-0 blur-none opacity-100"
        }`}
      >
        <div className={`pt-5`}>
          <FontAwesomeIcon icon={faChurch} className="h-12 text-orang-600" />
        </div>
        <div className="pl-3">
          <p className="text-greeny-200 font-bold text-xl md:text-2xl md:py-6 py-3">
            {Churches}+
          </p>
          <p className="md:text-2xl">Churches</p>
        </div>
      </div>
      <div
        className={` p-2  md:p-10 translate-y-full duration-0.5 blur-md opacity-0 transition-all ease-in-out ${
          intersected && "-translate-y-0 blur-none opacity-100"
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
