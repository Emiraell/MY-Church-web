import luka from "./assests/vicar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faChurch,
  faLink,
  faStar,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function TeamOfLeaders() {
  const leader = {
    name: "Ven. Dr Luka B. Allu J.P",
    church: "St Peter's Anglican Church, Keffi",
    position: "Vicar / supervising priest",
    socialMedia: [{ facebook: "", whatsapp: "" }],
  };

  const [hovered, setHovered] = useState(false);

  return (
    <div className=" font-lato w-[90%] m-auto text-textCol-secondary my-20 text-center">
      <p className="text-2xl text-orang-600 ">
        <span className="border-b-2 pb-2 border-dashed border-greeny-100">
          Leadership
        </span>
      </p>
      <div
        className="shadow-xl mt-10 "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Link to="officials">
          <div
            className={`h-[45vh] bg-center bg-cover relative rounded-t-lg border-b-8 
          rounded-b-xl border-orange-500 bg-gray-200 ${
            hovered && "bg-gray-700"
          } bg-blend-multiply`}
            style={{ backgroundImage: `url(${luka})` }}
          >
            <FontAwesomeIcon
              icon={faLink}
              className={` ${
                hovered && "opacity-100"
              } opacity-0 absolute top-1/2 text-4xl text-blue-700`}
            />
          </div>
        </Link>
        <div className="py-7 border border-orange-500 -mt-2">
          <p className=" text-gray-950 font-bold text-2xl">{leader.name}</p>
          <span className="block text-lg py-1">{leader.position}</span>
          <p className="text-xl text-gray-950">{leader.church}</p>
        </div>
      </div>
    </div>
  );
}
