import { Link } from "react-router-dom";
import { useState } from "react";
export default function NavContent({ content, index, close }) {
  const [contentClicked, setContentClicked] = useState({
    about: false,
    fellowship: false,
  });

  const clickOne = (name) => {
    if (name === "Ministries and Fellowship") {
      setContentClicked({
        about: false,
        fellowship: !contentClicked.fellowship,
      });
    } else if (name === "About Us") {
      setContentClicked({
        about: !contentClicked.about,
        fellowship: false,
      });
    }
  };

  return (
    <div className="md:mx-6">
      <div
        className="flex items-center justify-between"
        onClick={() => clickOne(content.name)}
      >
        <span>{content.name}</span>
        <div>
          {index === 1 && (
            <img src={contentClicked.about ? close : ""} alt="" />
          )}
          {index === 2 && (
            <img src={contentClicked.fellowship ? close : ""} alt="" />
          )}
        </div>
      </div>
      <div className={`px-2 text-sm`}>
        {content.infos.length >= 1 &&
          content.infos.map((info, index) => (
            <ol key={index} className="">
              {contentClicked.about && <Link to={info.path}>{info.name}</Link>}
              {contentClicked.fellowship && (
                <Link to={info.path}>{info.name}</Link>
              )}
            </ol>
          ))}
      </div>
    </div>
  );
}
