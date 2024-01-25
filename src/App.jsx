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

function App() {
  return (
    <div className=" transition-all">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<MainAbout />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/prayer" element={<PrayerRequest />} />
          <Route path="/vision_mission" element={<VisionMission />} />
          <Route path="/history" element={<History />} />
          <Route path="/churches" element={<Churches />} />
          <Route path="/past_priest" element={<PastPriest />} />
          <Route path="/ministries" element={<Main />} />
          <Route path="/men_fellowship" element={<MenFellowship />} />
          <Route path="/women_fellowship" element={<WomenFellowship />} />
          <Route path="/youth_fellowship" element={<YouthFellowship />} />
          <Route path="/children_ministry" element={<Acm />} />
          <Route path="/girls_guild" element={<GirlsGuild />} />
          <Route path="/efac" element={<Efac />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/officials" element={<ChurchOfficials />} />
          <Route path="/god_of_impossibilities" element={<Goai />} />
          <Route path="news" element={<NewsBlogs />} />
          <Route path="news/:id" element={<ContentPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
