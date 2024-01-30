import React from "react";
import Message from "./Message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faLocationPin,
  faMapPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faInstagram,
  faWebflow,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import cloud from "../Header/assests/backgrounds/cloud.png";
import { database } from "../../configuration/Firebase";

export default function Footer() {
  return (
    <section
      className={`bg-greeny-500 text-gray-200 text-start bg-cover bg-center bg-no-repeat bg-blend-multiply`}
      style={{ backgroundImage: `url(${cloud})` }}
    >
      <div className={`flex-row pt-9`}>
        <div className="md:grid  md:grid-cols-2">
          <div>
            <div className="px-5 md:px-11">
              {/* contact div */}
              <div className="mb-4">
                <p className="border-l-2 border-purple-500 pl-2 tracking-wider text-xl md:text-2xl text-gray-300">
                  contact us
                </p>
              </div>

              <div className="tracking-wide">
                <div className="flex  items-center  my-2">
                  <div className="border-blue-800 border-2">
                    <FontAwesomeIcon
                      icon={faLocationPin}
                      size="lg"
                      color="blue"
                      className="p-2"
                    />
                  </div>

                  <div className="flex-row md:text-lg pl-5">
                    <p className="text-blue-500">
                      {/* tittle */}
                      Address
                    </p>
                    <p>
                      {/* infomation */}
                      Opp. makawala junction, keffi, Nasarawa State
                    </p>
                  </div>
                </div>

                <div className="flex  items-center  my-2">
                  <div className="border-blue-800 border-2">
                    <FontAwesomeIcon
                      icon={faPhone}
                      size="lg"
                      color="blue"
                      className="p-2"
                    />
                  </div>

                  <div className="flex-row md:text-lg pl-5">
                    <p className="text-blue-500">
                      {/* tittle */}
                      Phone Us
                    </p>
                    <p className="">
                      {/* infomation */}
                      +2348136553986
                    </p>
                  </div>
                </div>

                <div className="flex  items-center my-2">
                  <div className="border-blue-800 border-2">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="lg"
                      color="blue"
                      className="p-2"
                    />
                  </div>

                  <div className="flex-row md:text-lg pl-5">
                    <p className="text-blue-500">
                      {/* tittle */}
                      Email Us
                    </p>
                    <p>
                      {/* infomation */}
                      stPeters@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex  items-center my-2">
                  <div className="border-blue-800 border-2">
                    <FontAwesomeIcon
                      icon={faWebflow}
                      size="lg"
                      className="p-2"
                    />
                  </div>

                  <div className="flex-row md:text-lg pl-5">
                    <p className="text-blue-500">
                      {/* tittle */}
                      Website
                    </p>

                    {/* infomation */}
                    <a href="www.stpeters">
                      <p className="text-purple-400">www.stpeter.com</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:mx-11 mx-5 my-8">
              {/* socail media info */}
              <div>
                <p className="pb-4 tracking-wide text-xl md:text-2xl text-gray-300">
                  <span className="border-l-2 border-purple-500 pl-2">
                    Let's connect
                  </span>
                </p>
              </div>

              <div className="flex items-center">
                <a href="www.facebook.com ">
                  {" "}
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="h-7 px-5 text-blue-400 active:rotate-180 hover:opacity-75 transition-opacity duration-0.5"
                  />
                </a>

                <a href="www.facebook.com">
                  {" "}
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="h-7 text-red-400 active:rotate-180 hover:opacity-75 transition-opacity duration-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
          <Message database={database} />
        </div>

        <div className="text-center bg-greeny-500 p-4">
          <p className="text-xs md:text-lg text-red-100">
            (c)St peter's Anglican keffi 2024 | All right reserved
            <span className="block">
              Designed by and maintained by <a href="">Emirael</a> | the media
              department
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
