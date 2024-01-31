import { useState } from "react";
import Header from "../../components/Header/Header";
import youth from "./assests/youth/ayf.png";
import youthOne from "./assests/youth/youth1.png";
import youthTwo from "./assests/youth/youth2.png";
import youtth from "./assests/youth/youtth.png";
import leader from "./assests/youth/leaderYouth.png";
import Template from "./Template";
import Footer from "../../components/footer/Footer";

export default function YouthFellowship() {
  const [details, setDetails] = useState({
    title: "ANGLICAN YOUTH FELLOWSHIP (AYF)",
    slogan: "And fellowship . . . . ",
    description:
      "Aanlican youth fellowship keffi(AYFK) is one that has held herself to a very high standard and met all her standrad. The fellowship is one of the important wing of the church and archdeaconry which is saddle with responsibitly of the growth of it's member and ensure maximu prticaption in activities that mean well for them and the church. The church quiver is never in deficiet of them as are putting the message of Christ at the forefront of it memebers",
    images: { imageOne: youth, imageTwo: youthOne, imageThree: youthTwo },
    aims: [
      "To help in projecting the Christian principles and teachings in accordance with relevant provisions in the national constitution of the parent body, 'The Anglican Youth Fellowship (Nigeria)'.",
      "To provide opportunities for the understanding and progress in corporate worship and private prayers",
      "To enable young people to learn together the meaning of Christian faith and its relevance to the life of their generation.",
      "To lead young people to offer their work and leisure to God as members of this Church, in local, national and international levels.",
      "To give due recognition to the importance of fitness of body and mind, and the provision of suitable varied forms of recreation in all Christian Youth organization and groups",
      "To help inculcate the spirit of love, peace and unity as enshrined in the Bible.",
    ],
    president: {
      image: leader,
      name: "BRO ONYEMACHI NGOZI",
      position: "President",
      contact: "8032923489",
    },
  });

  return (
    <div className="bg-gray-100">
      <>
        <Header page={"YOUTH FELLOWSHIP"} pageName={"Youth Fellowship"} />
      </>
      <Template details={details} />
      <div className="w-[90%] lg:w-[70%] m-auto mt-16 text-lg">
        <p>connect with us</p>
      </div>
      <Footer />
    </div>
  );
}
