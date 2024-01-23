export default function Template({ details }) {
  return (
    <div className="mt-14 text-center text-textCol-secondary mb-10">
      <div
        className="bg-green-800 text-gray-300 text-xl py-6 bg-blend-multiply bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${details.images.imageOne})` }}
      >
        <p className="py-10 md:py-20 uppercase font-bold tracking-wider">
          {details.title}
        </p>
        <p className="py-2 w-[80%] m-auto bg-orange-800 rounded-tl-full rounded-br-full">
          {details.slogan}
        </p>
      </div>
      <div className="w-[90%] lg:w-[90%] m-auto mt-16 text-lg">
        <div>
          <p className="md:text-2xl lg:w-[70%] m-auto">{details.description}</p>
          <div className="lg:flex lg:justify-center lg:w-[70%] w-[90%] m-auto pt-10">
            <img
              src={details.images.imageOne}
              alt="photo"
              className="h-[22vh] md:h-[30vh] w-[100%] object-cover object-center"
            />
            <img
              src={details.images.imageTwo}
              alt="photo"
              className="h-[22vh] md:h-[30vh] w-[100%] object-cover object-center"
            />
            <img
              src={details.images.imageThree}
              alt="photo"
              className="h-[22vh] md:h-[30vh] w-[100%] object-cover object-center"
            />
          </div>
          <p className="font-semibold py-7">
            some of the aims of the this body is:
          </p>
          {details.aims.map((aim, index) => (
            <ul key={index} className="lg:w-[80%] m-auto">
              <li className="shadow-md p-2 bg-gray-200 mb-3 rounded-md">
                {aim}
              </li>
            </ul>
          ))}
        </div>
        <div className="flex mt-10 items-center w-[50%] m-auto">
          <div className="md:px-10 px-3">
            <img
              src={details.president.image}
              alt="photo"
              className="rounded-full h-32 w-32 object-cover object-center"
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
