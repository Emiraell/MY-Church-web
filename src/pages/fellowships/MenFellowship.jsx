import React, { useState } from "react";
import Header from "../../components/Header/Header";
import men from "./assests/men/men.png";
import menC from "./assests/men/menC.jpg";
import mens from "./assests/men/mens.png";
import Footer from "../../components/footer/Footer";
import Template from "./Template";

export default function MenFellowship() {
  const [details, setDetails] = useState({
    title: "CHRISTIAN MEN FELOWSHIP",
    slogan: "in undertanding . . . . ",
    description:
      "The Anglican Christian Men Fellowship in Keffi archdeaconry is achurch body which promotes and uphold the values of the Christain Men Body in the anglican communion. The purpose of this ministry is to be specially carried out at all level in this archeadconry by the excutives. The Anglican Men fellowship in St peter's Anglican Church see to it that the well being of these men are of great profile.",
    images: { imageOne: men, imageTwo: menC, imageThree: mens },
    aims: [
      "To encourage and make Fathers to take their rightful position and play their role in their families and church",
      "To encourage and foster the spirit of brotherly love, mutual understanding and unity among members",
      "To support church projects and generally encourage the growth and development of the church",
      "To be the leading pillar in which the instruction of Christ towards men are been seen",
    ],
    president: {
      image: menC,
      name: "EMEKA UBA",
      position: "President",
      contact: "8032923489",
    },
  });
  return (
    <div className="bg-gray-300">
      <div>
        <Header page={"CHRISTIAN MEN FELLOWSHIP"} />
      </div>
      <Template details={details} />
      <div>
        <Footer />
      </div>
    </div>
  );
}
