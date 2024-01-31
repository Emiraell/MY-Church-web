import { useState } from "react";
import Header from "../../components/Header/Header";
import godly from "./assests/godlyHome.png";
import Footer from "../../components/footer/Footer";
import HeadPageTem from "../../components/HeadPageTem";
import acm from "./assests/acm.png";
import efac from "./assests/efacc.png";
import girls from "./assests/girlsguild.png";
import men from "./assests/mens.png";
import youth from "./assests/youth2.png";
import women from "./assests/mothers.png";

export default function Main() {
  const [contents, setContents] = useState([
    {
      image: men,
      title: "MEN FELLWOSHIP",
      link: "men_fellowship",
    },
    {
      image: women,
      title: "WOMEN FELLOWSHIP",
      link: "women_fellowship",
    },
    {
      image: youth,
      title: "YOUTH FELLOWSHIP",
      link: "youth_fellowship",
    },
    {
      image: acm,
      title: "CHILDREN MINISTRY",
      link: "children_ministry",
    },
    { image: girls, title: "GIRL'S GUILD", link: "girls_guild" },
    {
      image: efac,
      title: "EFAC",
      link: "efac",
    },
  ]);

  return (
    <div className="text-gray-300 bg-gray-100 text-center">
      <Header page={"FELLOWSHIPS AND MINISTRIES"} />
      <HeadPageTem contents={contents} />
      <Footer />
    </div>
  );
}
