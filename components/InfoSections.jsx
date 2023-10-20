import React from "react";
import InforSectionFirst from "./InforSectionFirst";
import InfoSectionSecond from "./InfoSectionSecond";
import InfoSectionThird from "./InfoSectionThird";

function InfoSections() {
  return (
    <div className="my-24 px-10 flex items-center gap-12 md:gap-16 lg:gap-20 flex-col">
      <InforSectionFirst />
      <InfoSectionSecond />
      <InfoSectionThird />
    </div>
  );
}

export default InfoSections;
