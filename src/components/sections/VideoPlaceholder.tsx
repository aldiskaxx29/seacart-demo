import Videos from "../molecules/Videos";


export default function VideoPlaceholder() {
  return (
    <div className=" flex-col justify-center items-center    w-full lg:min-h-screen lg:grid hidden ">
      <div className="bg-gray-100 lg:h-[50vh] lg:w-[100vw] lg:flex hidden">
      </div>
      <div className=" overflow-hidden rounded-lg px-2 lg:px-20 lg:mt-[-250px] lg:mb-[200px] ">
        <Videos />
      </div>
    </div>
  );
}
