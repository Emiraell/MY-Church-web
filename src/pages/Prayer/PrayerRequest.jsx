import Header from "../../components/Header/Header";
import Bible from "../../components/Bible";
import PrayerReq from "./PrayerReq";
import { database } from "../../configuration/Firebase";
import Footer from "../../components/footer/Footer";

export default function PrayerRequest() {
  const prayerPassages = [
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
  ];

  return (
    <div className="text-textCol-secondary ">
      <Header page={"REQUEST PRAYER"} pageName={"Prayer"} />
      <div className="my-16 md:w-[80%] lg:w-[70%] m-auto w-[90%]">
        <p className="text-xl md:2xl font-lato font-bold text-emerald-700">
          LET'S COMMUINE WITH GOD
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl leading-normal font-montserrat mt-7">
          We at St Peter's Anglican Church in Keffi believe in the power of
          prayer, so we communicate with Heaven on a daily basis. Prayer gives
          us strength, assurance, and renews our love for what is placed above.
          We care about you, and we are willing to communicate Heaven with you
          about whatever troubles you.
        </p>
      </div>
      <Bible prayerPassages={prayerPassages} />
      <PrayerReq database={database} />
      <Footer />
    </div>
  );
}
