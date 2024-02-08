import { useState } from "react";
import Header from "../../components/Header/Header";
import youthOne from "./assests/youth/youth1.png";
import youthTwo from "./assests/youth/youth2.png";
import youtth from "./assests/youth/youtth.png";
import leader from "./assests/youth/youthLeader.jpg";
import Template from "./Template";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function YouthFellowship() {
  const [details, setDetails] = useState({
    title: "ANGLICAN YOUTH FELLOWSHIP (AYF)",
    slogan: "And fellowship . . . . ",
    description:
      "The Anglican Youth Fellowship Keffi (AYFK) is a group that has fulfilled all of its standards and held herself to an extremely high standard. The fellowship is an important wing of the church and archdeaconry, responsible for the development of its members and ensuring maximum participation in activities that benefit them and the church. The church's quiver is never deficient in them because they are putting the message of Christ at the forefront of its members.",
    images: { imageOne: youtth, imageTwo: youthOne, imageThree: youthTwo },
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
      name: "Bro Onyemachi Ngozi",
      position: "President",
      contact: "08160179071",
    },
  });

  return (
    <div className="bg-gray-100">
      <>
        <Header page={"Youth Fellowship"} pageName={"Youth Fellowship"} />
      </>
      <Template details={details} />
      <div className="w-[90%] lg:w-[70%] m-auto my-10 text-lg flex items-center justify-center">
        <span className=" text-3xl text-orang-200">Connect with us:</span>
        <a href="https://www.facebook.com/profile.php?id=100089929903770&mibextid=LQQJ4d">
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-3xl text-blue-600 px-4 py-3"
          />
        </a>
      </div>
      <Footer />
    </div>
  );
}
