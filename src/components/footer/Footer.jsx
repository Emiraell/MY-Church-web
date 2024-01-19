import React from "react";
import Message from "./Message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faInstagram,
  faWebflow,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer({
  facebook,
  sky,
  envelope,
  web,
  location,
  instagram,
  youtube,
  phone,
}) {
  return (
    <section
      className={`bg-gray-900 text-gray-200 bg-cover bg-center bg-no-repeat bg-blend-multiply`}
      style={{ backgroundImage: `url(${sky})` }}
    >
      <div className={`flex-row pt-9`}>
        <div className="md:flex md:justify-around">
          <div>
            <div className="px-5 md:px-11">
              {/* contact div */}
              <div className="mb-4">
                <p className="border-l-2 border-purple-500 pl-2 tracking-wide text-lg md:text-2xl text-gray-300">
                  contact us
                </p>
              </div>

              <div className="tracking-wide">
                <div className="flex  items-center  my-2">
                  <div className="border-blue-800 border-2">
                    <FontAwesomeIcon
                      icon={faLocation}
                      size="lg"
                      color="blue"
                      className="p-2"
                    />
                  </div>

                  <div className="flex-row text-sm md:text-lg pl-5">
                    <p className="text-gray-500">
                      {/* tittle */}
                      Address
                    </p>
                    <p>
                      {/* infomation */}
                      Oppo makawala junction, keffi, Nasarawa State
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

                  <div className="flex-row text-sm md:text-lg pl-5">
                    <p className="text-gray-500">
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

                  <div className="flex-row text-sm md:text-lg pl-5">
                    <p className="text-gray-500">
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

                  <div className="flex-row text-sm md:text-lg pl-5">
                    <p className="text-gray-500">
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

            <div className="md:mx-11 mx-5 my-5">
              {/* socail media info */}
              <div>
                <p className="pb-4 border-l-2 border-purple-500 pl-2 tracking-wide text-lg md:text-2xl text-gray-300">
                  Follow us
                </p>
              </div>

              <div className="flex justify-evenly w-[200px]">
                <a href="www.facebook.com ">
                  {" "}
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="2xl"
                    color="lightBlue"
                  />
                </a>

                <a href="www.facebook.com">
                  {" "}
                  <FontAwesomeIcon icon={faYoutube} color="red" size="2xl" />
                </a>

                <a href="www.facebook.com">
                  {" "}
                  <FontAwesomeIcon
                    icon={faInstagram}
                    color="purple"
                    size="2xl"
                  />
                </a>
              </div>
            </div>
          </div>
          <Message />{" "}
        </div>

        <div className="text-center bg-gray-900 ">
          <p className="text-sm py-3 text-red-100">
            (c)St peter's Anglican keffi 2023 | All right reserved
            <span className="block">
              Designed by and maintained by emiraelDev | the media department
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
