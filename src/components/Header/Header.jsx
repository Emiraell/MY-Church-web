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
  const clickMenu = () => {
    setMenuClicaked(!menuClicked);
    //console.log(menuClicked);
  };

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
          <Link to="/">
            <img src={logo} alt="" className="rounded-full h-16" />
          </Link>
          <div className=" text-textCol-primary lg:hidden">
            <FontAwesomeIcon
              icon={faBars}
              className={`${menuClicked && "hidden"} text-greeny-50 h-9`}
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
            <FontAwesomeIcon icon={faX} className="h-6" onClick={clickMenu} />
          </div>
          <div className="lg:flex lg:justify-evenly lg:-mt-20">
            {menuContents.map((content, index) => (
              <NavContent
                key={index}
                content={content}
                menuClicked={menuClicked}
              />
            ))}
          </div>
        </div>
      </nav>
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
