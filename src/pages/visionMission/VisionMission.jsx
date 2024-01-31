import { useState } from "react";
import Header from "../../components/Header/Header";
import vision from "./assests/vision.png";
import mission from "./assests/mission.png";
import UsefulLinks from "../../components/UsefulLinks";
import Footer from "../../components/footer/Footer";

export default function VisionMission() {
  const [missions, setMissions] = useState([
    "To ensure a sustained growth in the number of churches and worshippers within the archedconry",
    "To develop and inspire in every church the principle of self-sufficiency and Cgristian generoisrtythereby ensuring the a strong and viable diocese",
    "To make sure anglican communion remains a driving force in promoting christ in keffi town and nasarwa state at large",
    "To have and promote peaceful and cordial relatinship with the other churches within the archdeacnory,and other archdecaonry within the diocese in order to ensure to ensure the success of our common commimetemnt",
    "To see to the well being our all our clergies and memebers both spiritually, physically and fininacially	",
  ]);
  const [links, setLinks] = useState([
    { name: "About Us", path: "about" },
    { name: "Church History", path: "history" },
    { name: "Churches", path: "churches" },
  ]);

  return (
    <div className="text-gray-300 bg-gray-200 text-center">
      <Header
        page={"Vision and Mission Statement"}
        pageName={"Vision & Mission"}
      />
      <div className=" text-textCol-primary pt-16">
        <div className="bg-gray-300 w-[90%] m-auto shadow-sm  shadow-emerald-900 rounded-t-xl">
          <div
            className=" relative rounded-xl font-lato font-bold text-emerald-200 pt-5 bg-cover bg-center h-[15vh] bg-blend-multiply bg-orange-600"
            style={{
              backgroundImage: `url(${vision})`,
            }}
          >
            <p className="mt-10">OUR VISION</p>
          </div>
          <p className="p-5 text-lg tracking-wider lg:w-[80%] m-auto pt-8">
            <span className="font-rochester text-red-700 text-3xl">A</span>s a
            church to be a true signpost of the kingdom of God in this last
            days, reach to people with the gospel of salvation and in love
            potrary christ daily. As an archdeaconry to be a significant force
            in preparing the nation for the second coming of our lord jesus
            christ
          </p>
        </div>
        <div className="bg-gray-300 w-[90%] m-auto shadow-sm my-28 pb-4 shadow-emerald-900 rounded-t-xl">
          <div
            className=" relative rounded-xl font-lato font-bold text-emerald-200 pt-5 bg-cover bg-center h-[15vh] bg-blend-multiply bg-orange-600"
            style={{
              backgroundImage: `url(${mission})`,
            }}
          >
            <p className="my-10">OUR MISSION</p>
          </div>
          {missions.map((mission, index) => (
            <ul
              key={index}
              className="p-5 text-lg tracking-wider lg:w-[80%] m-auto pt-8"
            >
              <li className="bg-gray-200 p-3 shadow-md rounded-lg">
                {mission}
              </li>
            </ul>
          ))}
        </div>
        {/* <UsefulLinks links={links} /> */}
        <Footer />
      </div>
    </div>
  );
}
