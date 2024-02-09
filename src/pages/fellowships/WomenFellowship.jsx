import Header from "../../components/Header/Header";
import mothers from "./assests/women/mothers.png";
import mothers2 from "./assests/women/mothers2.png";
import mothers1 from "./assests/women/mothers1.png";
import leader from "./assests/women/womenLeader.jpg";
import Template from "./Template";

export default function WomenFellowship() {
  const details = {
    title: "ANGLICAN WOMEN FELOWSHIP",
    slogan: "pillars . . . .  ",
    description:
      "The women's organization, which includes both the mothers' union and the women's fellowship, plays an important role in St. Peter's Anglican Church in Keffi. The organization aims to promote our women's overall Christian values in both the church and their homes.This ministry is also concerned with all that strengthens and preserves marriages and Christian family life and sees to it that advancement of Christianity in the sphere of marriage and family life are achieved because women are an important aspect of the home and the church.",
    images: { imageOne: mothers, imageTwo: mothers1, imageThree: mothers2 },
    aims: [
      "To uphold Christ's teaching in the nature of marriage and promote its wider understanding",
      "To encourage parents to bring up their children in the faith and life of the church",
      "To maintain a worldwide fellowship of Christians united in prayer, worship and services",
      "To promote conditions in the society favourable to family life and the protection of children",
      "To help those whose family life has met with adversity",
    ],
    president: {
      image: leader,
      name: "Mrs Luka Allu",
      position: "President",
      contact: "+2349038328795",
    },
  };

  return (
    <div className=" bg-gray-100">
      <div className="text-gray-200">
        <Header page={"Women Organization"} pageName={"Women Fellowship"} />
      </div>
      <div>
        <Template details={details} />
      </div>
    </div>
  );
}
