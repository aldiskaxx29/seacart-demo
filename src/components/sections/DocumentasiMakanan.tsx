import React, { useEffect, useState } from "react";
import ImageGalleryItem from "../atomic/ImageGalleryItem";
import { FadeIn } from "../animations/AnimationTemplate";
import { MotionDiv } from "../animations/MotionDiv";
import { FoodImageGallery, ImageGallery } from "../../../service/DummyData";

interface Props {
  id: number;
  title: string;
  filename: string;
}
[];

export default function DocumentasiMakanan() {
  const [data, setData] = useState<Props[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setData(FoodImageGallery);
      }, 1000);
    };

    fetchData();
  }, []);

  return (
    <>
      <MotionDiv>
        <div className="flex min-h-screen pt-[100px]">
          {/* Col 1 */}
          <div className="sm:flex-1 lg:block w-full pt-1">


            {/* Col 1 Row 2 */}

            <div className="relative overflow-hidden h-2/4">
              <FadeIn>
                <ImageGalleryItem
                  id={FoodImageGallery[2]?.id}
                  src={FoodImageGallery[2]?.filename}
                />
              </FadeIn>
            </div>

            {/* Col 1 Row 3 */}

            <div className="relative overflow-hidden  flex ">
              <div className="relative overflow-hidden aspect-square w-full max-w-[3000px]">
                <FadeIn>
                  <ImageGalleryItem
                    id={FoodImageGallery[3]?.id}
                    src={FoodImageGallery[3]?.filename}
                  />
                </FadeIn>
              </div>

              <div className="relative overflow-hidden aspect-square w-full max-w-[3000px]">
                <FadeIn>
                  <ImageGalleryItem
                    id={FoodImageGallery[4]?.id}
                    src={FoodImageGallery[4]?.filename}
                  />
                </FadeIn>
              </div>
            </div>
          </div>

          {/* Col 2 */}
          <div className="sm:flex-1  lg:block hidden pt-1">
            {/* Col 2 Row 3 */}
            <div className="relative overflow-hidden  flex">
              <div className="relative overflow-hidden aspect-square w-full max-w-[3000px]">
                <FadeIn>
                  <ImageGalleryItem
                    id={FoodImageGallery[5]?.id}
                    src={FoodImageGallery[5]?.filename}
                  />
                </FadeIn>
              </div>
              <div className="relative overflow-hidden aspect-square w-full max-w-[3000px]">
                <FadeIn>
                  <ImageGalleryItem
                    id={FoodImageGallery[6]?.id}
                    src={FoodImageGallery[6]?.filename}
                  />
                </FadeIn>
              </div>
            </div>


            {/* Col 2 Row 2 */}
            <div className="relative overflow-hidden h-2/4">
              <FadeIn>
                <ImageGalleryItem
                  id={FoodImageGallery[7]?.id}
                  src={FoodImageGallery[7]?.filename}
                />
              </FadeIn>
            </div>
          </div>

          {/* Col 3 */}
          <div className="sm:flex-1  lg:block hidden pt-1">
            {/* Col 3 Row 2 */}
            <div className="relative overflow-hidden h-2/4">
              <FadeIn>
                <ImageGalleryItem
                  id={FoodImageGallery[8]?.id}
                  src={FoodImageGallery[8]?.filename}
                />
              </FadeIn>
            </div>

            {/* Col 3 Row 3 */}
            <div className="relative overflow-hidden  flex">
              <div className="relative overflow-hidden aspect-square w-full max-w-[3000px]">
                <FadeIn>
                  <ImageGalleryItem
                    id={FoodImageGallery[0]?.id}
                    src={FoodImageGallery[0]?.filename}
                  />
                </FadeIn>
              </div>
              <div className="relative overflow-hidden aspect-square w-full max-w-[3000px]">
                <FadeIn>
                  <ImageGalleryItem
                    id={FoodImageGallery[1]?.id}
                    src={FoodImageGallery[1]?.filename}
                  />
                </FadeIn>
              </div>
            </div>

          </div>
        </div>
      </MotionDiv>
    </>
  );
}
