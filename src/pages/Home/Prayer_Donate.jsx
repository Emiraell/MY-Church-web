import prayingHand from "./assets/backgrounds/prayingHands.png";
import churchOutside from "./assets/backgrounds/churchImage.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Prayer_Donate() {
  return (
    <div className="font-montserrat  md:grid lg:grid-cols-2 tracking-wider text-lg text-textCol-secondary text-center">
      <motion.div
        initial={{ opacity: 0, y: 400 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        className={` relative flex-col justify-between h-[50vh]  
        w-[100%] m-auto bg-center bg-cover bg-no-repeat bg-blend-multiply bg-orange-700 `}
        style={{
          backgroundImage: `url(${prayingHand})`,
        }}
      >
        <div className="absolute w-[100%] bottom-1/2">
          <p className="text-gray-300 px-10">
            And this is the confidence that we have toward him, that if we ask
            anything according to his He hears us
          </p>
          <span className="text-emerald-500">1 John 4 vs 14</span>
        </div>
        <div className="absolute bottom-10 w-[100%]">
          <Link
            to="prayer"
            className="mx-3 border-greeny-50 text-greeny-50 rounded-full border-2 py-4 px-7
            hover:border-none hover:bg-greeny-50 hover:text-orange-50 transition-all ease-in-out duration-1"
          >
            Request A Prayer
          </Link>{" "}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 400 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        className={`flex-col justify-between h-[50vh] w-[100%] relative  
        m-auto bg-center bg-cover bg-no-repeat bg-blend-multiply bg-gray-700`}
        style={{ backgroundImage: `url(${churchOutside})` }}
      >
        <div className=""></div>
        <div className="absolute w-[100%] bottom-1/2">
          <p className="text-orange-400 tracking-wider text-3xl font-poppins">
            Become a covenant seeder
          </p>
        </div>
        <div className="absolute bottom-10 w-[100%]">
          <Link
            to="donate"
            className="mx-3 border-orange-400 text-orange-400 rounded-full
           hover:border-none hover:bg-orange-400 hover:text-orange-50 transition-all ease-in-out duration-1 border-2 py-4 px-7"
          >
            Donate
          </Link>{" "}
        </div>
      </motion.div>
    </div>
  );
}
