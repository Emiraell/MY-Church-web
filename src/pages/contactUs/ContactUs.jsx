import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/Header/Header";
import {
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import ChurchMap from "../../components/ChurchMap";
import MessageUs from "./MessageUs";
import { database } from "../../configuration/Firebase";

export default function ContactUs() {
  const [details, setDetails] = useState([
    {
      tittle: "Address",
      image: (
        <FontAwesomeIcon
          icon={faLocation}
          size="xl"
          color="green"
          className="p-2"
        />
      ),
      contents: ["Opposite Makwalla junction, Keffi, Nasarawa State"],
    },
    {
      tittle: "Phone",
      image: (
        <FontAwesomeIcon
          icon={faPhone}
          size="xl"
          color="green"
          className="p-2"
        />
      ),
      contents: ["+2348136553986", "+2348036912087"],
    },
    {
      tittle: "Email",
      image: (
        <FontAwesomeIcon
          icon={faEnvelope}
          size="xl"
          color="green"
          className="p-2"
        />
      ),
      contents: ["stPeters@gmail.com"],
    },
  ]);
  return (
    <div className=" text-center font-roboto">
      <Header page={"CONTACT US"} pageName={"Contact"} />
      <div className="mt-24 text-textCol-primary w-[90%] m-auto text-xl md:text-2xl lg:text-3xl ">
        <div className="">
          <h2 className="md:text-3xl text-2xl font-bold text-red-700 font-roboto pb-7">
            Get In Touch With Us
          </h2>
          <span>
            Hearing from you would bring us nothing but joy! Please do not
            hesitate to contact us if you have any questions, concerns, or ideas
            for how we can work together to move the body and message of Christ
            forward.
          </span>
        </div>

        <div className=" mt-11 lg:grid lg:grid-cols-2 gap-3">
          <div>
            <p className=" text-start pl-5 my-5 font-bold text-2xl md:text-3xl text-red-700">
              Contact Details
            </p>
            {details.map((detail) => (
              <div className="py-2">
                <div className="flex items-center px-5 pt-4">
                  <div className="bg-gray-300 text-xl rounded-full w-11 h-11">
                    {detail.image}
                  </div>
                  <span className="px-3">{detail.tittle}</span>
                </div>
                {detail.contents.map((content) => (
                  <p className="pl-8 pt-3 text-left md:text-lg">{content}</p>
                ))}
              </div>
            ))}
            <div>
              {/* connect us */}
              <p className="mt-14 text-start pl-5 my-5 font-roboto font-bold text-2xl md:text-3xl text-red-700">
                Connect With Us
              </p>
              <div className="text-start pl-7 py-3 ">
                {/* socail medias */}
                <a href="www.facebook.com">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="h-10 text-blue-500 hover:text-blue-700"
                  />
                </a>
                <a href="www.facebook.com">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="h-10 text-red-500 px-9 hover:text-red-700"
                  />
                </a>
              </div>
            </div>
          </div>
          <MessageUs database={database} />
          {}
        </div>
      </div>
      <ChurchMap />
      <div className="text-center bg-greeny-500 p-4">
        <p className="text-xs md:text-lg text-red-100">
          (c)St peter's Anglican keffi 2024 | All right reserved
          <span className="block">
            Designed by and maintained by{" "}
            <a href="" className=" text-blue-200">
              Emirael
            </a>{" "}
            | the media department
          </span>
        </p>
      </div>
    </div>
  );
}
