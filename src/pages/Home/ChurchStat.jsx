import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChurch,
  faPeopleGroup,
  faUserTie,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function ChurchStat() {
  return (
    <div
      className="w-[90%] m-auto lg:pl-20 py-10 grid grid-cols-2 gap-1 
			md:flex md:justify-between h-[100%]"
    >
      <div className={` p-2  md:p-10`}>
        <div className={`pt-5`}>
          <FontAwesomeIcon icon={faUsers} />
        </div>
        <div className="">
          <p className="text-greeny-200 font-bold text-2xl pl-3 md:pl-0 md:text-3xl md:py-6 py-3">
            1000+
          </p>
          <p className="md:text-3xl">members</p>
        </div>
      </div>
      <div className={` p-2  md:p-10`}>
        <div className={`pt-5`}>
          <FontAwesomeIcon icon={faUsers} />
        </div>
        <div className="">
          <p className="text-greeny-200 font-bold text-2xl pl-3 md:pl-0 md:text-3xl md:py-6 py-3">
            1000+
          </p>
          <p className="md:text-3xl">members</p>
        </div>
      </div>
      <div className={` p-2  md:p-10`}>
        <div className={`pt-5`}>
          <FontAwesomeIcon icon={faUsers} />
        </div>
        <div className="">
          <p className="text-greeny-200 font-bold text-2xl pl-3 md:pl-0 md:text-3xl md:py-6 py-3">
            1000+
          </p>
          <p className="md:text-3xl">members</p>
        </div>
      </div>
      <div className={` p-2  md:p-10`}>
        <div className={`pt-5`}>
          <FontAwesomeIcon icon={faUsers} />
        </div>
        <div className="">
          <p className="text-greeny-200 font-bold text-2xl pl-3 md:pl-0 md:text-3xl md:py-6 py-3">
            1000+
          </p>
          <p className="md:text-3xl">members</p>
        </div>
      </div>
    </div>
  );
}
