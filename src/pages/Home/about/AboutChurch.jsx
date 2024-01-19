import { useState } from "react";
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
        "St peter's Anglican church is one of the 20 archdeaconry within the Lafia Dicoces overseen by Rt Rev Robinson Adeyemi St peter's anglican church, keffi is the",
      path: "about",
    },
    {
      name: "Vision and Mission",
      image: Bible,
      description:
        "As a church to be a true signpost of the kingdom of God in this last days, reach to people with the gospel of salvation and in love potrary Christ daily. As an",
      path: "vision",
    },
    {
      name: "History",
      image: history,
      description:
        "ST peter's is one of the long standing churches in the acient city of keffi nasarawa state. The church has been in existent over 90 years old and the first",
      path: "history",
    },
    {
      name: "Ministries and Fellowship",
      image: fellowship,
      description:
        "Just as no organization will stand without a structure, so also will the body of christ not be able to stand without fellowships. Several m",
      path: "ministries",
    },
  ]);

  const [oneIsVisible, setOneIsVisible] = useState({
    aboutSec: true,
    visionSec: false,
    historySec: false,
    ministrySec: false,
  });

  const toggleVisibilty = (name) => {
    if (name === "vision") {
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
    } else if (name === "ministries") {
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
    console.log(oneIsVisible);
  };
  return (
    <div className="text-center text-textCol-secondary">
      <div className="mt-12 font-lato mb-5 text-2xl">
        <p className="mb-10 text-emerald-700 lg:font-montserrat">
          About the Church
        </p>
      </div>
      <div className="w-[100%] m-auto text-gray-400 md:grid md:grid-cols-2 xl:grid-cols-4 gap-2 ">
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
