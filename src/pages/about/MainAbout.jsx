import { useNavigate } from "react-router-dom";
import HeadPageTem from "../../components/HeadPageTem";
import Header from "../../components/Header/Header";
import { useState } from "react";
import Footer from "../../components/footer/Footer";

export default function MainAbout() {
  const navigate = useNavigate();
  const [contents, setContents] = useState([
    { image: "", title: "   ABOUT CHURCH", color: "emerald", link: "about_us" },
    {
      image: "",
      title: "VISION AND MISSION",
      color: "lime",
      link: "vision_mission",
    },
    { image: "", title: "HISTORY", color: "green", link: "history" },
    { image: "", title: "CHURCHES", color: "red", link: "churches" },
    { image: "", title: "PAST PRIEST", color: "pink", link: "past_priest" },
  ]);
  return (
    <div className="bg-gray-300">
      <Header page={"ABOUT ST PETER'S ANGLICAN CHURCH"} />
      <HeadPageTem contents={contents} />
      <Footer />
    </div>
  );
}
