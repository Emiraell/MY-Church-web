import Header from "../../components/Header/Header";
import { useState } from "react";
import girls from "./assests/girls/girls.png";
import girlsguid from "./assests/girls/girlsguid.png";
import girlsguild from "./assests/girls/girlsguild.png";
import leader from "./assests/girls/leader.png";
import Template from "./Template";
import Footer from "../../components/footer/Footer";

export default function GirlsGuild() {
  const [details, setDetails] = useState({
    title: "GIRL'S GUILD",
    slogan: "Future mothers . . . . ",
    description:
      "An Organization that has put in her best in ensuring the girls in the church and archdeacocnry are kept on track in all that concerns them. This ministry is aimed at ensuring that our girl's protray the life on Christ to the outside world by maintaining purity in heart.",
    images: { imageOne: girls, imageTwo: girlsguid, imageThree: girlsguild },
    aims: [
      "To help in projecting the Christian principles and teachings in the life of it members",
      "To enable young girls to learn together the meaning of Christian faith and its relevance to the life of their generation.",
      "To lead young girls to offer their work and leisure to God as members of this Church, in local, national and international levels.",
      "To give due recognition to the importance of fitness of body and mind, and provide adeqaute support for young girls",
    ],
    president: {
      image: leader,
      name: "Sis Atuba Purity",
      position: "President",
      contact: "8032923489",
    },
  });

  return (
    <div className="bg-gray-100">
      <>
        <Header page={"GIRL'S GUILD"} pageName={"Girl's Guild"} />
      </>
      <Template details={details} />
      <Footer />
    </div>
  );
}
