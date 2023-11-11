import React from "react";
import ReactPlayer from 'react-player';

export default function VideoPlaceholder() {
  
  return (
    <div className="pb-[60px] flex-col justify-center items-center inline-flex lg:px-10 px-4 mt-[-128px] w-full">
      <div className=" overflow-hidden rounded-lg">
      <ReactPlayer
        url="/assets/stock-videos/Salmon footage show reel.mp4"
        controls
        style={{borderRadius: 20, }}
        width="900"
          height="432"

      />

      </div>
    </div>
  );
}
