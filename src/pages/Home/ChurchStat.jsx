import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChurch,
  faPeopleGroup,
  faUserTie,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ChurchStat() {
  const memRef = useRef();
  const [intersected, setIntersected] = useState(false);

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
      <motion.div
        className={` p-2  md:p-10 `}
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div className={`pt-5`}>
          <FontAwesomeIcon icon={faUsers} className="h-12 text-orang-600" />
        </motion.div>
        <div className="pl-3">
          <p className="text-greeny-200 font-bold text-xl  md:text-2xl md:py-6 py-3">
            {members}+
          </p>
          <p className="md:text-2xl" ref={memRef}>
            members
          </p>
        </div>
      </motion.div>
      <motion.div
        className={` p-2  md:p-10 `}
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div className={`pt-5`}>
          <FontAwesomeIcon icon={faUserTie} className="h-12 text-orang-600" />
        </motion.div>
        <div className="pl-3">
          <p className="text-greeny-200 font-bold text-xl md:text-2xl md:py-6 py-3">
            {pastors}+
          </p>
          <p className="md:text-2xl">Pastors</p>
        </div>
      </motion.div>
      <motion.div
        className={` p-2  md:p-10 `}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
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
      </motion.div>
      <motion.div
        className={` p-2  md:p-10 `}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
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
      </motion.div>
    </div>
  );
}
