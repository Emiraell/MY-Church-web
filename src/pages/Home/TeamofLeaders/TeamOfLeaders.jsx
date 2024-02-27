import luka from "./assests/luka.jpg";
import okafor from "./assests/okafor.jpg";
import bishop from "./assests/bishop.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function TeamOfLeaders() {
  const leaders = [
    {
      name: "Rt. Rev Robinson Adeyemi",
      church: "Lafia Diocese",
      position: "The Bishop",
      image: bishop,
    },
    {
      name: "Ven. Dr Luka B. Allu J.P",
      church: "St Peter's Anglican Church, Keffi",
      position: "Vicar / supervising priest",
      image: luka,
    },
    {
      name: "Rev Can Josiah Okafor",
      church: "St Barnabas Anglican Church Keffi",
      position: "Vicar",
      image: okafor,
    },
  ];

  return (
    <div className=" font-lato w-[95%] m-auto text-textCol-secondary my-20">
      <div className=" m-auto shadow-xl p-2">
        <p className="text-2xl md:text-3xl text-orang-200 ">
          <span className="border-b-2 pb-2 border-dashed border-greeny-100">
            Leadership
          </span>
        </p>
        <div className="lg:grid grid-cols-3 gap-4">
          {leaders.map((leader, index) => (
            <motion.div
              initial={{ rotate: 180, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className={` mt-10 col-span-1 ${index > 0 && "hidden"} lg:block`}
              key={index}
            >
              <div
                className={`h-[45vh] background rounded-t-lg border-b-8 
                rounded-b-xl border-orange-500 bg-gray-200 bg-blend-multiply`}
                style={{ backgroundImage: `url(${leader.image})` }}
              ></div>

              <div className="py-5 -mt-2">
                <p className=" text-gray-700 font-semibold text">
                  {leader.name}
                </p>
                <span className="block text-lg py-1">{leader.position}</span>
                <p className="text-xl text-gray-700">{leader.church}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <Link to="/my-church-web/officials">
          <button
            className="my-5 bg-greeny-300 hover:text-greeny-300 hover:border 
          hover:bg-gray-100 rounded w-64 duration-0.5 transition-all ease-in text-gray-200 py-3 text-xl border-greeny-300"
          >
            see all
          </button>
        </Link>
      </div>
    </div>
  );
}
