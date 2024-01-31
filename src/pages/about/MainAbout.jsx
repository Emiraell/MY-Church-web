import { useNavigate } from "react-router-dom";
import HeadPageTem from "../../components/HeadPageTem";
import Header from "../../components/Header/Header";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import officials from "./assests/priests.png";
import church from "./assests/churchTop.jpg";
import history from "./assests/History.png";
import vision from "./assests/vision.png";
import churches from "./assests/churchess.png";

export default function MainAbout() {
  const navigate = useNavigate();
  const [contents, setContents] = useState([
    {
      image: church,
      title: "   ABOUT CHURCH",
      color: "emerald",
      link: "about_church",
    },
    {
      image: vision,
      title: "VISION AND MISSION",
      color: "greeny",
      link: "vision_mission",
    },
    { image: history, title: "HISTORY", color: "green", link: "history" },
    { image: churches, title: "CHURCHES", color: "red", link: "churches" },
    {
      image: officials,
      title: "PAST PRIEST",
      color: "pink",
      link: "past_priest",
    },
  ]);
  return (
    <div className="bg-gray-300">
      <Header page={"ABOUT ST PETER'S ANGLICAN CHURCH"} pageName={"About"} />
      <HeadPageTem contents={contents} />
      <Footer />
    </div>
  );
}
