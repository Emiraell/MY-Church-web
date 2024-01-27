import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
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
      <div className={`${!menuClicked && "hidden"}`}>
        <div
          className={`text-black my-3 text-xl flex justify-between items-center`}
        >
          <ol onClick={() => navigate(content.path)}>{content.name}</ol>
          {content.infos.length > 1 && (
            <FontAwesomeIcon
              icon={faArrowUp}
              className="h-3"
              onClick={() => clickInfo(content.name)}
            />
          )}
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
              className="text-gray-700 my-2 ml-2"
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
