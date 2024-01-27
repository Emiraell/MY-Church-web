import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./assests/logo.png";
import { faArrowUp, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import menuContents from "./Data";
import { useState } from "react";
export default function Header() {
  const [menuClicked, setMenuClicaked] = useState(false);
  const clickMenu = () => {
    setMenuClicaked(!menuClicked);
    console.log(menuClicked);
  };
  return (
    <div>
      {" "}
      <nav className="fixed left-0 right-0">
        <div className="flex justify-between m-6 items-center">
          <div>
            <img src={logo} alt="" className="rounded-full h-16" />
          </div>
          <div className=" text-textCol-primary">
            <FontAwesomeIcon
              icon={faBars}
              className="text-greeny-200 h-9"
              onClick={clickMenu}
            />
            <div className="hidden">
              <p>Menu</p>
              <FontAwesomeIcon
                icon={faX}
                className="text-greeny-200 h-9"
                onClick={clickMenu}
              />
            </div>
          </div>
        </div>
        <div className=" float-end pr-10">
          {menuContents.map((content, index) => (
            <div key={index}>
              <div className="text-black my-3 text-xl flex justify-between items-center">
                <ol>{content.name}</ol>
                {content.infos.length > 1 && (
                  <FontAwesomeIcon icon={faArrowUp} className="h-3" />
                )}
              </div>
              {content.infos.map((info, index) => (
                <ol key={index}>
                  <li className="text-gray-700 my-2 ml-2">{info.name}</li>
                </ol>
              ))}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
