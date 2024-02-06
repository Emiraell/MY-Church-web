import { useState } from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import church from "./assests/churchess.png";
import {
  faCalendar,
  faChurch,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import UsefulLinks from "../../components/UsefulLinks";
import Footer from "../../components/footer/Footer";

export default function AboutUs() {
  return (
    <div className=" text-textCol-secondary bg-gray-50 text-center font-montserrat">
      <Header page={"About Us"} pageName={"About Us"} />
      <div className="mt-14 ">
        <div className="lg:w-[70%] m-auto w-[90%] shadow-lg rounded-t-xl ">
          <div
            className=" rounded-xl font-lato font-bold text-emerald-200 pt-5 bg-cover 
            bg-center md:h-[30vh] h-[20vh] bg-blend-multiply bg-orange-700"
            style={{
              backgroundImage: `url(${church})`,
            }}
          >
            <p className="font-bold text-2xl font-roboto md:text-3xl text-emerald-300 mt-14 md:mt-20">
              {" "}
              <FontAwesomeIcon icon={faChurch} spin />
              <span className="px-5">About Us</span>
              <FontAwesomeIcon icon={faChurch} spin />
            </p>
          </div>
          <div className="px-5 leading-8 tracking-normal lg:tracking-wider bg-gray-200 py-10 text-lg lg:text-2xl">
            <p className=" text-xl  lg:text-2xl">
              <span className="font-semibold text-4xl text-orange-600">S</span>t
              peter's Anglican Church Keffi (SPACK), Nasarawa State is one out
              of the 20 archdeaconry within the Diocese of Lafia overseen by
              <span className="font-poppins italic text-xl">
                Rt. Rev. Robinson Adeyemi.
              </span>
              St peter's anglican church is the administrative heaquater of all
              the parishes and churches under the keffi archdecaonry. St peter's
              as an achdeaconry houses two Parishes and precise over about 8
              churches under it where the ministry and message of christ is
              attended to with utmost commitment and zeal. As an archdeaconry,
              we love to pray together in faith and worship together in
              fellowship. We care about the church and it members as a family.
              It is a place where you can belong wherever you are on the journey
              of faith.
            </p>
          </div>
        </div>

        <div className="bg-greeny-600 my-20 text-gray-100">
          <p className="pt-5 text-emerald-300 text-xl">CHURCH SERVICES</p>
          <div className="lg:grid lg:grid-cols-2 pb-10">
            <div className="shadown-3xl bg-green-900 w-[90%] m-auto mt-5">
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

            <div className="shadown-3xl bg-green-900 w-[90%] m-auto mt-5">
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
                  <FontAwesomeIcon icon={faClock} size="xl" color="lightblue" />
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
        {/* <UsefulLinks links={links} /> */}
        <Footer />
      </div>
    </div>
  );
}
