import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function NavContent({
  content,
  menuClicked,
  infoClicked,
  clickInfo,
}) {
  // navigation function to navigate to various link in the menu content
  const nav = useNavigate();
  const navigate = (path) => {
    nav(`/${path}`);
  };

  return (
    <>
      <div className={`${!menuClicked && "hidden"} lg:block lg:mx-4`}>
        <div className={`text-gray-100 my-3 text-xl font-roboto`}>
          <div className="flex items-center justify-between cursor-pointer">
            <ol onClick={() => navigate(content.path)} className="my-3 ">
              {content.name}
            </ol>
            <div onClick={() => clickInfo(content.name)}>
              {content.name === "About Us" &&
                (infoClicked.about ? (
                  <FontAwesomeIcon icon={faChevronUp} className="h-5 lg:ml-8" />
                ) : (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="h-5 lg:ml-8"
                  />
                ))}
              {content.name === "Organizations" &&
                (infoClicked.organizations ? (
                  <FontAwesomeIcon icon={faChevronUp} className="h-5 lg:ml-8" />
                ) : (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="h-5 lg:ml-8"
                  />
                ))}
            </div>
          </div>
        </div>
        {/* Home content sub content */}
        {content.infos.map((info, index) => (
          <ol key={index}>
            <li
              className="text-gray-100 mb-4 hover:underline cursor-pointer italic"
              onClick={() => {
                navigate(info.path);
              }}
            >
              {content.name === "About Us" && infoClicked.about && info.name}
              {content.name === "Organizations" &&
                infoClicked.organizations &&
                info.name}
            </li>
          </ol>
        ))}
      </div>
    </>
  );
}
