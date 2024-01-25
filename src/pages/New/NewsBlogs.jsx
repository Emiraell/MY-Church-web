import React, { useState } from "react";
import Header from "../../components/Header/Header";
import back from "./assests/Church.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import data from "./Data";

export default function NewsBlogs() {
  const { id } = useParams();
  const [showing, setShowing] = useState({ news: true, blogs: false });

  return (
    <div className="bg-gray-200">
      <Header page={"CHURCH NEWS & BLOGS"} />
      <div className="my-16 w-[95%] lg:[70%] m-auto text-center text-textCol-secondary">
        <div className="flex justify-evenly text-xl bg-gray-100 p-3  lg:text-2xl font-bold font-lato tracking-wide">
          <h3
            className=" border-r-4 pr-6 "
            onClick={() => setShowing({ news: true, blogs: false })}
          >
            Church News
          </h3>
          <h3 onClick={() => setShowing({ news: false, blogs: true })}>
            Blogs
          </h3>
        </div>
        <div className="mt-10">
          <div className={`${!showing.news && "hidden"}`}>
            {" "}
            <span className=" font-rochester text-emerald-600">
              NEWS UPDATE
            </span>
            <div className="w-[95%] m-auto  my-10 lg:grid grid-cols-2 gap-7">
              {data[0].map((info) => (
                <Link
                  to={`/news/${info.id}`}
                  className=" bg-slate-100 shadow-lg p-3 col-span-1 mb-10 lg:mb-0"
                >
                  <div className="relative">
                    <img src={info.image} alt="" className="w-[100%]" />
                    <div className="absolute top-0 bg-green-600 text-xl">
                      <p className="font-bold text-gray-100 p-5 text-2xl font-montserrat ">
                        {info.date.day}
                      </p>{" "}
                      <p className="bg-gray-100 p-1 tracking-widest">
                        {info.date.month}
                      </p>
                    </div>
                  </div>
                  <div className="py-3">
                    <p className=" font-semibold pt-2">{info.title}</p>
                    <p className="my-3">
                      Read More{" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="h-3 animate-pulse text-red-600"
                      />
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className={`${!showing.blogs && "hidden"}`}>
            BLOGS
            {data[1].map((blog) => (
              <Link
                to={`/news/${blog.id}`}
                className="w-[95%] m-auto shadow-lg my-10 bg-slate-100 p-3"
              >
                <div
                  className="relative bg-center bg-cover bg-no-repeat bg-blend-multiply bg-orange-200"
                  style={{ backgroundImage: `url(${back})` }}
                >
                  <p className=" font-semibold py-20 text-gray-200 px-5 text-xl">
                    THE BATTLE OF THE YOUTHFUL AGE AND IT CONSEQUENCES
                  </p>
                </div>
                <div className="py-3">
                  <p className="p-4">
                    As youth were desginated to fight a vital battle of our
                    livesand of which we must not loose for anything ......
                  </p>
                  <p className="p-2 border border-green-300 my-3">
                    By:{" "}
                    <span className="text-green-600 border-l-4 pl-4">
                      Edwin Emmanuel
                    </span>{" "}
                  </p>
                  <p>
                    Read More{" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="h-3 animate-pulse text-red-600"
                    />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
