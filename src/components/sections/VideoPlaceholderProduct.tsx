import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function VideoPlaceholderProduct() {
  return (
    <div className="w-full">
      <div className=" overflow-hidden">
        <ReactPlayer
          url="/assets/stock-videos/Salmon footage show reel.mp4"
          controls
          playing
          width="full"
          height="full"
        />
      </div>
    </div>
  );
}
