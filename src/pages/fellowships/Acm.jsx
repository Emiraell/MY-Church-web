import acm from "./assests/children/acm.png";
import acmm from "./assests/children/acmm.png";
import children from "./assests/children/children.png";
import leader from "./assests/children/acmLeader.jpg";
import Header from "../../components/Header/Header";
import Template from "./Template";
import Footer from "../../components/footer/Footer";

export default function Acm() {
  const details = {
    title: "ANGLICAN CHILDREN MINISTRY",
    slogan: "Catch them young for Christ",
    description:
      "A ministry of which we are both proud as a church and an archdeaconry. The Anglican Children's Ministry has remained committed to catching children for Christ.",
    images: { imageOne: acm, imageTwo: acmm, imageThree: children },
    aims: [
      "To ensure the upbringing of children and young people in the fear of the Lord",
      "To guide the children in learning, studying and to pray daily.",
      "Instructing children and young people in the Anglican faith,			",
      "Helping children and young people in the Anglican faith to become disciplined and growing Christian.",
      " In several other acceptable ways to help them to deepen their spiritual life through worship.",
    ],
    meeting: { days: "sunday", time: "8:00am" },
    president: {
      image: leader,
      name: "Mr Eric Onu",
      position: "Cordinator",
      contact: "+2348065318560",
    },
  };

  return (
    <div className="bg-gray-100">
      <>
        <Header
          page={"Anglican Children Ministry"}
          pageName={"Children Ministry"}
        />
      </>
      <Template details={details} />
      <Footer />
    </div>
  );
}
