import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import data from "./Data";
import Footer from "../../components/footer/Footer";

export default function Blogs() {
  const { id } = useParams();
  const index = id - 1;
  return (
    <div className="bg-gray-50">
      <>
        <Header
          page={data[1][index].title}
          pageName={"Blogs"}
          blogs={true}
          author={data[1][index].author}
          image={data[1][index]["author-image"]}
        />
      </>
      <div className="w-[90%] text-xl bg-gray-100 p-4 lg:p-7 shadow-md lg:text-2xl text-textCol-secondary font-roboto m-auto lg:w-[60%] my-16">
        {data[1][index].subtittle !== "" && (
          <h3 className="font-bold text-center text-orange-700 text-xl my-5">
            {data[1][index].subtittle}
          </h3>
        )}
        {data[1][index].definitions.length > 0 &&
          data[1][index].definitions.map((definition, index) => (
            <div key={index} className="my-2">
              <li>{definition}</li>
            </div>
          ))}
        {data[1][index].subContent !== "" && (
          <p className=" my-10 italic text-blue-500">
            {data[1][index].subContent}
          </p>
        )}
        {data[1][index]["sub-description"] !== "" && (
          <p>{data[1][index]["sub-description"]}</p>
        )}
        {data[1][index].subContentTittle !== "" && (
          <h4 className="font-semibold my-7 text-orange-700 text-xl lg:text-2xl">
            {data[1][index].subContentTittle}
          </h4>
        )}
        {data[1][index].subDescription !== "" && (
          <p>{data[1][index].subDescription}</p>
        )}
        {data[1][index].subIntro !== "" && (
          <p className="my-4">{data[1][index].subIntro}</p>
        )}
        {data[1][index].moreContentHeader !== "" && (
          <p className="my-8 text-blue-600 italic ">
            {data[1][index].moreContentHeader}
          </p>
        )}
        {data[1][index].moreContentTitle !== "" && (
          <p className="my-4 font-semibold text-orange-700">
            {data[1][index].moreContentTitle}
          </p>
        )}
        {data[1][index].moreContentSub !== "" && (
          <p className=" italic my-7">{data[1][index].moreContentSub}</p>
        )}
        {data[1][index].moreContentDetail !== "" && (
          <p className="my-5">{data[1][index].moreContentDetail}</p>
        )}
        {data[1][index].moreContentList.length > 1 &&
          data[1][index].moreContentList.map((list, index) => (
            <div className="my-2" key={index}>
              <li>{list}</li>
            </div>
          ))}{" "}
        <div className="my-10 p-2 bg-gray-50">
          {data[1][index].moreContentPassages.length > 1 &&
            data[1][index].moreContentPassages.map((list, index) => (
              <div className="my-3 italic text-blue-600" key={index}>
                <li>{list}</li>
              </div>
            ))}
        </div>
        {data[1][index].finalHeader !== "" && (
          <p className="my-5 font-semibold text-orange-700">
            {data[1][index].finalHeader}
          </p>
        )}
        {data[1][index].finalSub !== "" && (
          <p className="my-4 italic">{data[1][index].finalSub}</p>
        )}
        {data[1][index].finalList.length > 1 &&
          data[1][index].finalList.map((list, index) => (
            <div className="my-4 shadow-sm p-3 bg-gray-100" key={index}>
              <h2 className="text-blue-600 italic my-3">{list.title}</h2>
              <p>{list.details}</p>
            </div>
          ))}
        {data[1][index].conclusion !== "" && (
          <p className="my-10 font-semibold text-orange-700">
            {data[1][index].conclusion}
          </p>
        )}
        {data[1][index].conclusionTittle !== "" && (
          <p className="my-5 italic font-light">
            {data[1][index].conclusionTittle}
          </p>
        )}
        {data[1][index].conclusionPassages.length > 1 &&
          data[1][index].conclusionPassages.map((list, index) => (
            <div className="my-3 italic text-blue-600" key={index}>
              <li>{list}</li>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}
