import Header from "../../components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import church from "./assests/churchess.png";
import {
  faCalendar,
  faChurch,
  faClock,
  faSoccerBall,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer/Footer";
import Bible from "../../components/Bible.jsx";

export default function AboutUs() {
  const passages = [
    {
      passage: "Psalms 23 vs 1",
      passageContent: "The Lord is my shepherd, I shall not be in want.",
    },
    {
      passage: "Psalms 23 vs 2",
      passageContent:
        "He makes me to lie down in green pastures; He leads me beside the still waters.",
    },
    {
      passage: "Psalms 23 vs 3",
      passageContent:
        "He restores my soul; He leads me in the paths of righteousness For His name’s sake.",
    },
  ];
  return (
    <div className=" text-textCol-secondary">
      <Header page={"About Us"} pageName={"About Us"} />
      <div className="mt-14 ">
        <div className="lg:w-[70%] m-auto w-[90%] shadow-lg rounded-t-xl ">
          <div
            className=" rounded-xl font-lato font-bold text-emerald-200 pt-5 background md:h-[30vh] h-[23vh] bg-orange-500"
            style={{
              backgroundImage: `url(${church})`,
            }}
          >
            <p className="font-bold text-2xl font-lato md:text-3xl text-emerald-300 mt-14 md:mt-20">
              <FontAwesomeIcon icon={faChurch} />
              <span className="px-5">About Us</span>
              <FontAwesomeIcon icon={faChurch} />
            </p>
          </div>
          <div className="px-5 leading-8 lg:tracking-wider bg-gray-200 py-10 text-lg lg:text-2xl">
            <p className=" text-xl  lg:text-3xl md:text-2xl">
              <span className="italic text-red-700 text-5xl font-light">S</span>
              t. Peter's Anglican Church Keffi, Nasarawa State, is one of 20
              archdeaconries in the Diocese of Lafia, which is overseen by Rt.
              Rev. Robinson Adeyemi. Within the Keffi archdecaonry, St. Peter's
              Anglican Church serves as the administrative hub for all parishes
              and churches. St. peter's anglican church, an achdeaconry, is home
              to two Parishes and roughly eight churches where the ministry and
              teachings of Christ are fervently and fully attended to. As an
              archdeaconry, we enjoy praying in faith and worshipping together
              in fellowship. As a family, we are concerned about the church and
              its members. Regardless of where you are in your spiritual
              journey, this is a place where you can belong.
            </p>
          </div>
        </div>

        <div className="my-16">
          <div>
            <p className="text-3xl md:text-4xl font-rochester text-orang-200 mb-10">
              Moving in God's direction
            </p>
            <FontAwesomeIcon
              icon={faSoccerBall}
              className=" h-6 text-orange-700 animate-move-right"
            />
            <Bible prayerPassages={passages} />{" "}
            <FontAwesomeIcon
              icon={faSoccerBall}
              className=" h-6 text-blue-700 animate-move-left py-2"
            />
          </div>
        </div>

        <div className="bg-greeny-600 my-20 text-gray-100">
          <p className="pt-5 text-emerald-300 text-xl">Church Services</p>
          <div className="lg:grid lg:grid-cols-2 pb-10">
            <div className="shadown-3xl bg-green-900 w-[90%] m-auto mt-5">
              <div className="py-5">
                <FontAwesomeIcon
                  icon={faCalendar}
                  size="xl"
                  color="lightblue"
                />{" "}
                <span className="font-bold text-lg pl-5">Sunday Services</span>
              </div>
              <div>
                <p className="py-5 text-xl">First Service</p>
                <div>
                  <FontAwesomeIcon icon={faClock} size="xl" color="lightblue" />{" "}
                  <span className="text-lg pl-5">6:00AM</span>
                </div>
              </div>
              <div className="pt-6">
                <p className="py-5 text-xl">Second Service</p>
                <div className="pb-5">
                  <FontAwesomeIcon icon={faClock} size="xl" color="lightblue" />{" "}
                  <span className="text-lg pl-5">8:00AM</span>
                </div>
              </div>
            </div>

            <div className="shadown-3xl bg-green-900 w-[90%] m-auto mt-5">
              <div className="py-5">
                <FontAwesomeIcon
                  icon={faCalendar}
                  size="xl"
                  color="lightblue"
                />
                <span className="font-bold text-lg pl-5">
                  Mid Week Services
                </span>
              </div>
              <div>
                <p className="py-5 text-xl">First Service</p>
                <div>
                  <FontAwesomeIcon icon={faClock} size="xl" color="lightblue" />
                  <span className="text-lg pl-5">5:00pm</span>
                </div>
              </div>
              <div className="pt-6">
                <p className="py-5 text-xl">Second Service</p>
                <div className="pb-5">
                  <FontAwesomeIcon icon={faClock} size="xl" color="lightblue" />{" "}
                  <span className="text-lg pl-5">6:00pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
