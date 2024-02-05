import { useState, useEffect, useRef } from "react";
import fellowship from "../assets/backgrounds/fellowship.png";
import Bible from "../assets/backgrounds/bible.png";
import history from "../assets/backgrounds/History.png";
import aboutUs from "../assets/backgrounds/churchFull.jpg";
import Abouts from "./Abouts";

export default function AboutChurch() {
  const [abouts, setAbouts] = useState([
    {
      name: "About us",
      image: aboutUs,
      description:
        "St peter's Anglican church keffi is one of the 20 archdeaconry within the diocese of Lafia overseen by Rt Rev Robinson Adeyemi. St peter's anglican church, keffi is the",
      path: "about_church",
    },
    {
      name: "Vision and Mission",
      image: Bible,
      description:
        "As a church to be a true signpost of the kingdom of God in this last days, reach to people with the gospel of salvation and in love potrary Christ daily. As an",
      path: "vision_mission",
    },
    {
      name: "History",
      image: history,
      description:
        "St peter's is one of the long standing churches in the acient city of keffi, Nasarawa state. The church has been in existent for over 90 years and it first",
      path: "history",
    },
    {
      name: "Ministries and Fellowship",
      image: fellowship,
      description:
        "Just as no Church or establishment will stand strong without several wings, the same can be said of St peter's Anglican  Keffi. Get to see our several wings of strength",
      path: "organizations",
    },
  ]);

  const [oneIsVisible, setOneIsVisible] = useState({
    aboutSec: true,
    visionSec: false,
    historySec: false,
    ministrySec: false,
  });

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
    <div className={`text-center text-textCol-primary `}>
      <div className=" font-lato mb-5 text-2xl">
        <p className="py-10 text-orang-200 font-semibold lg:font-montserrat">
          About the Church
        </p>
      </div>
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
