import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Videos() {
  return (
    <div>
      {" "}
      <div className="rounded-xl overflow-hidden  shadow-2xl">
        <ReactPlayer
          url="/assets/stock-videos/seacart.mp4"
          controls
          width="900"
          // playing
          height="432"
        />
      </div>
    </div>
  );
}
