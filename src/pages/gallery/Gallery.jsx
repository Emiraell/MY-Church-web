import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import old from "./assests/oldStructures/church24.jpg";
import children from "./assests/children/children10.jpg";
import church from "./assests/churchInside/church14.jpg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Gallery() {
  const structures = [
    { name: "Church Older Structures", image: old, id: "old_structures" },
    { name: "Church Structures", image: church, id: "church_structures" },
    { name: "Children Section", image: children, id: "children_section" },
  ];
  return (
    <div>
      <>
        <Header page={"CHURCH GALLERY"} pageName={"Gallery"} />
      </>
      <div className="my-16  text-center tracking-wider">
        <p className="text-xl font-semibold w-[70%] m-auto">
          Welcome to our photo gallery and we do hope you enjoy your moment here
          and get to see some of our lovely moments
        </p>
        <div className="w-[90%] lg:w-[60%] md:w-[70%] m-auto my-10 ">
          {structures.map((structure, index) => (
            <Link key={index} to={`${structure.id}`}>
              <div
                className="relative h-[30vh] bg-center hover:bg-gray-500 bg-cover bg-no-repeat bg-gray-300 bg-blend-multiply
              my-14 rounded-lg"
                style={{ backgroundImage: `url(${structure.image})` }}
              >
                <p className=" text-green-400 text-2xl font-bold hover:underline uppercase absolute w-full bottom-1/2">
                  {structure.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
