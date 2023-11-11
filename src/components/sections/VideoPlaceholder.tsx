import React, { useState } from "react";
import ReactPlayer from 'react-player';

export default function VideoPlaceholder() {
  
  return (
    <div className="pb-[60px] flex-col justify-center items-center inline-flex px-10 mt-[-64px] w-full">
      <div className=" overflow-hidden rounded-lg">
      <ReactPlayer
        url="/assets/stock-videos/Salmon footage show reel.mp4"
        controls
        style={{borderRadius: 20, }}
        width="768"
        height="432"
      />

      </div>
    </div>
  );
}
