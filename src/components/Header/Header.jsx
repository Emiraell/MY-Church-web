//importing all the dependencies and files needed for this component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./assests/logo.png";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import menuContents from "./Data";
import { useState } from "react";
import NavContent from "./NavContent";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

export default function Header({
  pageName,
  page,
  isHomePage,
  blogs,
  image,
  author,
}) {
  const [menuClicked, setMenuClicaked] = useState(false);

  //A function to control the opening and closing of my menu bar
  const clickMenu = () => {
    setMenuClicaked(!menuClicked);
  };

  const [infoClicked, setInfoClicked] = useState({
    about: false,
    organizations: false,
  });

  // A function to control visibility of my menuBar content
  const clickInfo = (name) => {
    if (name === "About Us") {
      setInfoClicked({
        about: !infoClicked.about,
        organizations: false,
      });
    } else {
      setInfoClicked({
        about: false,
        organizations: !infoClicked.organizations,
      });
    }
  };

  // changing the background color of my navbar on scrolling for better UI experience
  const [navScrolled, setNavScrolled] = useState(false);
  addEventListener("scroll", () => {
    if (window.scrollY >= 150) {
      setNavScrolled(true);
    } else {
      setNavScrolled(false);
    }
  });

  return (
    <div>
      <nav
        className={`fixed left-0 right-0 z-40 ${
          navScrolled && !menuClicked && "bg-green-950"
        }`}
      >
        <div className="flex justify-between m-6 items-center">
          {/* logo and menu bar container */}
          <Link to="/">
            <img
              src={logo}
              alt=""
              className="rounded-full h-16 md:h-20 cursor-pointer"
            />
          </Link>
          <div className=" text-textCol-primary lg:hidden">
            <FontAwesomeIcon
              icon={faBars}
              className={`${
                menuClicked && "hidden"
              } text-greeny-50 h-9 cursor-pointer  p-2`}
              onClick={clickMenu}
            />
          </div>
        </div>
        <div
          className={`float-end pr-10 ${
            menuClicked &&
            "relative -top-28 pt-10 p-7 h-[100vh] w-[70vw] bg-greeny-700 tracking-widest"
          }`}
        >
          <div
            className={`lg:hidden ${
              !menuClicked && "hidden"
            } flex justify-between mb-5 text-orange-400 `}
          >
            <p className="font-bold text-xl">Menu</p>
            <FontAwesomeIcon
              icon={faX}
              className="h-6 cursor-pointer"
              onClick={clickMenu}
            />
          </div>

          {/* menu bar content */}
          <div className="lg:flex lg:justify-evenly lg:-mt-20">
            {menuContents.map((content, index) => (
              <NavContent
                key={index}
                content={content}
                menuClicked={menuClicked}
                infoClicked={infoClicked}
                clickInfo={clickInfo}
              />
            ))}
          </div>
        </div>
      </nav>

      {/* Header slider component */}
      <Carousel
        isHomePage={isHomePage}
        page={page}
        pageName={pageName}
        blogs={blogs}
        image={image}
        author={author}
      />
    </div>
  );
}
