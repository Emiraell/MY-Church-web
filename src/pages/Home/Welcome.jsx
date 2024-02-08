import bishop from "./assets/bishop.png";
import ChurchStat from "./ChurchStat";

export default function Welcome() {
  return (
    <div className="text-textCol-secondary py-5 xl:w-[90%] xl:m-auto">
      <p className="py-16 font-rochester text-2xl md:text-4xl tracking-widest">
        Our Church, Our Home
      </p>
      <div className=" shadow-sm">
        {/* Welcome section */}
        <div className="w-[92%]  m-auto lg:grid gap-10 lg:grid-cols-2 xl:grid-cols-3 lg:px-2  ">
          <div
            className="relative h-[50vh] rounded-t-3xl  bg-gray-200 background"
            style={{ backgroundImage: `url(${bishop})` }}
          >
            <div
              className={`text-gray-100 absolute bottom-[50%] w-[100%]`}
            ></div>
            <div className="absolute text-gray-100 w-[100%] bottom-0 bg-gray-900 py-1">
              <p className=" tracking-wide text-xl">
                Rt. Rev. Robinson Adeyemi
              </p>
              <span className=" text-blue-400">Bishop of Lafia Diocese </span>
            </div>
          </div>
          <p
            className="p-4  xl:col-span-2 lg:col-span-1 lg:text-2xl text-xl mt-5 lg:mt-0 leading-8 
          lg:tracking-widest lg:leading-10  xl:pt-20  text-gray-900"
          >
            <span className="text-6xl font-bold text-red-600 font-rochester">
              P
            </span>
            leasurable greetings and welcome to the official website of st
            peter's anglican church keffi, nasarawa state, a place were Jesus
            lives. We do hope this website serves your need during this visit
            and as you encounter our Archdeaconry via this medium, we pray and
            hope you also encounter it with your physical presence.
          </p>
        </div>
      </div>
      {/* church stat component */}
      <ChurchStat />
    </div>
  );
}
