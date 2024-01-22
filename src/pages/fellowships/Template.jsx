import React from "react";

export default function Template({ details }) {
  return (
    <div className="mt-14 text-center text-textCol-secondary mb-10">
      <div
        className="bg-green-800 text-gray-300 text-xl py-6 bg-blend-multiply bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${details.images.imageOne})` }}
      >
        <p className="py-10  uppercase font-bold tracking-wider">
          {details.title}
        </p>
        <p className="py-2 w-[70%] m-auto bg-orange-800 rounded-tl-full rounded-br-full">
          {details.slogan}
        </p>
      </div>
      <div className="w-[90%] lg:w-[70%] m-auto mt-16 text-lg">
        <div>
          <span className="md:text-2xl">{details.description}</span>
          <div className="lg:flex w-[90%] m-auto pt-10">
            <img src={details.images.imageOne} alt="photo" />
            <img src={details.images.imageTwo} alt="photo" />
            <img src={details.images.imageThree} alt="photo" />
          </div>
          <p className="font-semibold py-7">
            some of the aims of the this body is:
          </p>
          {details.aims.map((aim, index) => (
            <ul key={index}>
              <li className="shadow-md p-2 bg-gray-200 mb-3 rounded-md">
                {aim}
              </li>
            </ul>
          ))}
        </div>
        <div className="flex mt-10 items-center">
          <div className="md:px-10 px-3">
            <img
              src={details.president.image}
              alt="photo"
              className="rounded-full h-32 w-32"
            />
          </div>
          <div className="">
            <p className="font-semibold">{details.president.name}</p>
            <p className="py-1">{details.president.position}</p>
            <p>{details.president.contact}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
