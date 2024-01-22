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
          <Route path="ministries" element={<Main />} />
          <Route path="men_fellowship" element={<MenFellowship />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
