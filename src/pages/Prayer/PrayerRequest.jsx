import { useState } from "react";
import Header from "../../components/Header/Header";
import Bible from "../../components/Bible";
import PrayerReq from "./PrayerReq";
import { database } from "../../configuration/Firebase";
import Footer from "../../components/footer/Footer";

export default function PrayerRequest() {
  const [isHomePage, setIsHomePage] = useState(false);
  const [page, setPage] = useState("PRAYER");

  const [prayerPassages, setPrayerPassages] = useState([
    {
      passage: "1 Timothy 2:1",
      passageContent:
        "First of all, then, I urge that supplications, prayers, intercessions, and thanksgivings be made for all people",
    },
    {
      passage: "1 John 5:14",
      passageContent:
        "And this is the confidence that we have toward him, that if we ask anything according to his will he hears us",
    },
    {
      passage: "Mark 11:24",
      passageContent:
        "Therefore I tell you, whatever you ask in prayer, believe that you have received it, and it will be yours",
    },
  ]);

  return (
    <div className="bg-gray-200 text-textCol-secondary text-center">
      <Header isHomePage={isHomePage} page={page} />
      <div className="my-16 md:w-[80%] lg:w-[70%] m-auto w-[90%]">
        <p className="text-xl md:2xl font-lato font-bold text-emerald-700">
          LET'S COMMUINE WITH GOD
        </p>
        <p className="text-lg leading-normal md:text-xl font-montserrat mt-7">
          Here in st peter's we believe in the power of prayer and so therefore
          we communicate Heaven daily. Prayer gives us strength, assurance and
          rekindle our love for that which is placed above. We care about you
          and we're willingly to communicate Heaven with you concerning that
          which troubles you
        </p>
      </div>
      <Bible prayerPassages={prayerPassages} />
      <PrayerReq database={database} />
      <Footer />
    </div>
  );
}
