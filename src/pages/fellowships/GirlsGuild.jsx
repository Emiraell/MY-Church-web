import Header from "../../components/Header/Header";
import girls from "./assests/girls/girls.png";
import girlsguid from "./assests/girls/girlsguid.png";
import girlsguild from "./assests/girls/girlsguild.png";
import leader from "./assests/girls/leader.png";
import Template from "./Template";
import Footer from "../../components/footer/Footer";

export default function GirlsGuild() {
  const details = {
    title: "GIRL'S GUILD",
    slogan: "Future mothers . . . . ",
    description:
      "An organization that has worked hard to keep the girls in the church and archdeaconry on track in all aspects of their lives. This ministry aims to ensure that our girls reflect the life of Christ to the outside world while remaining pure in heart.",
    images: { imageOne: girls, imageTwo: girlsguid, imageThree: girlsguild },
    aims: [
      "To help in projecting the Christian principles and teachings in the life of it members",
      "To enable young girls to learn together the meaning of Christian faith and its relevance to the life of their generation.",
      "To lead young girls to offer their work and leisure to God as members of this Church, in local, national and international levels.",
      "To give due recognition to the importance of fitness of body and mind, and provide adeqaute support for young girls",
    ],
    president: {
      image: leader,
      name: "Sister Atuba Purity",
      position: "President",
      contact: "+2348147317408",
    },
  };

  return (
    <div className="bg-gray-100">
      <>
        <Header page={"Girl's Guild"} pageName={"Girl's guild"} />
      </>
      <Template details={details} />
      <Footer />
    </div>
  );
}
