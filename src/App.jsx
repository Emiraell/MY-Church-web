import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/about/AboutUs";
import ContactUs from "./pages/contactUs/ContactUs";
import PrayerRequest from "./pages/Prayer/PrayerRequest";
import VisionMission from "./pages/visionMission/VisionMission";
import History from "./pages/History/History";
import Churches from "./pages/Churches/Churches";
import PastPriest from "./pages/pastPriest/PastPriest";
import Main from "./pages/fellowships/Main";
import MainAbout from "./pages/about/MainAbout";
import MenFellowship from "./pages/fellowships/MenFellowship";
import WomenFellowship from "./pages/fellowships/WomenFellowship";
import YouthFellowship from "./pages/fellowships/YouthFellowship";
import Acm from "./pages/fellowships/Acm";
import GirlsGuild from "./pages/fellowships/GirlsGuild";
import Efac from "./pages/fellowships/Efac";
import Donate from "./pages/donate/Donate";
import ChurchOfficials from "./pages/officials/ChurchOfficials";
import Goai from "./pages/goai/Goai";
import NewsBlogs from "./pages/New/NewsBlogs";
import ContentPage from "./pages/New/ContentPage";
import Gallery from "./pages/gallery/Gallery";
import Blogs from "./pages/New/Blogs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Picture from "./pages/gallery/Picture";

function App() {
  useEffect(() => {
    document.title = "StPetersAngKeffi";
  }, []);
  return (
    <div className="tracking-wide">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<MainAbout />} />
          <Route path="/about_church" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/prayer" element={<PrayerRequest />} />
          <Route path="/vision_mission" element={<VisionMission />} />
          <Route path="/history" element={<History />} />
          <Route path="/churches" element={<Churches />} />
          <Route path="/past_priest" element={<PastPriest />} />
          <Route path="/organizations" element={<Main />} />
          <Route path="/men_fellowship" element={<MenFellowship />} />
          <Route path="/women_fellowship" element={<WomenFellowship />} />
          <Route path="/youth_fellowship" element={<YouthFellowship />} />
          <Route path="/children_ministry" element={<Acm />} />
          <Route path="/girls_guild" element={<GirlsGuild />} />
          <Route path="/efac" element={<Efac />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/officials" element={<ChurchOfficials />} />
          <Route path="/god_of_impossibilities" element={<Goai />} />
          <Route path="/library" element={<NewsBlogs />} />
          <Route path="/news/:id" element={<ContentPage />} />
          <Route path="/news/blogs/:id" element={<Blogs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<Picture />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
