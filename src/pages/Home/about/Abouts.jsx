import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Abouts({
  oneIsVisible,
  toggleVisibilty,
  about,
  index,
  setOneIsVisible,
}) {
  return (
    <div>
      <div key={about.path} className="bg-gray-900 ">
        {" "}
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
          <div className={`relative  h-[20vh] w-[100%] `}>
            <div
              className={`absolute h-[100%] w-[100%] bg-cover bg-gray-700 bg-center bg-no-repeat bg-blend-multiply`}
              style={{
                backgroundImage: `url(${about.image})`,
              }}
            >
              <p className="absolute animate-bounce w-[100%] bottom-2/4 text-emerald-600 font-bold text-lg italic">
                {about.name}
              </p>
            </div>
          </div>

          <div className="py-4 px-3  ">
            <p>
              {about.description}{" "}
              <button className="bg-emerald-600 text-gray-100 py-1 mt-2 align-middle w-[100px] m-auto px-2 rounded-sm hidden md:block">
                <Link to={about.path}>Read More</Link>
              </button>
            </p>
          </div>
        </div>
        <div className="flex justify-between px-4 py-5 mt-1 md:hidden text-emerald-600">
          {about.path === "about" &&
            (oneIsVisible.aboutSec ? (
              <button className="bg-emerald-600 text-gray-100 py-1 px-2 rounded-lg">
                <Link to={`${about.path}`}>Read More</Link>
              </button>
            ) : (
              <span className=" text-lg md:hid">{about.name}</span>
            ))}
          {about.path === "vision" &&
            (oneIsVisible.visionSec ? (
              <button className="bg-emerald-600 text-gray-100 py-1 px-2 rounded-lg">
                <Link to={`${about.path}`}>Read More</Link>
              </button>
            ) : (
              <span className=" text-lg">{about.name}</span>
            ))}

          {about.path === "history" &&
            (oneIsVisible.historySec ? (
              <button className="bg-emerald-600 text-gray-100 py-1 px-2 rounded-lg">
                <Link to={`${about.path}`}>Read More</Link>
              </button>
            ) : (
              <span className="text-lg">{about.name}</span>
            ))}

          {about.path === "ministries" &&
            (oneIsVisible.ministrySec ? (
              <button className="bg-emerald-600 text-gray-100 py-1 px-2 rounded-lg">
                <Link to={`${about.path}`}>Read More</Link>
              </button>
            ) : (
              <span className="t text-lg">{about.name}</span>
            ))}

          <p
            className="text-2xl text-emerald-600 md:hidden animate-pulse"
            onClick={() => toggleVisibilty(about.path)}
          >
            {about.path === "about" &&
              (oneIsVisible.aboutSec ? (
                <FontAwesomeIcon icon={faMinus} color="orange" size="sm" />
              ) : (
                <FontAwesomeIcon icon={faPlus} color="orange" size="sm" />
              ))}
            {about.path === "vision" &&
              (oneIsVisible.visionSec ? (
                <FontAwesomeIcon icon={faMinus} color="orange" size="sm" />
              ) : (
                <FontAwesomeIcon icon={faPlus} color="orange" size="sm" />
              ))}
            {about.path === "history" &&
              (oneIsVisible.historySec ? (
                <FontAwesomeIcon icon={faMinus} color="orange" size="sm" />
              ) : (
                <FontAwesomeIcon icon={faPlus} color="orange" size="sm" />
              ))}
            {about.path === "ministries" &&
              (oneIsVisible.ministrySec ? (
                <FontAwesomeIcon icon={faMinus} color="orange" size="sm" />
              ) : (
                <FontAwesomeIcon icon={faPlus} color="orange" size="sm" />
              ))}
          </p>
        </div>
      </div>
    </div>
  );
}
