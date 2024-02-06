import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import data from "./Data";
import { useParams } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";
import Footer from "../../components/footer/Footer";

export default function Picture() {
  const { id } = useParams();
  const [page, setPage] = useState("");
  useEffect(() => {
    if (id === "church_structures") {
      setPage("Church Structures");
    } else if (id === "old_structures") {
      setPage("Older Structure");
    } else {
      setPage("Children Church");
    }
  }, []);
  return (
    <div>
      <Header page={page} pageName={"photos"} />
      <div className="my-20 w-[80%] m-auto md:w-[70%] xl:[w-60%] bg-gray-400">
        {id === "old_structures" && (
          <ReactImageGallery items={data[0]} showIndex />
        )}
        {id === "church_structures" && (
          <ReactImageGallery items={data[1]} showIndex />
        )}
        {id === "children_section" && (
          <ReactImageGallery items={data[2]} showIndex />
        )}
      </div>
      <Footer />
    </div>
  );
}
