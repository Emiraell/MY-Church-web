//creating variables needed for my header component
const menuContents = [
  {
    name: "Home",
    infos: [],
    clicked: false,
    path: "",
  },
  {
    name: "About Us",
    infos: [
      { name: "About Church", path: "about_church" },
      { name: "Vision & Mission", path: "vision_mission" },
      { name: "History", path: "history" },
      { name: "Churches", path: "churches" },
      { name: " Past Priest", path: "past_priest" },
    ],
    clicked: false,
    path: "about",
  },
  {
    name: "Organizations",
    infos: [
      { name: "Men Fellowship", path: "men_fellowship" },
      { name: "Women Fellowship", path: "women_fellowship" },
      { name: "Youth Fellowship", path: "youth_fellowship" },
      { name: "Children Ministry", path: "children_ministry" },
      { name: "EFAC", path: "efac" },
      { name: "Girl's Guide", path: "girls_guild" },
    ],
    clicked: false,
    path: "organizations",
  },
  {
    name: "Library",
    infos: [],
    clicked: false,
    path: "library",
  },
  {
    name: "Gallery",
    infos: [],
    clicked: false,
    path: "gallery",
  },
  {
    name: "Contact Us",
    infos: [],
    clicked: false,
    path: "contact",
  },
];

export default menuContents;
