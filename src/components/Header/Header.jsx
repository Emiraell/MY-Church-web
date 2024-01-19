import logo from "./assests/logo.png";
import menu from "./assests/icons/menu.svg";
import close from "./assests/icons/xMark.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavContent from "./NavContent";
import Carousel from "./Carousel";

export default function Header({ isHomePage, setIsHomePage, page, setPage }) {
  const [menuClicked, setMenuClicked] = useState(false);
  const clickMenu = () => setMenuClicked(!menuClicked);

  const [menuContents, setMenuContents] = useState([
    {
      name: "Home",
      infos: [],
      clicked: false,
    },
    {
      name: "About Us",
      infos: [
        { name: "About Us", path: "about" },
        { name: "Vision & Mission", path: "vision_mission" },
        { name: "History", path: "history" },
        { name: "Churches", path: "churches" },
        { name: " Past Priest", path: "past_priest" },
      ],
      clicked: false,
    },
    {
      name: "Ministries and Fellowship",
      infos: [
        { name: "Men Fellowship", path: "men_fellowship" },
        { name: "Women Fellowship", path: "women_fellowship" },
        { name: "Youth Fellowship", path: "youth_fellowship" },
        { name: "Children Ministry", path: "children_ministry" },
        { name: "EFAC", path: "efac" },
        { name: "Girl's Guide", path: "girl's_guide" },
      ],
      clicked: false,
    },
    {
      name: "Blogs",
      infos: [],
      clicked: false,
    },
    {
      name: "Contact Us",
      infos: [],
      clicked: false,
    },
  ]);

  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);
  return (
    <header>
      {/* Header */}
      <nav className="">
        <div
          className={`flex fixed w-[100%] justify-between z-40 top-0 ${
            navbar && "bg-gray-600 pt-4 pb-3"
          }`}
        >
          {/* logo and menu */}
          <div className="ml-4 mt-10">
            <Link to="/">
              <img src={logo} alt="" className="h-16 rounded-full" />
            </Link>
          </div>

          <div
            className={`${
              menuClicked && "w-[70%] bg-gray-900 h-[50vh] mt-0 mr-0 p-7"
            } mr-10 mt-14`}
          >
            {/* menu div */}
            <div className="flex justify-between items-center md:hidden">
              <span className={`${!menuClicked && "hidden"}`}>Menu</span>
              <img
                src={menuClicked ? close : menu}
                alt=""
                className={`${menuClicked ? "h-6" : "h-9"}`}
                onClick={clickMenu}
              />
            </div>

            <div
              className={`absolute md:relative md:justify-between md:pt-7 ${
                !menuClicked && "hidden"
              } md:flex`}
            >
              {menuContents.map((content, index) => (
                <NavContent
                  content={content}
                  index={index}
                  close={close}
                  key={index}
                  menuContents={menuContents}
                  setMenuContents={setMenuContents}
                />
              ))}
              {/* <Link className="mx-6" to="/">
                Home
              </Link>
              <div className="mx-6">
                <div className="flex items-center justify-between">
                  <span>About Us</span>
                  <div>
                    <img src={close} alt="" />
                  </div>
                </div>
                <div className="px-2">
                  {menuContents[0].infos.map((content, index) => (
                    <ol key={index} className="pt-2 text-sm">
                      <Link to={content.path}>{content.name}</Link>
                    </ol>
                  ))}
                </div>
              </div>
              <div className="mx-6">Ministries and Feloowship</div>
              <div className="mx-6">Blogs</div>
              <div className="mx-6">contact us</div> */}
            </div>
          </div>
        </div>
        <Carousel
          isHomePage={isHomePage}
          setIsHomePage={setIsHomePage}
          page={page}
          setPage={setPage}
        />
      </nav>
    </header>
  );
}
