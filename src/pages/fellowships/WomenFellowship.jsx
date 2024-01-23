import { useState } from "react";
import Header from "../../components/Header/Header";
import mothers from "./assests/women/mothers.png";
import mothers2 from "./assests/women/mothers2.png";
import mothers1 from "./assests/women/mothers1.png";
import Template from "./Template";

export default function WomenFellowship() {
  const [details, setDetails] = useState({
    title: "ANGLICAN WOMEN FELOWSHIP",
    slogan: "pillars . . . .  ",
    description:
      "The women organization which constitue both the mothers union and women fellowship is an instrumental organiztion in St peter's anglican church, keffi. The organizaton is aimed at the general Christain value of our women both in the church and their respective home.This ministry is also concerned with all that strengthens and preserves marriages and Christian family life and see to it that advancement of Christianity in the sphere of marriage and family life are achieved as the WOMEN is an important aspect of the home and the church",
    images: { imageOne: mothers, imageTwo: mothers1, imageThree: mothers2 },
    aims: [
      "To uphold Christ's teaching in the nature of marriage and promote its wider understanding",
      "To encourage parents to bring up their children in the faith and life of the church",
      "To maintain a worldwide fellowship of Christians united in prayer, worship and services",
      "To promote conditions in the society favourable to family life and the protection of children",
      "To help those whose family life has met with adversity",
    ],
    president: {
      image: mothers,
      name: "MRS LUKA ALLU",
      position: "President",
      contact: "8032923489",
    },
  });

  return (
    <div>
      <div className="text-gray-300">
        <Header page={"WOMEN FELLOWSHIP"} />
      </div>
      <div>
        <Template details={details} />
      </div>
    </div>
  );
}
