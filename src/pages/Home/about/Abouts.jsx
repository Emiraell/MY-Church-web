import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Abouts({ oneIsVisible, toggleVisibilty, about }) {
  return (
    <motion.div
      className=" border-r"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex p-3 items-center justify-between bg-greeny-500 text-gray-50 border-none">
        <p className="text-lg">{about.name}</p>
        <div
          onClick={() => toggleVisibilty(about.path)}
          className="text-orange-300 text-lg md:hidden"
        >
          {about.path === "about" &&
            (oneIsVisible.aboutSec ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            ))}
          {about.path === "vision" &&
            (oneIsVisible.visionSec ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            ))}
          {about.path === "history" &&
            (oneIsVisible.historySec ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            ))}
          {about.path === "ministries" &&
            (oneIsVisible.ministrySec ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            ))}
        </div>
      </div>{" "}
      <div
        className={`md:block ${
          about.path === "about" &&
          (oneIsVisible.aboutSec ? "block " : "hidden ")
        } ${
          about.path === "vision" &&
          (oneIsVisible.visionSec ? "block" : "hidden")
        } ${
          about.path === "history" &&
          (oneIsVisible.historySec ? "block" : "hidden")
        } ${
          about.path === "ministries" &&
          (oneIsVisible.ministrySec ? "block" : "hidden")
        }`}
      >
        <div className={`relative  h-[25vh] `}>
          <div
            className={`absolute h-[100%] w-[100%] bg-cover bg-gray-600 bg-center bg-no-repeat bg-blend-multiply`}
            style={{
              backgroundImage: `url(${about.image})`,
            }}
          >
            <p className="absolute animate-bounce tracking-widest w-[100%] bottom-2/4 text-milk-200 font-bold text-xl italic">
              {about.name}
            </p>
          </div>
        </div>
        <div className="p-3">
          <p className="leading-7 tracking-wider pb-5">{about.description} </p>
        </div>
        <button
          className=" border border-orange-500 text-orange-500 rounded-md py-3 drop-shadow-xl
       hover:bg-orange-500 hover:border-transparent hover:text-gray-50  w-52 mb-5"
        >
          <Link to={about.path}>Read More</Link>
        </button>
      </div>
    </motion.div>
  );
}
