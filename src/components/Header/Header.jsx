import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./assests/logo.png";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import menuContents from "./Data";
import { useState } from "react";
import NavContent from "./NavContent";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuClicked, setMenuClicaked] = useState(false);
  const clickMenu = () => {
    setMenuClicaked(!menuClicked);
    console.log(menuClicked);
  };
  return (
    <div>
      <nav className="fixed left-0 right-0">
        <div className="flex justify-between m-6 items-center">
          <Link to="/">
            <img src={logo} alt="" className="rounded-full h-16" />
          </Link>
          <div className=" text-textCol-primary">
            <FontAwesomeIcon
              icon={faBars}
              className={`${menuClicked && "hidden"} text-greeny-200 h-9`}
              onClick={clickMenu}
            />
            <div className={`${!menuClicked && "hidden"} flex justify-between`}>
              <p>Menu</p>
              <FontAwesomeIcon
                icon={faX}
                className="text-greeny-200 h-6"
                onClick={clickMenu}
              />
            </div>
          </div>
        </div>
        <div className=" float-end pr-10">
          {menuContents.map((content, index) => (
            <NavContent
              key={index}
              content={content}
              menuClicked={menuClicked}
            />
          ))}
        </div>
      </nav>
    </div>
  );
}
