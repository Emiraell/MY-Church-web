import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "react-image-gallery/styles/css/image-gallery.css";
import photo from "./assests/photos/youth3.png";
import ReactImageGallery from "react-image-gallery";

export default function Gallery() {
  const [show, setShow] = useState({ ministrations: true, photos: false });
  const images = [
    { original: photo, thumbnail: photo },
    { original: photo, thumbnail: photo },
  ];
  return (
    <div>
      <>
        <Header page={"CHURCH GALLERY"} pageName={"Gallery"} />
      </>
      <div className="my-16 w-[90%] lg:w-[70%] m-auto text-center">
        <div className="text-lg text-start lg:text-2xl font-bold font-lato tracking-wide">
          <span
            onClick={() => setShow({ ministrations: true, photos: false })}
            className={`p-2 rounded-md mx-4 transition-all duration-0.5 ease-in-out ${
              show.ministrations && "bg-greeny-600 text-gray-100"
            }`}
          >
            Ministrations
          </span>
          <span
            onClick={() => setShow({ ministrations: false, photos: true })}
            className={`p-2 rounded-md  transition-all duration-0.5 ease-in-out ${
              show.photos && "bg-greeny-600 text-gray-100"
            }`}
          >
            Photos
          </span>
        </div>
        <div className="my-10">
          <div className={`${!show.ministrations && "hidden"}`}>
            Ministrations
          </div>
          <div className={`${!show.photos && "hidden"}`}>
            Photos
            <div className="w-[80vw] h-[100vh] m-auto">
              <ReactImageGallery
                items={images}
                showIndex={true}
                slideOnThumbnailOver={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
