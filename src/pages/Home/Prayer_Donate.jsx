import prayingHand from "./assets/backgrounds/prayingHands.png";
import churchOutside from "./assets/backgrounds/churchImage.jpg";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Prayer_Donate() {
  const donateRef = useRef();
  const prayerRef = useRef();

  const [donateIntersected, setDonateIntersected] = useState(false);
  const [prayerIntersected, setPrayerIntersected] = useState(false);

  let donateObserver;
  let prayerObserver;

  useEffect(() => {
    donateObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setDonateIntersected(entry.isIntersecting);

      // console.log("donate", donateIntersected);
    });
    donateObserver.observe(donateRef.current);

    // prayerObserver = new IntersectionObserver((entries) => {
    //   const entry = entries[0];
    //   setPrayerIntersected(entry.isIntersecting);
    //   console.log(prayerIntersected);
    // });
    // prayerObserver.observe(prayerRef.current);

    return () => {
      // donateRef.current.forEach((ref) => {
      //   if (ref.current) {
      //     donateObserver.unobserve(ref.current);
      //   }
      // });
    };
  }, []);

  return (
    <div className="font-montserrat md:grid lg:grid-cols-2 tracking-wider text-lg text-textCol-secondary text-center">
      <div
        className={`relative flex-col justify-between h-[50vh]  
        w-[100%] m-auto bg-center bg-cover bg-no-repeat bg-blend-multiply bg-orange-700  ${
          prayerIntersected
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full motion-reduce:transition-none"
        } transition-all duration-0.5 ease-linear `}
        style={{
          backgroundImage: `url(${prayingHand})`,
        }}
      >
        <div className="top-[20%] absolute">
          <p className="text-gray-300 px-10" ref={prayerRef}>
            And this is the confidence that we have toward him, that if we ask
            anything according to his He hears us
          </p>
          <span className="text-emerald-500">1 John 4 vs 14</span>
        </div>
        <div className="absolute left-0 right-0 bottom-10">
          <Link
            to="prayer"
            className="mx-3 border-greeny-50 text-greeny-50 rounded-full border-2 py-4 px-7
            hover:border-none hover:bg-greeny-50 hover:text-orange-50 transition-all ease-in-out duration-1"
          >
            Request A Prayer
          </Link>{" "}
        </div>
      </div>

      <div
        ref={donateRef}
        className={`relative flex-col justify-between h-[50vh] w-[100%] opacity-0 translate-y-full 
        m-auto bg-center bg-cover bg-no-repeat bg-blend-multiply bg-gray-700 ${
          donateIntersected && "opacity-100 -translate-y-0"
        } transition-all duration-0.5 ease-linear`}
        style={{ backgroundImage: `url(${churchOutside})` }}
      >
        <div className="absolute left-0 right-0 top-5 "></div>
        <div className="top-[20%]  absolute">
          <p className="text-orange-400 tracking-wider text-3xl font-poppins">
            Become a covenant seeder
          </p>
        </div>
        <div className="absolute left-0 right-0 bottom-10">
          <Link
            to="donate"
            className="mx-3 border-orange-400 text-orange-400 rounded-full
           hover:border-none hover:bg-orange-400 hover:text-orange-50 transition-all ease-in-out duration-1 border-2 py-4 px-7"
          >
            Donate
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}
