import { useState } from "react";
import fellowship from "../assets/backgrounds/fellowship.png";
import Bible from "../assets/backgrounds/bible.png";
import history from "../assets/backgrounds/History.png";
import aboutUs from "../assets/backgrounds/churchFull.jpg";
import Abouts from "./Abouts";

export default function AboutChurch() {
  // about contents
  const abouts = [
    {
      name: "About us",
      image: aboutUs,
      description:
        "St Peter's Anglican church keffi, Nasarawa State, is one of the 20 archdeaconries in the diocese of Lafia which is overseen by Rt. Rev. Robinson Adeyemi.... ",
      path: "about_church",
    },
    {
      name: "Vision and Mission",
      image: Bible,
      description:
        "As a church to be a true signpost of the kingdom of God in this last days, reach to people with the gospel of salvation and in love potrary Christ daily. As...",
      path: "vision_mission",
    },
    {
      name: "History",
      image: history,
      description:
        "In the ancient city of keffi, Nasarawa State, st peter's anglican church is one of the oldest churches. The igwe ndi igbo of keffi (Igwe Nwachinemerum) and..",
      path: "history",
    },
    {
      name: "Ministries and Fellowship",
      image: fellowship,
      description:
        "Just as no Church or establishment will stand strong without several wings, the same can be said of St peter's Anglican  Keffi. Get to see our several wings of strength",
      path: "organizations",
    },
  ];

  //variables to determine which of the div is been displayed
  const [oneIsVisible, setOneIsVisible] = useState({
    aboutSec: true,
    visionSec: false,
    historySec: false,
    ministrySec: false,
  });

  //functions to determine which of the div is been displayed one at a time
  const toggleVisibilty = (name) => {
    if (name === "vision_mission") {
      setOneIsVisible({
        aboutSec: false,
        visionSec: true,
        historySec: false,
        ministrySec: false,
      });
    } else if (name === "history") {
      setOneIsVisible({
        aboutSec: false,
        visionSec: false,
        historySec: true,
        ministrySec: false,
      });
    } else if (name === "organizations") {
      setOneIsVisible({
        aboutSec: false,
        visionSec: false,
        historySec: false,
        ministrySec: true,
      });
    } else {
      setOneIsVisible({
        aboutSec: true,
        visionSec: false,
        historySec: false,
        ministrySec: false,
      });
    }
  };

  return (
    <div className={` text-textCol-primary `}>
      <p className="py-10 font-lato mb-5 text-2xl text-orang-200 font-semibold lg:font-montserrat">
        About the Church
      </p>
      <div
        className={`w-[100%] m-auto md:grid md:grid-cols-2 
        xl:grid-cols-4  `}
      >
        {abouts.map((about, index) => (
          <Abouts
            key={index}
            about={about}
            index={index}
            toggleVisibilty={toggleVisibilty}
            oneIsVisible={oneIsVisible}
            setOneIsVisible={setOneIsVisible}
          />
        ))}
      </div>
    </div>
  );
}
