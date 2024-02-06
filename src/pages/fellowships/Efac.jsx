import { useState } from "react";
import Header from "../../components/Header/Header";
import Template from "./Template";
import Footer from "../../components/footer/Footer";
import efac from "./assests/efac/efac.png";
import efaac from "./assests/efac/efaac.png";
import efacc from "./assests/efac/efacc.png";
import leader from "./assests/efac/efacLeader.jpg";

export default function Efac() {
  const [details, setDetails] = useState({
    title: "EFAC",
    slogan: "We evangelize",
    description:
      "A body that's determine to see that the church is at the forefront of evangelism both in the church, archdeaconey and the state at large. Efac in St peter's aims at setting the evenaglical pace for the church to build upon by encouraging and developing biblical faithful fellowship, teaching and missions",
    images: { imageOne: efac, imageTwo: efaac, imageThree: efacc },
    aims: [
      "To help in projecting the Christian principles and teachings in the life of it members",
      "To enable it's members to learn together the meaning of evenaglism and its relevance to the life of the church",
      "To see that the church is on track on folllowing the guideline of Christ in spreading the gospel",
    ],
    president: {
      image: leader,
      name: "Bro EFAC",
      position: "President",
      contact: "8032923489",
    },
  });

  return (
    <div className="bg-gray-100">
      <>
        <Header
          page={"EVANGELICAL FELLOWSHIP IN ANGLICAN COMMUNION"}
          pageName={"Efac"}
        />
      </>
      <Template details={details} />
      <Footer />
    </div>
  );
}
