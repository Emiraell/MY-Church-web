import { useState } from "react";
import Header from "../../components/Header/Header";
import godly from "./assests/godlyHome.png";
import Footer from "../../components/footer/Footer";
import HeadPageTem from "../../components/HeadPageTem";

export default function Main() {
  const [contents, setContents] = useState([
    {
      image: godly,
      title: "MEN FELLWOSHIP",
      color: "emerald",
      link: "men_fellowship",
    },
    {
      image: godly,
      title: "WOMEN FELLOWSHIP",
      color: "lime",
      link: "women_fellowship",
    },
    {
      image: godly,
      title: "YOUTH FELLOWSHIP",
      color: "green",
      link: "youth_fellowship",
    },
    {
      image: godly,
      title: "CHILDREN MINISTRY",
      color: "red",
      link: "children_ministry",
    },
    { image: godly, title: "GIRL'S GUILD", color: "pink", link: "girls_guild" },
    {
      image: godly,
      title: "EFAC",
      color: "red",
      link: "efac",
    },
  ]);

  return (
    <div className="text-gray-300 bg-gray-300 text-center">
      <Header page={"FELLOWSHIPS AND MINISTRIES"} />
      <HeadPageTem contents={contents} />
      <Footer />
    </div>
  );
}
