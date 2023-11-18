import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Videos() {
  return (
    <div>
      {" "}
      <div className="rounded-xl overflow-hidden  shadow-2xl w-[1000px]">
        <ReactPlayer
          url="/assets/stock-videos/seacart.mp4"
          controls
          width="700"
          // playing
          height="232"
        />
      </div>
    </div>
  );
}
