import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import data from "./Data";
import Footer from "../../components/footer/Footer";

export default function Blogs() {
  const { id } = useParams();
  const index = id - 1;
  return (
    <div>
      <>
        <Header page={data[1][index].title} />
      </>
      <div></div>
    </div>
  );
}
