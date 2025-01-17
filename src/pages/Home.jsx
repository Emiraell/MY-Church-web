import Header from "../components/Header/Header.jsx";
import TeamOfLeaders from "./Home/TeamofLeaders/TeamOfLeaders.jsx";
import ChurchEvents from "./Home/events/ChurchEvents.jsx";
import ChurchMap from "../components/ChurchMap.jsx";
import Footer from "../components/footer/Footer.jsx";
import Welcome from "./Home/Welcome.jsx";
import AboutChurch from "./Home/about/AboutChurch.jsx";
import Prayer_Donate from "./Home/Prayer_Donate.jsx";
import { useState } from "react";
import BlogsNews from "./Home/newsBlogs/BlogsNews.jsx";

export default function Home() {
  const [isHomePage, setIsHomePage] = useState(true);

  return (
    <div className={`text-gray-100 tracking-wider`}>
      {/* components needed for my home page */}
      <Header isHomePage={isHomePage} />
      <Welcome />
      <AboutChurch />
      <Prayer_Donate />
      <TeamOfLeaders />
      <ChurchEvents />
      <BlogsNews />
      <ChurchMap />
      <Footer />
    </div>
  );
}
