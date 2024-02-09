import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import data from "./Data";
import Footer from "../../components/footer/Footer";
import { motion } from "framer-motion";

export default function NewsBlogs() {
  // variable to display one content at a time
  const [showing, setShowing] = useState({ news: true, blogs: false });

  return (
    <div>
      <Header page={"Church News & Blogs"} pageName={"Blogs & News"} />
      <div className="my-16 w-[90%] md:[70%] m-auto text-textCol-secondary text">
        <div className=" font-bold font-lato tracking-wide">
          <span
            className={`${
              showing.news && "bg-greeny-600 text-gray-100"
            } p-2 rounded-md mr-4 transition-all duration-0.5 ease-in-out cursor-pointer text-sm`}
            onClick={() => setShowing({ news: true, blogs: false })}
          >
            Church News
          </span>
          <span
            onClick={() => setShowing({ news: false, blogs: true })}
            className={`${
              showing.blogs && "bg-greeny-600 text-gray-100"
            } p-2 rounded-md mr-4 transition-all duration-0.5 ease-in-out cursor-pointer`}
          >
            Blogs
          </span>
        </div>
        <div className="mt-10">
          <div className={`${!showing.news && "hidden"}`}>
            <span className=" text-orang-200 text-2xl font-montserrat">
              NEWS UPDATE
            </span>
            <div className={`w-[90%] m-auto  my-10 lg:grid grid-cols-2 gap-12`}>
              {data[0].map((info, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 250 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                  key={index}
                  className={` bg-gray-200 shadow-md col-span-1 mb-10 lg:mb-0 
                    `}
                >
                  <Link to={`/news/${info.id}`}>
                    <div className="relative">
                      <img
                        src={info.image}
                        alt=""
                        className="w-[100%] h-[30vh] object-cover"
                      />
                      <div className="absolute top-0 bg-green-600 text-xl">
                        <p className="font-bold text-gray-100 p-5 text-2xl font-montserrat ">
                          {info.date.day}
                        </p>
                        <p className="bg-gray-100 p-1 tracking-widest">
                          {info.date.month}
                        </p>
                      </div>
                    </div>
                    <div className="py-3">
                      <p className=" font-semibold p-2">{info.title}</p>
                      <p className="my-3">
                        Read More
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="h-6 animate-pulse px-2 text-red-600"
                        />
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          <div className={`${!showing.blogs && "hidden"}`}>
            <span className=" text-orange-700 text-2xl font-montserrat">
              BLOGS
            </span>
            <div className={`w-[90%] m-auto my-5 lg:grid grid-cols-2 gap-12`}>
              {data[1].map((blog, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 250 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                  key={index}
                  className={` bg-gray-100 shadow-md col-span-1 mb-10 lg:mb-0 `}
                >
                  <Link
                    to={`/blogs/${blog.id}`}
                    className="w-[95%] m-auto shadow-lg my-10 bg-slate-100 p-3"
                  >
                    <div
                      className="relative background bg-orange-400 h-[25vh]"
                      style={{ backgroundImage: `url(${blog.image})` }}
                    ></div>
                    <div className="py-3 mx-10">
                      <p className=" font-semibold p-5 ">{blog.title}</p>
                      <p className="p-2 border border-green-300 my-3">
                        By :
                        <span className="text-green-600 pl-4">
                          {blog.author}
                        </span>
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
