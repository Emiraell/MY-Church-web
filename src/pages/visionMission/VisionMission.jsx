import { useState } from "react";
import Header from "../../components/Header/Header";
import vision from "./assests/vision.png";
import mission from "./assests/mission.png";
import UsefulLinks from "../../components/UsefulLinks";
import Footer from "../../components/footer/Footer";

export default function VisionMission() {
  const [missions, setMissions] = useState([
    "To ensure a sustained growth in the number of churches and worshippers within the archedconry",
    "To develop and inspire in every church the principle of self-sufficiency and Christian generosity thereby ensuring the a strong and viable diocese",
    "To make sure anglican communion remains a driving force in promoting christ in keffi town and nasarwa state at large",
    "To have and promote peaceful and cordial relationship with other churches within the archdeacnory, and other archdecaonry within the diocese in order to ensure the success of our common commimetemnt",
    "To see to the well being our all our clergies and memebers both spiritually, physically and fininacially	",
  ]);
  const [links, setLinks] = useState([
    { name: "About Us", path: "about" },
    { name: "Church History", path: "history" },
    { name: "Churches", path: "churches" },
  ]);

  return (
    <div>
      <Header
        page={"Vision and Mission Statement"}
        pageName={"Vision & Mission"}
      />
      <div className="text-textCol-primary pt-16 w-[90%] m-auto text md:w-[80%] lg:w-[60%]">
        <div className="bg-gray-200 shadow-sm shadow-emerald-200 rounded-t-xl">
          <div
            className="relative rounded-xl font-lato font-bold text-emerald-200 pt-5 background h-[25vh] bg-orange-500"
            style={{
              backgroundImage: `url(${vision})`,
            }}
          >
            <p className=" absolute w-full bottom-1/3 text-2xl">OUR VISION</p>
          </div>
          <p className="p-5 tracking-wider lg:w-[80%] m-auto pt-8 leading-9">
            <span className="italic text-red-700 text-5xl font-light">A</span>s
            a church to be a true signpost of the kingdom of God in this last
            days, reach to people with the gospel of salvation and in love and
            potrary christ daily. As an archdeaconry to be a significant force
            in preparing the nation for the second coming of our lord jesus
            christ.
          </p>
        </div>
        <div className="bg-gray-300 w-[90%] m-auto shadow-sm my-28 pb-4 shadow-emerald-900 rounded-t-xl">
          <div
            className=" relative rounded-xl font-lato background font-bold text-emerald-200 pt-5 h-[25vh] bg-orange-600"
            style={{
              backgroundImage: `url(${mission})`,
            }}
          >
            <p className="absolute w-full bottom-1/3 text-2xl">OUR MISSION</p>
          </div>
          {missions.map((mission, index) => (
            <ul
              key={index}
              className="p-5  tracking-wider lg:w-[80%] m-auto pt-8"
            >
              <li className="bg-gray-200 p-3 shadow-md rounded-lg">
                {mission}
              </li>
            </ul>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
