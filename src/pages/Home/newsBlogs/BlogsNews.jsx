import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import news from "./assests/menC.jpg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
export default function BlogsNews() {
  const pccRef = useRef();
  const happyRef = useRef();
  const newsRef = useRef();

  const [pccIntersected, setPccIntersected] = useState(false);
  const [happyIntersected, setHappyIntersected] = useState(false);
  const [newsIntersected, setNewsIntersected] = useState(false);

  useEffect(() => {
    const observerPcc = new IntersectionObserver((entries) => {
      setPccIntersected(entries[0].isIntersecting);
    });
    observerPcc.observe(pccRef.current);

    const observerHappy = new IntersectionObserver((entries) => {
      setHappyIntersected(entries[0].isIntersecting);
    });
    observerHappy.observe(happyRef.current);

    const observerNews = new IntersectionObserver((entries) => {
      setNewsIntersected(entries[0].isIntersecting);
    });
    observerNews.observe(newsRef.current);
  }, []);

  return (
    <div className=" text-textCol-primary mt-28 w-[95%] m-auto">
      <p className="text-xl font-semibold italic border-x-8 border-orange-600">
        OUR TOP STORIES AND <span className=" text-orange-500">BLOGS</span>
      </p>{" "}
      <div className="shadow-md py-5">
        <div className="mt-10  lg:grid grid-cols-3 gap-5">
          <div
            className={`${
              pccIntersected && "opacity-100 translate-x-0"
            } opacity-0 duration-1 transition-all ease-in-out -translate-x-full`}
          >
            <div className="relative p-3">
              <img src={news} alt="" />
              <div className="absolute top-0 bg-greeny-200 text-gray-200">
                <p className="p-3">25 JAN</p>
                <p className=" bg-gray-200 text-greeny-200">2024</p>
              </div>
            </div>
            <div className="py-3">
              <p ref={pccRef}>ELECTION OF THE NEW PCC MEMBERS</p>
              <p className="p-3 italic">
                Earlier on, each group in the church nominated few persons to
                sit for them in the planning of the progress of the church
              </p>
              <div className="flex justify-between items-center p-3 border border-green-300 mx-5 mt-4">
                <p>
                  <span>By:</span> Happinness ifeuze
                </p>
                <p>
                  Read More{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" animate-pulse text-red-800 text-sm"
                  />
                </p>
              </div>
            </div>
          </div>

          <div
            className={`hidden lg:block opacity-0 ${
              happyIntersected && "opacity-100"
            } transition-all duration-1 ease-in-out`}
          >
            <div className="relative p-3">
              <img src={news} alt="" />
              <div className="absolute top-0 bg-greeny-200 text-gray-200">
                <p className="p-3">25 JAN</p>
                <p className=" bg-gray-200 text-greeny-200">2024</p>
              </div>
            </div>
            <div className="py-3">
              <p ref={happyRef}>ELECTION OF THE NEW PCC MEMBERS</p>
              <p className="p-3 italic">
                Earlier on, each group in the church nominated few persons to
                sit for them in the planning of the progress of the church
              </p>
              <div className="flex justify-between items-center p-3 border border-green-300 mx-5 mt-4">
                <p>
                  <span>By:</span> Happinness ifeuze
                </p>
                <p>
                  Read More{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" animate-pulse text-red-800 text-sm"
                  />
                </p>
              </div>
            </div>
          </div>
          <div
            className={`hidden lg:block  ${
              newsIntersected && "opacity-100 -translate-x-0"
            }
					opacity-0 duration-1 transition-all ease-in-out translate-x-full`}
          >
            <div className="relative p-3">
              <img src={news} alt="" />
              <div className="absolute top-0 bg-greeny-200 text-gray-200">
                <p className="p-3">25 JAN</p>
                <p className=" bg-gray-200 text-greeny-200">2024</p>
              </div>
            </div>
            <div className="py-3">
              <p ref={newsRef}>ELECTION OF THE NEW PCC MEMBERS</p>
              <p className="p-3 italic">
                Earlier on, each group in the church nominated few persons to
                sit for them in the planning of the progress of the church
              </p>
              <div className="flex justify-between items-center p-3 border border-green-300 mx-5 mt-4">
                <p>
                  <span>By:</span> Happinness ifeuze
                </p>
                <p>
                  Read More{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" animate-pulse text-red-800 text-sm"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link>
          <span className="text-greeny-500 animate-pulse bg-gray-200">
            See more stories{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              className=" text-red-800 text-sm"
            />
          </span>
        </Link>
      </div>
    </div>
  );
}
