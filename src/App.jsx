// importing all the component needed for the application
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
import { useEffect } from "react";
import Picture from "./pages/gallery/Picture";
import Error from "./pages/error/Error";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  // setting the document tittle for the webpage
  useEffect(() => {
    document.title = "StPetersAngKeffi";
  }, []);

  return (
    <div className="tracking-wide bg-gray-100 font-roboto text-center">
      {/* A router for easy navigation of all the pages */}
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/my-church-web" element={<Home />} />
          <Route path="/my-church-web/about" element={<MainAbout />} />
          <Route path="/my-church-web/about_church" element={<AboutUs />} />
          <Route path="/my-church-web/contact" element={<ContactUs />} />
          <Route path="/my-church-web/prayer" element={<PrayerRequest />} />
          <Route
            path="/my-church-web/vision_mission"
            element={<VisionMission />}
          />
          <Route path="/my-church-web/history" element={<History />} />
          <Route path="/my-church-web/churches" element={<Churches />} />
          <Route path="/my-church-web/past_priest" element={<PastPriest />} />
          <Route path="/my-church-web/organizations" element={<Main />} />
          <Route
            path="/my-church-web/men_fellowship"
            element={<MenFellowship />}
          />
          <Route
            path="/my-church-web/women_fellowship"
            element={<WomenFellowship />}
          />
          <Route
            path="/my-church-web/youth_fellowship"
            element={<YouthFellowship />}
          />
          <Route path="/my-church-web/children_ministry" element={<Acm />} />
          <Route path="/my-church-web/girls_guild" element={<GirlsGuild />} />
          <Route path="/my-church-web/efac" element={<Efac />} />
          <Route path="/my-church-web/donate" element={<Donate />} />
          <Route
            path="/my-church-web/officials"
            element={<ChurchOfficials />}
          />
          <Route
            path="/my-church-web/god_of_impossibilities"
            element={<Goai />}
          />
          <Route path="/my-church-web/library" element={<NewsBlogs />} />
          <Route path="/my-church-web/news/:id" element={<ContentPage />} />
          <Route path="/my-church-web/blogs/:id" element={<Blogs />} />
          <Route path="/my-church-web/gallery" element={<Gallery />} />
          <Route path="/my-church-web/gallery/:id" element={<Picture />} />
          <Route path="/my-church-web/*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
