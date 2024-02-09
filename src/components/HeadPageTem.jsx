//A reuseable component to serve as template
import { useNavigate } from "react-router-dom";

export default function HeadPageTem({ contents }) {
  const navigate = useNavigate();
  const goTo = (link) => navigate(`/${link}`);

  return (
    <div>
      <div className="lg:grid lg:grid-cols-2 py-10 w-[90%] lg:w-[75%] m-auto gap-10">
        {contents.map((content, index) => (
          <div
            key={index}
            className={` text-textCol-secondary gap-2`}
            onClick={() => goTo(content.link)}
          >
            <div
              style={{ backgroundImage: `url(${content.image})` }}
              className={`my-10 lg:mt-0 ${
                contents.length < 3 ? "h-[40vh]" : "h-[25vh]"
              } relative rounded-md background hover:bg-gray-700 cursor-pointer bg-gray-500`}
            >
              <p
                className={`absolute  w-[100%] top-1/2 font-bold text-xl md:text-2xl text-orange-300 hover:underline`}
              >
                {content.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
