import Header from "../../components/Header/Header";
import Template from "./Template";
import Footer from "../../components/footer/Footer";
import efac from "./assests/efac/efac.png";
import efaac from "./assests/efac/efaac.png";
import efacc from "./assests/efac/efacc.png";
import leader from "./assests/efac/efacLeader.jpg";

export default function Efac() {
  const details = {
    title: "Evangelical Fellowship in the Anglican Communion",
    slogan: "We evangelize",
    description:
      "A body determined to ensure that the church is at the forefront of evangelism in the church, archdeaconry, and the state as a whole. Efac at St. Peter's aims to set the evenaglical pace for the church to build on by encouraging and developing biblical faithful fellowship, teaching, and missions.",
    images: { imageOne: efac, imageTwo: efaac, imageThree: efacc },
    aims: [
      "To help in projecting the Christian principles and teachings in the life of it members",
      "To enable it's members to learn together the meaning of evenaglism and it's relevance to the life of the church",
      "To see that the church is on track on folllowing the guideline of Christ in spreading the gospel",
    ],
    president: {
      image: leader,
      name: "Bro Nwamike Emeka",
      position: "President",
      contact: "+2348039422283",
    },
  };

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
