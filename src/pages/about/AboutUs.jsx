import { useState } from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faLink,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import UsefulLinks from "../../components/UsefulLinks";
import Footer from "../../components/footer/Footer";

export default function AboutUs() {
  const [isHomePage, setIsHomePage] = useState(false);
  const [page, setPage] = useState("ABOUT US");
  const [links, setLinks] = useState([
    { name: "Vision & Mission", path: "vision" },
    { name: "Church History", path: "history" },
    { name: "Churches", path: "churches" },
  ]);

  return (
    <div className=" text-textCol-secondary bg-gray-200 text-center font-montserrat">
      <Header isHomePage={isHomePage} page={page} />
      <div className="mt-14 ">
        <div className="lg:w-[70%] m-auto ">
          <p className="text-emerald-800 font-lato text-2xl">ABOUT US</p>
          <div className="px-5 leading-8 tracking-normal lg:tracking-wider pt-10 text-lg lg:text-2xl">
            <p className="">
              St peter's Anglican church is one of the 20 archdeaconry within
              the Lafia Dicoces overseen by Rt Rev Robinson Adeyemi. St peter's
              anglican church, keffi is the administrative heaquater of all the
              parishes and churches keffi archdecaonry. St peter's as an
              achdeaconry houses two{" "}
              <Link className="text-orange-500 cursor-pointer">Parishes</Link>{" "}
              and has about 6 churches under it where the ministry and message
              of christ is carried out effictively. As an archdeaconry, we love
              to pray together in faith and play together in fellowship. We care
              about family life, our memebers and people in need. It is a place
              where you can belong wherever you are on the journey of faith.
            </p>
          </div>
        </div>

        <div className="bg-blue-950 mt-20 text-gray-100">
          <p className="pt-5 text-emerald-300 text-xl">CHURCH SERVICES</p>
          <div className="lg:grid lg:grid-cols-2 pb-10">
            <div className="shadown-3xl bg-blue-900 w-[90%] m-auto mt-5">
              <div className="py-5">
                <FontAwesomeIcon
                  icon={faCalendar}
                  size="xl"
                  color="lightblue"
                />{" "}
                <span className="font-bold text-lg pl-5">Sunday Services</span>
              </div>
              <div>
                <p className="py-5 text-xl">First Service</p>
                <div>
                  <FontAwesomeIcon icon={faClock} size="xl" color="lightblue" />{" "}
                  <span className="text-lg pl-5">6:00AM</span>
                </div>
              </div>
              <div className="pt-6">
                <p className="py-5 text-xl">Second Service</p>
                <div className="pb-5">
                  <FontAwesomeIcon icon={faClock} size="xl" color="lightblue" />{" "}
                  <span className="text-lg pl-5">8:00AM</span>
                </div>
              </div>
            </div>

            <div className="shadown-3xl bg-blue-900 w-[90%] m-auto mt-5">
              <div className="py-5">
                <FontAwesomeIcon
                  icon={faCalendar}
                  size="xl"
                  color="lightblue"
                />{" "}
                <span className="font-bold text-lg pl-5">
                  Mid Week Services
                </span>
              </div>
              <div>
                <p className="py-5 text-xl">First Service</p>
                <div>
                  <FontAwesomeIcon icon={faClock} size="xl" color="lightblue" />{" "}
                  <span className="text-lg pl-5">5:00pm</span>
                </div>
              </div>
              <div className="pt-6">
                <p className="py-5 text-xl">Second Service</p>
                <div className="pb-5">
                  <FontAwesomeIcon icon={faClock} size="xl" color="lightblue" />{" "}
                  <span className="text-lg pl-5">6:00pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <UsefulLinks links={links} />
        <Footer />
      </div>
    </div>
  );
}
