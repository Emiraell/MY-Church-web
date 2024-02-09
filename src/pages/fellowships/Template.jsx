// component/template to use for all component in my fellowship folder
export default function Template({ details }) {
  return (
    <div className="mt-14 text-textCol-secondary mb-10">
      <div
        className="bg-green-800 text-gray-100 text-xl py-10 background"
        style={{ backgroundImage: `url(${details.images.imageOne})` }}
      >
        <p className="py-10 md:py-20 uppercase font-bold tracking-wider md:text-2xl">
          {details.title}
        </p>
        <p className="py-2 w-[80%] m-auto bg-orange-700 rounded-tl-full rounded-br-full">
          {details.slogan}
        </p>
      </div>
      <div className="w-[90%] lg:w-[90%] m-auto mt-16 text-xl md:text-3xl">
        <div>
          <p className="text lg:w-[70%] m-auto">{details.description}</p>
          <div className="lg:flex lg:justify-center lg:w-[70%] w-[90%] m-auto pt-10">
            <img
              src={details.images.imageOne}
              alt="photo"
              className="h-[22vh] md:h-[30vh] w-full object-cover object-center "
            />
            <img
              src={details.images.imageTwo}
              alt="photo"
              className="h-[22vh] md:h-[30vh] w-full object-cover object-center my-2"
            />
            <img
              src={details.images.imageThree}
              alt="photo"
              className="h-[22vh] md:h-[30vh] w-full object-cover object-center"
            />
          </div>
          <p className=" py-7 text italic text-blue-500">
            some of the aims of the this body is:
          </p>
          {details.aims.map((aim, index) => (
            <ul key={index} className="lg:w-[80%] m-auto">
              <li className="shadow-md p-4 bg-gray-200 my-7 rounded-md text">
                {aim}
              </li>
            </ul>
          ))}
        </div>
        <div className="flex mt-10 items-center text-start">
          <div className="md:px-10 px-3">
            <img
              src={details.president.image}
              alt="photo"
              className="rounded-full h-28 w-28 object-cover object-center"
            />
          </div>
          <div className="ml-3">
            <p className="font-semibold">{details.president.name}</p>
            <p className="py-1">{details.president.position}</p>
            <p>{details.president.contact}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
