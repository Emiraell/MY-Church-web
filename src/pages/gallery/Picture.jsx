import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import data from "./Data";
import { useParams } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";

export default function Picture() {
  const { id } = useParams();
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState("");
  useEffect(() => {
    if (id === "church_structures") {
      setPage("Church Structures");
      setIndex(1);
    } else if (id === "old_structures") {
      setPage("Older Structure");
      setIndex(2);
    } else {
      setPage("Children Church");
      setIndex(3);
    }
  }, []);
  return (
    <div>
      <Header page={page} pageName={"photos"} />
      <div className="my-20 w-[90%] m-auto">
        {<ReactImageGallery items={data} />}
      </div>
    </div>
  );
}
