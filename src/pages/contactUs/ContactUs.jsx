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
import Footer from "../../components/footer/Footer";
import MessageUs from "./MessageUs";
import { database } from "../../configuration/Firebase";

export default function ContactUs() {
  const [isHomePage, setIsHomePage] = useState(false);

  const [page, setPage] = useState("CONTACT");

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
    <div className="text-gray-200 bg-gray-200 text-center font-montserrat">
      <Header isHomePage={isHomePage} page={page} />
      <div className="mt-24  text-textCol-primary w-[90%] m-auto ">
        <div className="">
          <h2 className="md:text-3xl text-2xl font-bold text-red-700 font-roboto pb-7">
            Get In Touch With Us
          </h2>
          <span className="text-lg">
            Hearing from you would nothing sort of joy to us! Please don't
            hesistate to reach out to us if you have any questions, concerns, or
            ideas for how to work together to move the the body and message of
            Christ forward
          </span>
        </div>

        <div className=" mt-11 lg:grid lg:grid-cols-2 gap-3">
          <div className=" ">
            <p className=" text-start pl-5 my-5 font-roboto font-bold text-2xl md:text-3xl text-red-700">
              Contact Details
            </p>
            {details.map((detail) => (
              <div className="py-2">
                <div className="flex items-center px-5 pt-4">
                  <div className="bg-gray-300 rounded-full w-11 h-11">
                    {detail.image}
                  </div>
                  <span className="px-3 text-lg md:text-2xl font-roboto">
                    {detail.tittle}
                  </span>
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
                    className="h-12 text-blue-700"
                  />
                </a>
                <a href="www.facebook.com">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="h-12 text-red-600 px-9"
                  />
                </a>
                <a href="www.facebook.com">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="h-12 text-purple-900"
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
      <Footer />
    </div>
  );
}
