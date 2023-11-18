import Videos from "../molecules/Videos";

import { FadeInDown } from "../animations/AnimationTemplate";
import { MotionDiv } from "../animations/MotionDiv";

export default function VideoPlaceholder() {

  return (
     <MotionDiv>
      <FadeInDown>

    <div className=" flex-col justify-center items-center    w-full lg:min-h-screen lg:grid hidden ">
      <div className="bg-gray-100 lg:h-[50vh] lg:w-[100vw] lg:flex hidden">
      </div>
      <div className=" overflow-hidden rounded-lg px-2 lg:px-20 lg:mt-[-250px] lg:mb-[200px] pb-20 flex items-center justify-center">
        <Videos />
      </div>
    </div>
      </FadeInDown>
        </MotionDiv>
  );
}
