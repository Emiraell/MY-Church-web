import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import HeadPageTem from "../../components/HeadPageTem";
import acm from "./assests/acm.png";
import efac from "./assests/efacc.png";
import girls from "./assests/girlsguild.png";
import men from "./assests/mens.png";
import youth from "./assests/youth2.png";
import women from "./assests/mothers.png";

export default function Main() {
  const contents = [
    {
      image: men,
      title: "Men Fellowship",
      link: "men_fellowship",
    },
    {
      image: women,
      title: "Women Fellowship",
      link: "women_fellowship",
    },
    {
      image: youth,
      title: "Youth Fellowship",
      link: "youth_fellowship",
    },
    {
      image: acm,
      title: "Children Ministry",
      link: "children_ministry",
    },
    { image: girls, title: "Girl' guild", link: "girls_guild" },
    {
      image: efac,
      title: "Evangelical Fellowship in the Anglican Communion",
      link: "efac",
    },
  ];

  return (
    <>
      <Header page={"FELLOWSHIPS AND MINISTRIES"} pageName={"Organizations"} />
      <HeadPageTem contents={contents} />
      <Footer />
    </>
  );
}
