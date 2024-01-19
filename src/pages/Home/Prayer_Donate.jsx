import prayingHand from "./assets/backgrounds/prayingHands.png";
import churchOutside from "./assets/backgrounds/churchImage.jpg";

export default function Prayer_Donate() {
  return (
    <div className="font-montserrat md:grid lg:grid-cols-2 text-textCol-secondary text-center">
      <div
        className="relative flex-col justify-between h-[50vh] w-[100%] m-auto bg-center bg-cover bg-no-repeat bg-blend-multiply bg-orange-700"
        style={{ backgroundImage: `url(${prayingHand})` }}
      >
        <div className="absolute left-0 right-0 top-5 ">
          <p className="text-green-400 ">
            {" "}
            <span>🙏🙏 </span> Ebenezer, Our Stone of Help <span> 🙏🙏</span>
          </p>
        </div>
        <div className="top-[40%]  absolute">
          <p className="text-gray-300 px-10 text-xs md:text-sm">
            And this is the confidence that we have toward him, that if we ask
            anything <span className="text-blue-400">according</span> to his He
            hears us
          </p>
          <span className="text-emerald-500">1 John 4 vs 14</span>
        </div>
        <div className="absolute left-0 right-0 bottom-5">
          <button className="mx-3 bg-green-400 rounded-full border-2 text-white py-2 px-7">
            Request A <span className="block">Prayer</span>
          </button>{" "}
        </div>
      </div>

      <div
        className="relative flex-col justify-between h-[50vh] w-[100%] m-auto bg-center bg-cover bg-no-repeat bg-blend-multiply bg-gray-800"
        style={{ backgroundImage: `url(${churchOutside})` }}
      >
        <div className="absolute left-0 right-0 top-5 ">
          <p className="text-orange-500 ">
            {" "}
            <span>⛪ </span> We are a church on a mission<span> ⛪</span>
          </p>
        </div>
        <div className="top-[40%]  absolute">
          <p className="text-gray-300 px-10 text-xs md:text-sm leading-5 tracking-wider">
            St peter's Anglican Church is a church that's at the forefront of
            helping the needy and also know for impactful project
          </p>
          <span className="text-orange-400">with you we can do better</span>
        </div>
        <div className="absolute left-0 right-0 bottom-5">
          <button className="mx-3 bg-orange-500 rounded-full text-white py-4 px-7 border-2">
            Donate <span className="block"></span>
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
