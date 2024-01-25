import React from "react";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import data from "./Data";
import Footer from "../../components/footer/Footer";

export default function ContentPage() {
  const { id } = useParams();
  const index = id - 1;
  //console.log(data[index][index]);

  return (
    <div>
      <>
        <Header page={data[0][index].title} />
      </>
      <div className="m-auto w-[100%] lg:w-[60%] text-center text-textCol-secondary">
        <div>
          <img
            src={data[0][index].image}
            alt=""
            className="w-full h-[30vh] object-cover"
          />
          <p className="p-5 text-xl leading-10 tracking-wide lg:tracking-widest">
            {data[0][index].details}
          </p>
          <div className="flex justify-evenly my-10 text-green-700 py-3 tracking-wide text-xl border-2 mx-10">
            <p className=" ">{data[index].author}</p>{" "}
            <p>
              {data[0][index].date.day} <span>{data[0][index].date.month}</span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
