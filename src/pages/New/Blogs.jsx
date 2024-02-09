import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import data from "./Data";
import Footer from "../../components/footer/Footer";

export default function Blogs() {
  const { id } = useParams();
  const index = Number(id) - 1;
  return (
    <div>
      <>
        <Header
          page={data[1][index].title}
          pageName={"Blogs"}
          blogs={true}
          author={data[1][index].author}
          image={data[1][index]["author-image"]}
        />
      </>
      <div
        className="w-[90%]text-lg  md:text-xl p-4 lg:p-7 shadow-md 
      text-textCol-secondary m-auto lg:w-[60%] my-16 "
      >
        {data[1][index].subtittle && (
          <h3 className="font-bold  text-orange-700  my-5">
            {data[1][index].subtittle}
          </h3>
        )}
        {data[1][index].definitions &&
          data[1][index].definitions.map((definition, index) => (
            <div key={index} className="my-2">
              <li>{definition}</li>
            </div>
          ))}
        {data[1][index].subContent && (
          <p className=" my-10 italic text-blue-500">
            {data[1][index].subContent}
          </p>
        )}
        {data[1][index]["sub-description"] && (
          <p>{data[1][index]["sub-description"]}</p>
        )}
        {data[1][index].subContentTittle && (
          <h4 className="font-semibold my-7 text-orange-700">
            {data[1][index].subContentTittle}
          </h4>
        )}
        {data[1][index].subDescription && (
          <p>{data[1][index].subDescription}</p>
        )}
        {data[1][index].subIntro && (
          <p className="my-4">{data[1][index].subIntro}</p>
        )}
        {data[1][index].moreContentHeader && (
          <p className="my-8 text-blue-600 italic ">
            {data[1][index].moreContentHeader}
          </p>
        )}
        {data[1][index].moreContentTitle && (
          <p className="my-4 font-semibold text-orange-700">
            {data[1][index].moreContentTitle}
          </p>
        )}
        {data[1][index].moreContentSub && (
          <p className=" italic my-7">{data[1][index].moreContentSub}</p>
        )}
        {data[1][index].moreContentDetail && (
          <p className="my-5">{data[1][index].moreContentDetail}</p>
        )}
        {data[1][index].moreContentList &&
          data[1][index].moreContentList.map((list, index) => (
            <div className="my-2" key={index}>
              <li>{list}</li>
            </div>
          ))}{" "}
        <div className="my-10 p-2 bg-gray-200">
          {data[1][index].moreContentPassages &&
            data[1][index].moreContentPassages.map((list, index) => (
              <div className="my-3 italic text-blue-600" key={index}>
                <li>{list}</li>
              </div>
            ))}
        </div>
        {data[1][index].finalHeader && (
          <p className="my-5 font-semibold text-orange-700">
            {data[1][index].finalHeader}
          </p>
        )}
        {data[1][index].finalSub && (
          <p className="my-4 italic">{data[1][index].finalSub}</p>
        )}
        {data[1][index].finalList &&
          data[1][index].finalList.map((list, index) => (
            <div className="my-4 shadow-sm p-3 bg-gray-200" key={index}>
              <h2 className="text-blue-600 italic my-3">{list.title}</h2>
              <p>{list.details}</p>
            </div>
          ))}
        {data[1][index].conclusion && (
          <p className="mt-16 font-semibold text-orange-700">
            {data[1][index].conclusion}
          </p>
        )}
        {data[1][index].conclusionTittle && (
          <p className="my-5 italic  ">{data[1][index].conclusionTittle}</p>
        )}
        {data[1][index].conclusionPassages &&
          data[1][index].conclusionPassages.map((list, index) => (
            <div className="my-2 italic text-blue-600" key={index}>
              <li>{list}</li>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}
