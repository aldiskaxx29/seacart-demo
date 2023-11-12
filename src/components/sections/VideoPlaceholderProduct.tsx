import React from "react";
import ReactPlayer from "react-player";

export default function VideoPlaceholderProduct() {
  return (
    <div className="w-full">
      <div className=" overflow-hidden">
        <ReactPlayer
                  url="/assets/stock-videos/Salmon footage show reel.mp4"
                  muted
                  playing
          width="full"
          height="full"
        />
      </div>
    </div>
  );
}
