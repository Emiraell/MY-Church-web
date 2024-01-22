import { useState } from "react";
import Header from "../../components/Header/Header";
import godly from "./assests/godlyHome.png";
import Footer from "../../components/footer/Footer";
import HeadPageTem from "../../components/HeadPageTem";

export default function Main() {
  const [contents, setContents] = useState([
    { image: godly, title: "MEN FELLWOSHIP", color: "emerald" },
    { image: godly, title: "WOMEN FELLOWSHIP", color: "lime" },
    { image: godly, title: "YOUTH FELLOWSHIP", color: "green" },
    { image: godly, title: "CHILDREN MINISTRY", color: "red" },
    { image: godly, title: "GIRL'S GUILD", color: "pink" },
    {
      image: godly,
      title: "EFAC",
      color: "red",
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
