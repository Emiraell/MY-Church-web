import prayingHand from "./assets/backgrounds/prayingHands.png";
import churchOutside from "./assets/backgrounds/churchImage.jpg";
import { useEffect, useRef, useState } from "react";

export default function Prayer_Donate() {
  const donateRef = useRef();
  const prayerRef = useRef();

  const [donateIntersected, setDonateIntersected] = useState(false);
  const [prayerIntersected, setPrayerIntersected] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setDonateIntersected(entry.isIntersecting);
    });
    observer.observe(donateRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setPrayerIntersected(entry.isIntersecting);
    });
    observer.observe(prayerRef.current);
  }, []);
  return (
    <div className="font-montserrat md:grid lg:grid-cols-2 tracking-wider text-lg text-textCol-secondary text-center">
      <div
        ref={donateRef}
        className={`relative flex-col justify-between h-[50vh] opacity-100 -translate-x-full 
        w-[100%] m-auto bg-center bg-cover bg-no-repeat bg-blend-multiply bg-orange-700  ${
          donateIntersected && "opacity-100 translate-x-0"
        } transition-all duration-0.5 ease-linear`}
        style={{
          backgroundImage: `url(${prayingHand})`,
        }}
      >
        <div className="absolute left-0 right-0 top-5 "></div>
        <div className="top-[20%] absolute">
          <p className="text-gray-300 px-10">
            And this is the confidence that we have toward him, that if we ask
            anything according to his He hears us
          </p>
          <span className="text-emerald-500">1 John 4 vs 14</span>
        </div>
        <div className="absolute left-0 right-0 bottom-10">
          <button className="mx-3 bg-greeny-300 rounded-full border-2 text-white py-2 px-7">
            Request A <span className="block">Prayer</span>
          </button>{" "}
        </div>
      </div>

      <div
        ref={prayerRef}
        className={`relative flex-col justify-between h-[50vh] w-[100%] opacity-0 translate-x-full 
        m-auto bg-center bg-cover bg-no-repeat bg-blend-multiply bg-gray-700 ${
          prayerIntersected && "opacity-100 -translate-x-0"
        } transition-all duration-0.5 ease-linear`}
        style={{ backgroundImage: `url(${churchOutside})` }}
      >
        <div className="absolute left-0 right-0 top-5 "></div>
        <div className="top-[20%]  absolute">
          <p className="text-gray-300 px-10 leading-5 tracking-wider">
            St peter's Anglican Church is a church that's at the forefront of
            helping the needy and also know for impactful project
          </p>
          <span className="text-orange-400">with you we can do better</span>
        </div>
        <div className="absolute left-0 right-0 bottom-10">
          <button className="mx-3 bg-orange-500 rounded-full text-white py-4 px-7 border-2">
            Donate <span className="block"></span>
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
