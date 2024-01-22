import { useNavigate } from "react-router-dom";
export default function HeadPageTem({ contents }) {
  const navigate = useNavigate();

  const goTo = (link) => navigate(`/${link}`);
  return (
    <div>
      <div className="lg:grid lg:grid-cols-2 py-10  w-[90%] m-auto gap-10 text-center">
        {contents.map((content) => (
          <div
            className=" text-textCol-secondarycol-span-1 gap-2"
            onClick={() => goTo(content.link)}
          >
            <div
              style={{ backgroundImage: `url(${content.image})` }}
              className={`mt-10 lg:mt-0 ${
                contents.length < 3 ? "h-[40vh]" : "h-[20vh]"
              } relative rounded-md bg-cover bg-center bg-no-repeat bg-blend-multiply bg-${
                content.color
              }-200`}
            >
              <p className="absolute w-[100%] top-1/2 font-bold text-2xl text-red-600">
                {content.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
