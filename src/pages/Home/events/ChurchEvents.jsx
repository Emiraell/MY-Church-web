import React from "react";
import video from "./assests/GOAI.mp4";
import poster from "./assests/poster.jpg";
import sky from "./assests/sky.png";
import post from "./assests/post.jpg";
import battle from "./assests/battle.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function ChurchEvents() {
  return (
    <div className={`text-textCol-secondary`}>
      <div>
        <p className="border-x-8 border-orange-600 text-orang-600 text-xl lg:text-2xl my-7">
          CHURCH EVENTS
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

      {/* <div
        className="pt-7 w-[100%] m-auto lg:h-[82vh] bg-cover bg-center bg-no-repeat bg-blend-multiply rounded-t-3xl bg-gray-800"
        style={{ backgroundImage: `url(${sky}) ` }}
      >
        <p className="text-emerald-500">
          {" "}
          <FontAwesomeIcon icon={faBook} color="lightGreen" />
          <span className="px-4 font-montserrat">OUR BLOGS</span>
        </p>
        <div className="  pt-10">
          <div className="relative">
            <div>
              <img src={battle} alt="" className="w-[100%] " />
            </div>
            <div className="bg-gray-100 absolute left-10 right-10 bottom-[-40px] z-10 ">
              <p className="pt-8 font-bold">YOUTH? The fierce battle</p>
              <p className="py-4">
                written by{" "}
                <span className="text-emerald-500 pl-5">Edwin Emmanuel</span>
              </p>
              <Link className="">
                <button className="bg-emerald-600 pt-2 px-5 text-gray-200 ">
                  READ
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-14">
          <Link>
            <span>📖📖📖</span>
            <button className="bg-emerald-600 pt-2 px-5 text-gray-200 mx-5">
              All Blogs
            </button>
          </Link>
          <span>📖📖📖</span>
        </div>
      </div> */}
    </div>
  );
}
