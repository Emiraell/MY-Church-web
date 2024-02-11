import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/Header/Header";
import donate from "./assests/theChurch.png";
import { faBank, faChurch, faDonate } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Footer from "../../components/footer/Footer";

export default function Donate() {
  const [details, setDetails] = useState([
    {
      title: "PROJECT ACCOUNT",
      name: "St Peter's Anglican Church",
      number: "1016588832",
      bank: "Zenith",
      image: donate,
    },
    {
      title: "TITHE, OFFERING & OTHERS",
      name: "St Peter's Anglican Church",
      number: "1016081779",
      bank: "UBA",
      image: donate,
    },
    {
      title: "WELFARE ACCOUNT",
      name: "St Peter's Anglican Church Welfare",
      number: "1222413971",
      bank: "Zenith",
      image: donate,
    },
    {
      title: "GOD OF ALL IMPOSSIBILITIES",
      name: "St Peter's Anglican Church(programmes)",
      number: "2002357965",
      bank: "FCMB",
      image: donate,
    },
  ]);
  return (
    <div>
      <>
        <Header page={"KINGDOM PARTAKER"} pageName={"Donate"} />
      </>
      <div className="my-12 text-lg w-[90%] lg:w-[70%] m-auto tracking-wider leading-9 font-poppins text-textCol-primary">
        <div>
          <p className=" font-montserrat text-orang-200">THE GREAT COMMISION</p>

          <p className="py-10 font-semibold  text-xl md:text-2xl lg:text-3xl">
            The ministry and work of Christ must advance, and we invite you to
            participate in the ministry of giving by contributing a small
            portion of your resources to the gospel and work of Christ at St.
            Peter's Anglican Church in Keffi.
            <span className="block italic  text-blue-500">
              Matthew 28:19-20
            </span>
          </p>
        </div>
        <div className="lg:grid grid-cols-2 gap-8">
          {details.map((detail) => (
            <div className="shadow-xl mt-10 lg:mt-0 bg-gray-200">
              <div
                style={{ backgroundImage: `url(${detail.image})` }}
                className="background bg-green-700 rounded-xl border-b-8 border-orange-600"
              >
                <p className="py-16 lg:py-20 text-gray-200">{detail.title}</p>
              </div>
              <div className="text-xl md:text-2xl pb-7">
                <div className="flex text-start pt-8 pb-2 px-3">
                  <FontAwesomeIcon
                    icon={faChurch}
                    className="text-orange-700"
                  />
                  <p className="px-5">{detail.name}</p>
                </div>
                <div className="flex items-center px-3 py-2">
                  <FontAwesomeIcon
                    icon={faDonate}
                    className="text-orange-700"
                  />
                  <p className="px-5">{detail.number}</p>
                </div>
                <div className="flex items-center  px-3 py-2">
                  <FontAwesomeIcon icon={faBank} className="text-orange-700" />
                  <p className="px-5">{detail.bank} Bank</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="px-10 my-7 text-red-600">
          NB: No church pastor, official or member from this archdeaconry will
          ask you to send your offering, tithe, pledge, support to an account
          other than the ones listed above
        </p>
      </div>
      <Footer />
    </div>
  );
}
