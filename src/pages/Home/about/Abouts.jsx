import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Abouts({ oneIsVisible, toggleVisibilty, about }) {
  return (
    <div className="border-r">
      <div className="bg-gray-200 ">
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

          <div className="py-4 px-3  ">
            <p className="leading-7 tracking-widest pb-5">
              {about.description}{" "}
              <button className="bg-orange-700 text-gray-50 py-1 mt-10 w-[100px] m-auto px-2 rounded-full hidden md:block">
                <Link to={about.path}>Read More</Link>
              </button>
            </p>
          </div>
        </div>
        <div className="flex justify-between px-4 py-5 mt-1 md:hidden text-orange-500 text-lg">
          {about.path === "about" &&
            (oneIsVisible.aboutSec ? (
              <button className="bg-orange-700 text-gray-100 py-1 px-2 rounded-sm">
                <Link to={`${about.path}`}>Read More</Link>
              </button>
            ) : (
              <span className="text-xl font-semibold tracking-widest">
                {about.name}
              </span>
            ))}
          {about.path === "vision" &&
            (oneIsVisible.visionSec ? (
              <button className="bg-orange-700 text-gray-100 py-1 px-2 rounded-sm">
                <Link to={`${about.path}`}>Read More</Link>
              </button>
            ) : (
              <span className="text-xl font-semibold tracking-widest">
                {about.name}
              </span>
            ))}

          {about.path === "history" &&
            (oneIsVisible.historySec ? (
              <button className="bg-orange-700 text-gray-100 py-1 px-2 rounded-sm">
                <Link to={`${about.path}`}>Read More</Link>
              </button>
            ) : (
              <span className="text-xl font-semibold tracking-widest">
                {about.name}
              </span>
            ))}

          {about.path === "ministries" &&
            (oneIsVisible.ministrySec ? (
              <button className="bg-orange-700 text-gray-100 py-1 px-2 rounded-sm">
                <Link to={`${about.path}`}>Read More</Link>
              </button>
            ) : (
              <span className="text-xl font-semibold tracking-widest">
                {about.name}
              </span>
            ))}

          <p
            className="text-2xl text-emerald-600 md:hidden animate-pulse"
            onClick={() => toggleVisibilty(about.path)}
          >
            {about.path === "about" &&
              (oneIsVisible.aboutSec ? (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className=" text-orang-700 h-7"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faChevronUp}
                  className=" text-orang-700 h-7"
                />
              ))}
            {about.path === "vision" &&
              (oneIsVisible.visionSec ? (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className=" text-orang-700"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faChevronUp}
                  className=" text-orang-700"
                />
              ))}
            {about.path === "history" &&
              (oneIsVisible.historySec ? (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className=" text-orang-700"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faChevronUp}
                  className=" text-orang-700"
                />
              ))}
            {about.path === "ministries" &&
              (oneIsVisible.ministrySec ? (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className=" text-orang-700"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faChevronUp}
                  className=" text-orang-700"
                />
              ))}
          </p>
        </div>
      </div>
    </div>
  );
}
