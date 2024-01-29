import bishop from "./assests/bishop.png";
import ali from "./assests/evangAli.png";
import okafor from "./assests/okafor.png";
import daniel from "./assests/ordDaniel.png";
import ejike from "./assests/revEjike.png";
import ernest from "./assests/revErnest.png";
import luka from "./assests/venLuka.png";

const leaderDetails = [
  {
    image: bishop,
    name: "Rt. Rev Adeyemi Robinson",
    church: "Lafia Diocese",
    position: "The Diocesan",
    socialMedia: [{ facebook: "", whatsapp: "" }],
  },
  {
    image: luka,
    name: "Ven. Dr. Luka B. Allu J.P",
    church: "St. Peter's Anglican Church, Keffi",
    position: "Vicar",
    socialMedia: [{ facebook: "", whatsapp: "" }],
  },
  {
    image: okafor,
    name: "Rev'd Canon Dr Josiah C. Okafor",
    church: "St. Barnabas Anglican Church, Keffi",
    position: "Vicar",
    socialMedia: { facebook: "", whatsapp: "" },
  },
  {
    image: ejike,
    name: "Rev'd. Ejike C. Arinze",
    church: "Emmanuel Church Gidan Zakara",
    position: "Vicar",
    socialMedia: { facebook: "", whatsapp: "" },
  },
  {
    image: ernest,
    name: "Rev'd. Ernest C. Eleje",
    church: "St. philips Anglican Church Garaku",
    position: "Vicar",
    socialMedia: { facebook: "", whatsapp: "" },
  },
  {
    image: <FontAwesomeIcon icon={faUserTie} />,
    name: "Rev'd Emmanuel Chukwu",
    church: "St. Peter's Anglican Church, Keffi",
    position: "Curate",
    socialMedia: { facebook: "", whatsapp: "" },
  },
  {
    image: <FontAwesomeIcon icon={faUserTie} />,
    name: "Ord. Bayo Ajayi",
    church: "All soul's Anglican Church, Sabon Gari",
    position: "vicar",
    socialMedia: { facebook: "", whatsapp: "" },
  },
  {
    image: <FontAwesomeIcon icon={faUserTie} />,
    name: "Ord. Abednego Ibrahim",
    church: "Zion Anglican Church, Shamake",
    position: "vicar",
    socialMedia: { facebook: "", whatsapp: "" },
  },

  {
    image: daniel,
    name: "Ord. Daniel Onyekachi",
    church: "Church of Epiphany, GRA keffi",
    position: "Vicar",
    socialMedia: { facebook: "", whatsapp: "" },
  },

  {
    image: ali,
    name: "Evang. Onyeka Ali",
    church: "Church of Advent, Jigwada",
    position: "vicar",
    socialMedia: { facebook: "", whatsapp: "" },
  },
];

export default leaderDetails;
