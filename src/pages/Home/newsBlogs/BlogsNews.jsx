import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pcc from "./assests/planning.jpg";
import days from "./assests/21days.jpg";
import building from "./assests/building.jpg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function BlogsNews() {
  return (
    <div className=" text-textCol-primary mt-28 w-[95%] m-auto text-lg">
      <p className="md:text-3xl text-2xl  italic border-x-8 border-orange-600">
        Our recent stories <span className=" text-orang-200">& blogs</span>
      </p>
      <div className="shadow-md py-5">
        <div className="mt-10  lg:grid grid-cols-3 gap-5">
          <motion.div
            initial={{ y: 380, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative p-3">
              <img
                src={pcc}
                alt="news"
                className="h-[25vh] w-full object-cover"
              />
              <div className="absolute top-3 bg-greeny-200 text-gray-200">
                <p className="p-3">22 JAN</p>
                <p className=" bg-gray-200 text-greeny-200">2024</p>
              </div>
            </div>
            <div className="py-3">
              <p className="font-semibold">Nomination of new pcc members</p>
              <p className="p-3 italic">
                In recognition of its commitment to inclusive governance and
                community involvement, Ven. Dr Luka Allu JP led the
                nomination.....
              </p>
              <div className="flex justify-between items-center p-2 border border-green-300 mx-3 my-4">
                <p>
                  <span>By:</span> Edwin Emmanuel
                </p>
                <Link
                  to="/my-church-web/news/1"
                  className=" cursor-pointer px-2"
                >
                  Read More
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" animate-pulse text-red-800 text-sm px-2"
                  />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={`hidden lg:block`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative p-3">
              <img src={days} alt="" className="h-[25vh] w-full object-cover" />
              <div className="absolute top-3 bg-greeny-200 text-gray-200">
                <p className="p-3">22 JAN</p>
                <p className=" bg-gray-200 text-greeny-200">2024</p>
              </div>
            </div>
            <div className="py-3">
              <p className="font-semibold">
                End of 21days fasting and prayer @ St Peter's
              </p>
              <p className="p-3 italic">
                The church bids a fond farewell to its annual 21-day fast and
                prayer of beginning the year with Christ, St...
              </p>
              <div className="flex justify-between items-center p-2 border border-green-300 mx-3 my-4">
                <p>
                  <span>By:</span> Edwin Emmanuel
                </p>
                <Link to="/my-church-web/news/2" className=" cursor-pointer">
                  Read More
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" animate-pulse text-red-800 text-sm"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            className={`hidden lg:block `}
            initial={{ y: -400, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative p-3">
              <img
                src={building}
                alt="building"
                className="h-[25vh] w-full object-cover"
              />
              <div className="absolute top-3 bg-greeny-200 text-gray-200">
                <p className="p-3">18 JAN</p>
                <p className=" bg-gray-200 text-greeny-200">2024</p>
              </div>
            </div>
            <div className="py-3">
              <p className="font-semibold">
                Commencement of new vicarage building @ st Barnabas
              </p>
              <p className="p-3 italic">
                St barnabas anglican church, keffi has started the building of a
                new vicarage project that's...
              </p>
              <div className="flex justify-between items-center p-2 border border-green-300 mx-3 my-4">
                <p>
                  <span>By:</span> Edwin Emmanuel
                </p>
                <Link to="/my-church-web/news/3" className=" cursor-pointer">
                  Read More
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" animate-pulse text-red-800 text-sm"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        <Link to="/my-church-web/library">
          <span
            className="text-greeny-500  border border-greeny-500 p-2 
          rounded-full px-7 cursor-pointer"
          >
            See more stories{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              className=" text-red-800 text-lg animate-pulse"
            />
          </span>
        </Link>
      </div>
    </div>
  );
}
