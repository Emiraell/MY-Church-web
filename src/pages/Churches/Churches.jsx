import React from "react";
import { useState } from "react";
import Header from "../../components/Header/Header";

export default function Churches() {
  const [isHomePage, setIsHomePage] = useState(false);
  const [page, setPage] = useState("CHURCHES");

  return (
    <div className="text-gray-200">
      <Header isHomePage={isHomePage} page={page} />
    </div>
  );
}
