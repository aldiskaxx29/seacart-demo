import React from "react";
import WhatWeServe from "./WhatWeServe";
import VideoPlaceholder from "./VideoPlaceholder";

export default function HomeVideo() {
  return (
    <div className="lg:h-[120vh]">
      {" "}
      <div className="">
        <WhatWeServe />
      </div>
      <div className="lg:block hidden">
        <VideoPlaceholder />
      </div>
    </div>
  );
}
