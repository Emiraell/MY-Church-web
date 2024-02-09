import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import data from "./Data";
import Footer from "../../components/footer/Footer";
import { list } from "postcss";

export default function ContentPage() {
  const { id } = useParams();
  const index = id - 1;
  //console.log(data[index][index]);

  return (
    <div>
      <>
        <Header page={data[0][index].title} pageName={"News"} />
      </>
      <div className="m-auto w-full text-xl lg:w-[60%] text-textCol-primary">
        <div className="mt-10">
          <div className="p-5  lg:tracking-wider ">
            {data[0][index].details !== null && (
              <p className="mt-5">{data[0][index].details}</p>
            )}

            {data[0][index].detailOne !== null && (
              <p className="pt-4">{data[0][index].detailOne}</p>
            )}

            {data[0][index].detailTwo !== null && (
              <p className="pt-4">{data[0][index].detailTwo}</p>
            )}
            {data[0][index].detailThree !== null && (
              <p className="pt-4">{data[0][index].detailThree}</p>
            )}
            {data[0][index].detailFour !== null && (
              <p className="pt-4">{data[0][index].detailFour}</p>
            )}
            {data[0][index].listHeader !== null && (
              <p className="pt-4 text-emerald-600 font-semibold text-lg">
                {data[0][index].listHeader}
              </p>
            )}
            {id === "1" && (
              <p className="pt-4">
                {data[0][index].lists.map((list, index) => (
                  <div key={index} className="text-start ml-6 ">
                    <p className=" italic font-bold text-lg">
                      {list.listHeader}
                    </p>
                    <div className="ml-3 mt-4 mb-10 font-roboto">
                      {list.list.map((li, index) => (
                        <div key={index} className="my-2">
                          {li}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </p>
            )}
            {data[0][index].end !== null && (
              <p className="pt-4">{data[0][index].end}</p>
            )}
          </div>
          <div className="flex mb-6 justify-around text-lg py-2 tracking-wide border-2 w-[90%] m-auto px-3">
            <p className="text-green-600 ">By: {data[0][index].author}</p>
            <span className="px-2">|</span>
            <p className="">
              {data[0][index].date.day} <span>{data[0][index].date.month}</span>{" "}
              <span>{data[0][index].date.year}</span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
