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
    <div
      className={`text-textCol-secondary text-center lg:grid gap-5 lg:grid-cols-2`}
    >
      <div
        className=" bg-gray-950 bg-center bg-cover rounded-t-3xl lg:h-[82vh] bg-no-repeat bg-blend-multiply pt-10 "
        style={{ backgroundImage: `url(${poster})` }}
      >
        <div className="text-emerald-500 font-montserrat px-10">
          <FontAwesomeIcon icon={faCalendar} size="lg" color="lightGreen" />{" "}
          <span className="px-5 font-montserrat">CHURCH EVENT</span>
          <FontAwesomeIcon icon={faCalendar} size="lg" color="lightGreen" />
        </div>
        <div className="text-red-400 font-rochester py-4 text-2xl">
          God of all impossibilities
        </div>

        <div>
          <div>
            <video
              className=" h-[30vh] w-[900px] "
              controls
              src={`${video}`}
              poster={`${post}`}
            ></video>
          </div>
          <p className="py-6 text-gray-200 px-7">
            An event expressed it's first outing in october 2017 is one that
            Heaven and it host has used used to prove the finish work of Christ
            and make it evidential in the lives of St peter and keffi at large.
            First tittled God of Hannah....
          </p>
        </div>
        <p className="pt-5">
          <button className="bg-emerald-500 py-3 text-gray-100 rounded-full px-10 text-lg">
            more info and sermons
          </button>
        </p>
      </div>

      <div
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
      </div>
    </div>
  );
}
