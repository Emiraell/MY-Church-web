import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/Header/Header";
import history from "./assest/history1.png";
import { useState } from "react";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer/Footer";

export default function History() {
  return (
    <div className="text-gray-200 bg-gray-100">
      <Header page={"History"} pageName={"History"} />
      <div className=" text-textCol-primary ">
        <div className="w-[90%] md:w-[80%] lg:w-[65%] m-auto shadow-lg rounded-t-xl bg-gray-300 my-20">
          <div
            className="relative background rounded-xl font-lato font-bold text-emerald-200 pt-5 md:h-[30vh] h-[20vh] bg-orange-500"
            style={{
              backgroundImage: `url(${history})`,
            }}
          >
            <p className="font-bold text-2xl font-roboto md:text-3xl text-emerald-300 absolute w-full bottom-1/3">
              {" "}
              <FontAwesomeIcon icon={faHistory} spin />
              <span className="px-5 ">History</span>
              <FontAwesomeIcon icon={faHistory} spin />
            </p>
          </div>
          <p className="p-5 leading-9 tracking-widest text  lg:w-[80%] m-auto pt-16">
            <span className="italic text-red-700 text-5xl font-light">I</span>n
            the ancient city of Keffi, Nasarawa State, St. Peter's is one of the
            oldest churches. The igwe ndi igbo keffi (Igwe Nwachinemeruim) and
            numerous other well-known men and women helped to put the church's
            original structure in place in the early 1900s. The church has been
            functioning for over nine decades. One of the churches where a large
            number of Christians moved to the town in the 1990s was St. Peter's,
            which caused the original church building(s) to undergo continuous
            renovation. As a result of its hospitality in the 1990s and even
            today, St Peter has become the home of many priests from both the
            Anglican Communion and the body of Christ in general. When he served
            as a Venerable at the church from the late 90s to early 20s, the
            Lord Bishop of Ideato Diocese, Rt Rev Henry S Okeke, also
            contributed to the development of the church and the lives of its
            members. The church was finally inaugurated by the former bishop of
            the Lafia diocese, Rt Rev Miller K. Maza, in the early 2000s, and
            since then, the church has made so many significant and noticeable
            improvements, both structurally and in the lives of its members.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
