import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import news from "./assests/menC.jpg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function BlogsNews() {
  return (
    <div className=" text-textCol-primary mt-28 w-[95%] m-auto">
      <p className="text-xl font-semibold italic border-x-8 border-orange-600">
        OUR TOP STORIES AND <span className=" text-orange-500">BLOGS</span>
      </p>
      <div className="shadow-md py-5">
        <div className="mt-10  lg:grid grid-cols-3 gap-5">
          <motion.div
            initial={{ y: 400, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative p-3">
              <img src={news} alt="news" />
              <div className="absolute top-0 bg-greeny-200 text-gray-200">
                <p className="p-3">25 JAN</p>
                <p className=" bg-gray-200 text-greeny-200">2024</p>
              </div>
            </div>
            <div className="py-3">
              <p>ELECTION OF THE NEW PCC MEMBERS</p>
              <p className="p-3 italic">
                Earlier on, each group in the church nominated few persons to
                sit for them in the planning of the progress of the church
              </p>
              <div className="flex justify-between items-center p-3 border border-green-300 mx-5 mt-4">
                <p>
                  <span>By:</span> Happinness ifeuze
                </p>
                <p className=" cursor-pointer px-2">
                  Read More
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" animate-pulse text-red-800 text-sm px-2"
                  />
                </p>
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
              <img src={news} alt="" />
              <div className="absolute top-0 bg-greeny-200 text-gray-200">
                <p className="p-3">25 JAN</p>
                <p className=" bg-gray-200 text-greeny-200">2024</p>
              </div>
            </div>
            <div className="py-3">
              <p>ELECTION OF THE NEW PCC MEMBERS</p>
              <p className="p-3 italic">
                Earlier on, each group in the church nominated few persons to
                sit for them in the planning of the progress of the church
              </p>
              <div className="flex justify-between items-center p-3 border border-green-300 mx-5 mt-4">
                <p>
                  <span>By:</span> Happinness ifeuze
                </p>
                <p className=" cursor-pointer">
                  Read More
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" animate-pulse text-red-800 text-sm"
                  />
                </p>
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
              <img src={news} alt="" />
              <div className="absolute top-0 bg-greeny-200 text-gray-200">
                <p className="p-3">25 JAN</p>
                <p className=" bg-gray-200 text-greeny-200">2024</p>
              </div>
            </div>
            <div className="py-3">
              <p>ELECTION OF THE NEW PCC MEMBERS</p>
              <p className="p-3 italic">
                Earlier on, each group in the church nominated few persons to
                sit for them in the planning of the progress of the church
              </p>
              <div className="flex justify-between items-center p-3 border border-green-300 mx-5 mt-4">
                <p>
                  <span>By:</span> Happinness ifeuze
                </p>
                <p className=" cursor-pointer">
                  Read More
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" animate-pulse text-red-800 text-sm"
                  />
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <Link>
          <span className="text-greeny-500 animate-pulse bg-gray-200 p-2 rounded cursor-pointer">
            See more stories{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              className=" text-red-800 text-sm"
            />
          </span>
        </Link>
      </div>
    </div>
  );
}
