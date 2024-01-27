import {
  faArrowUp,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavContent({ content, menuClicked }) {
  const [infoClicked, setInfoClicked] = useState({
    about: false,
    organizations: false,
  });

  const clickInfo = (name) => {
    if (name === "About Us") {
      setInfoClicked({
        ...infoClicked,
        about: !infoClicked.about,
        organizations: false,
      });
    } else {
      setInfoClicked({
        ...infoClicked,
        about: false,
        organizations: !infoClicked.organizations,
      });
    }
  };

  const nav = useNavigate();

  const navigate = (path) => {
    nav(`/${path}`);
  };
  return (
    <>
      <div className={`${!menuClicked && "hidden"} lg:block lg:mx-4`}>
        <div className={`text-gray-200 my-3 text-xl font-roboto`}>
          {" "}
          <div className="flex items-center justify-between">
            <ol onClick={() => navigate(content.path)} className="my-3 ">
              {content.name}
            </ol>{" "}
            <div>
              {content.name === "About Us" && (
                <div onClick={() => clickInfo(content.name)}>
                  {!infoClicked.about ? (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="h-5 lg:ml-8"
                      // onClick={() => clickInfo(content.name)}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      className="h-5 lg:ml-8"
                    />
                  )}
                </div>
              )}
              {content.name === "Organizations" && (
                <div onClick={() => clickInfo(content.name)}>
                  {!infoClicked.organizations ? (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="h-5 lg:ml-8"
                      // onClick={() => clickInfo(content.name)}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      className="h-5 lg:ml-8"
                    />
                  )}{" "}
                </div>
              )}
            </div>
          </div>
        </div>
        {content.infos.map((info, index) => (
          <ol
            key={index}
            className={`${
              content.name === "About Us" && !infoClicked.about && "hidden"
            } ${
              content.name === "Organizations" &&
              !infoClicked.organizations &&
              "hidden"
            }`}
          >
            <li
              className="text-gray-100 mb-4 ml-3 hover:underline"
              onClick={() => {
                navigate(info.path);
              }}
            >
              {info.name}
            </li>
          </ol>
        ))}
      </div>
    </>
  );
}
