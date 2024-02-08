import React from "react";
import video from "./assests/GOAI.mp4";
import poster from "./assests/poster.jpg";
import { Link } from "react-router-dom";

export default function ChurchEvents() {
  return (
    <div className={`text-textCol-secondary`}>
      <div>
        <p className="border-x-8 border-orange-600 text-orang-200 text-2xl lg:text-3xl my-7">
          Church Events
        </p>
        <span className="border-b-2 border-dashed border-greeny-70 py-1 italic">
          GOD OF ALL IMPOSSIBILITIES
        </span>
      </div>
      <div className="lg:grid grid-cols-3 lg:w-[80%] m-auto">
        <div className="col-span-2">
          <p className="text-xl my-4 px-4  lg:tracking-widest lg:font-semibold lg:leading-10 lg:mt-16">
            God of all impossibilities experieneced it first outing in october
            17, 2017 and it has since then maintain it status as a yearly event.
            First tittled God of Hannah, the program....
            <Link to="god_of_impossibilities">
              <span className="text-lg italic text-blue-600 hover:underline">
                More info & sermons
              </span>
            </Link>
          </p>
        </div>
        <div className=" lg:py-8 lg:ml-10">
          <video controls poster={poster} className="">
            <source src={video} type="video/mp4" />
            <source src={video} type="video/ogg" />
            <source src={video} type="video/webm" />
          </video>
        </div>
      </div>
    </div>
  );
}
