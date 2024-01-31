import { useState } from "react";
import acm from "./assests/children/acm.png";
import acmm from "./assests/children/acmm.png";
import children from "./assests/children/children.png";
import Header from "../../components/Header/Header";
import Template from "./Template";
import Footer from "../../components/footer/Footer";

export default function Acm() {
  const [details, setDetails] = useState({
    title: "ANGLICAN CHILDREN MINISTRY",
    slogan: "Catch them young for Christ",
    description:
      "A ministry we're proud of as a church and as an archdeaconry. The anglican children ministry is one which has remianed commited in making sure that our children are been caught for Christ. ",
    images: { imageOne: acm, imageTwo: acmm, imageThree: children },
    aims: [
      "To ensure the upbringing of children and young people in the fear of the Lord",
      "To guide the children in learning, studying and to pray daily.",
      "Instructing children and young people in the Anglican faith,			",
      "Helping children and young people in the Anglican faith to become disciplined and growing Christian.",
      " In several other acceptable ways to help them to deepen their spiritual life through worship.",
    ],
    president: {
      image: acm,
      name: "MR ERIC ONU",
      position: "Cordinator",
      contact: "8032923489",
    },
  });

  return (
    <div className="bg-gray-100">
      <>
        <Header
          page={"ANGLICAN CHILDREN MINISTRY"}
          pageName={"Children Ministry"}
        />
      </>
      <Template details={details} />
      <Footer />
    </div>
  );
}
