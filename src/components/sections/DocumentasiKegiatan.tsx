import React, { useEffect, useState } from "react";
import ImageGalleryItem from "../atomic/ImageGalleryItem";
import { ImageGallery } from "../../../service/DummyData";
import { FadeIn } from "../animations/AnimationTemplate";
import { MotionDiv } from "../animations/MotionDiv";

interface Props {
  id: number;
  title: string;
  filename: string;
}
[];

export default function DocumentasiKegiatan() {
  const [data, setData] = useState<Props[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setData(ImageGallery);
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
            {/* Col 1 Row 1 */}

            <div className="relative overflow-hidden h-1/2 aspect-square w-full">
              <FadeIn>
                <ImageGalleryItem
                  id={ImageGallery[1].id}
                  src={ImageGallery[1].filename}
                />
              </FadeIn>
            </div>

            {/* Col 1 Row 2 */}

            <div className="relative overflow-hidden h-1/4">
              <FadeIn>
                <ImageGalleryItem
                  id={ImageGallery[2].id}
                  src={ImageGallery[2].filename}
                />
              </FadeIn>
            </div>

            {/* Col 1 Row 3 */}

            <div className="relative overflow-hidden h-1/4 flex ">
              <div className="relative overflow-hidden aspect-square w-full max-w-[3000px]">
                <FadeIn>
                  <ImageGalleryItem
                    id={ImageGallery[3].id}
                    src={ImageGallery[3].filename}
                  />
                </FadeIn>
              </div>

              <div className="relative overflow-hidden aspect-square w-full max-w-[3000px]">
                <FadeIn>
                  <ImageGalleryItem
                    id={ImageGallery[4].id}
                    src={ImageGallery[4].filename}
                  />
                </FadeIn>
              </div>
            </div>
          </div>

          {/* Col 2 */}
          <div className="sm:flex-1  lg:block hidden pt-1">
            {/* Col 2 Row 3 */}
            <div className="relative overflow-hidden h-1/4 flex">
              <div className="relative overflow-hidden aspect-square w-full max-w-[3000px]">
                <FadeIn>
                  <ImageGalleryItem
                    id={ImageGallery[5].id}
                    src={ImageGallery[5].filename}
                  />
                </FadeIn>
              </div>
              <div className="relative overflow-hidden aspect-square w-full max-w-[3000px]">
                <FadeIn>
                  <ImageGalleryItem
                    id={ImageGallery[6].id}
                    src={ImageGallery[6].filename}
                  />
                </FadeIn>
              </div>
            </div>

            {/* Col 2 Row 2 */}
            <div className="relative overflow-hidden h-1/4">
              <FadeIn>
                <ImageGalleryItem
                  id={ImageGallery[7].id}
                  src={ImageGallery[7].filename}
                />
              </FadeIn>
            </div>
            {/* Col 2 Row 3 */}
            <div className="relative overflow-hidden h-1/4 flex">
              <div className="relative overflow-hidden aspect-square w-full max-w-[3000px]">
                <FadeIn>
                  <ImageGalleryItem
                    id={ImageGallery[8].id}
                    src={ImageGallery[8].filename}
                  />
                </FadeIn>
              </div>
              <div className="relative overflow-hidden aspect-square w-full max-w-[3000px]">
                <FadeIn>
                  <ImageGalleryItem
                    id={ImageGallery[9].id}
                    src={ImageGallery[9].filename}
                  />
                </FadeIn>
              </div>
            </div>

            {/* Col 2 Row 2 */}
            <div className="relative overflow-hidden h-1/4">
              <FadeIn>
                <ImageGalleryItem
                  id={ImageGallery[10].id}
                  src={ImageGallery[10].filename}
                />
              </FadeIn>
            </div>
          </div>

          {/* Col 3 */}
          <div className="sm:flex-1  lg:block hidden pt-1">
            {/* Col 3 Row 2 */}
            <div className="relative overflow-hidden h-1/4">
              <FadeIn>
                <ImageGalleryItem
                  id={ImageGallery[11].id}
                  src={ImageGallery[11].filename}
                />
              </FadeIn>
            </div>

            {/* Col 3 Row 3 */}
            <div className="relative overflow-hidden h-1/4 flex">
              <div className="relative overflow-hidden aspect-square w-full max-w-[3000px]">
                <FadeIn>
                  <ImageGalleryItem
                    id={ImageGallery[12].id}
                    src={ImageGallery[12].filename}
                  />
                </FadeIn>
              </div>
              <div className="relative overflow-hidden aspect-square w-full max-w-[3000px]">
                <FadeIn>
                  <ImageGalleryItem
                    id={ImageGallery[13].id}
                    src={ImageGallery[13].filename}
                  />
                </FadeIn>
              </div>
            </div>

            {/* Col 3 Row 1 */}
            <div className="relative overflow-hidden h-1/2 aspect-square w-full ">
              <FadeIn>
                <ImageGalleryItem
                  id={ImageGallery[14].id}
                  src={ImageGallery[14].filename}
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </MotionDiv>
    </>
  );
}
