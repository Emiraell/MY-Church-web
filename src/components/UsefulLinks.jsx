import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function UsefulLinks({ links }) {
  return (
    <div className="my-20 pb-14 m-auto w-[90%] bg-gray-300">
      {/* useful links */}

      <div className="flex justify-between w-[85%] m-auto pt-10">
        <h2 className="text-emerald-800 tracking-wider text-2xl font-rochester md:text-3xl">
          Useful links
        </h2>
        <FontAwesomeIcon icon={faLink} size="2xl" color="blue" />
      </div>
      <div className="mt-9">
        {links.map((link) => (
          <div className="my-4">
            {/* links */}
            <div className="w-[80%] m-auto bg-gray-100 shadow-2xl ">
              <Link
                to={`${link.path}`}
                className="flex justify-between md:p-7 p-3"
              >
                <span className="text-blue-500 text-lg md:text-2xl">
                  {link.name}
                </span>
                <FontAwesomeIcon icon={faLink} size="lg" color="blue" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
