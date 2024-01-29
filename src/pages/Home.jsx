import Header from "../components/Header/Header.jsx";
import TeamOfLeaders from "./Home/TeamofLeaders/TeamOfLeaders.jsx";
import ChurchEvents from "./Home/events/ChurchEvents.jsx";
import ChurchMap from "../components/ChurchMap.jsx";
import Footer from "../components/footer/Footer.jsx";
import Welcome from "./Home/Welcome.jsx";
import AboutChurch from "./Home/about/AboutChurch.jsx";
import Prayer_Donate from "./Home/Prayer_Donate.jsx";
import sky from "./Home/events/assests/sky.png";
import { useState } from "react";

export default function Home() {
  const [isHomePage, setIsHomePage] = useState(true);

  return (
    <div className={`text-gray-300 bg-gray-300 tracking-wider`}>
      <Header isHomePage={isHomePage} />
      <Welcome />
      <AboutChurch />
      <Prayer_Donate />
      <TeamOfLeaders />
      {/* <ChurchEvents /> */}
      <ChurchMap />
      <Footer sky={sky} />
    </div>
  );
}
