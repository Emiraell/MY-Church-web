import React, { useState } from "react";
import Header from "../../components/Header/Header";
import men from "./assests/men/men.png";
import menC from "./assests/men/menC.jpg";
import mens from "./assests/men/mens.png";
import Footer from "../../components/footer/Footer";
import leader from "./assests/men/menLeader.jpg";
import Template from "./Template";

export default function MenFellowship() {
  const [details, setDetails] = useState({
    title: "CHRISTIAN MEN FELOWSHIP",
    slogan: "in undertanding . . . . ",
    description:
      "The Anglican Christian men fellowship in keffi archdeaconry is a church body dedicated to promoting and upholding the values of the Christian men's body within the Anglican communion.  The Anglican men's fellowship at St Peter's Anglican church ensures that the men's well-being receives high priority.",
    images: { imageOne: men, imageTwo: menC, imageThree: mens },
    aims: [
      "To encourage and make Fathers to take their rightful position and play their role in their families and church",
      "To encourage and foster the spirit of brotherly love, mutual understanding and unity among members",
      "To support church projects and generally encourage the growth and development of the church",
      "To be the leading pillar in which the instruction of Christ towards men are been seen",
    ],
    president: {
      image: leader,
      name: "Mr Emeka Uba",
      position: "President",
      contact: "08035891861",
    },
  });
  return (
    <div>
      <div>
        <Header page={"Christain Men Fellowship"} pageName={"Men Fellowship"} />
      </div>
      <Template details={details} />
      <div>
        <Footer />
      </div>
    </div>
  );
}
