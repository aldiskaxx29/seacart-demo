import React, { useEffect, useState } from "react";
import ImageGalleryItem from "../atomic/ImageGalleryItem";
import { ImageGallery } from "../../../service/DummyData";
import { FadeIn } from "../animations/AnimationTemplate";
import { MotionDiv } from "../animations/MotionDiv";
import { getGalleryHome } from "../../../service/API";

interface Props {
  id: any;
  filename: string;
}
[];

export default function DocumentasiKegiatan() {
  const [data, setData] = useState<Props[]>([]);
  const [dataDummy, setDataDummy] = useState<Props[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getGalleryHome();
        setData(res);
        setDataDummy(ImageGallery)
        console.log(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <MotionDiv>
        <div className="flex min-h-screen pt-[100px]">
          <div className="sm:flex-1 lg:block w-full pt-1">
            <div className="relative overflow-hidden h-1/2 aspect-square w-full">
              <FadeIn>
                <ImageGalleryItem
                  id={dataDummy[1]?.id}
                  src={dataDummy[1]?.filename}
                />
              </FadeIn>
            </div>

            <div className="relative overflow-hidden h-1/4">
              <FadeIn>
                <ImageGalleryItem
                  id={dataDummy[2]?.id}
                  src={dataDummy[2]?.filename}
                />
              </FadeIn>
            </div>

            <div className="relative overflow-hidden h-1/4 flex ">
              <div className="relative overflow-hidden aspect-square w-full max-w-[3000px]">
                <FadeIn>
                  <ImageGalleryItem
                    id={dataDummy[3]?.id}
                    src={dataDummy[3]?.filename}
                  />
                </FadeIn>
              </div>

              <div className="relative overflow-hidden aspect-square w-full max-w-[3000px]">
                <FadeIn>
                  <ImageGalleryItem
                    id={dataDummy[4]?.id}
                    src={dataDummy[4]?.filename}
                  />
                </FadeIn>
              </div>
            </div>
          </div>

          <div className="sm:flex-1  lg:block hidden pt-1">
            <div className="relative overflow-hidden h-1/4 flex">
              <div className="relative overflow-hidden aspect-square w-full max-w-[3000px]">
                <FadeIn>
                  <ImageGalleryItem
                    id={dataDummy[5]?.id}
                    src={dataDummy[5]?.filename}
                  />
                </FadeIn>
              </div>
              <div className="relative overflow-hidden aspect-square w-full max-w-[3000px]">
                <FadeIn>
                  <ImageGalleryItem
                    id={dataDummy[6]?.id}
                    src={dataDummy[6]?.filename}
                  />
                </FadeIn>
              </div>
            </div>

            <div className="relative overflow-hidden h-1/4">
              <FadeIn>
                <ImageGalleryItem
                  id={dataDummy[7]?.id}
                  src={dataDummy[7]?.filename}
                />
              </FadeIn>
            </div>
            <div className="relative overflow-hidden h-1/4 flex">
              <div className="relative overflow-hidden aspect-square w-full max-w-[3000px]">
                <FadeIn>
                  <ImageGalleryItem
                    id={dataDummy[8]?.id}
                    src={dataDummy[8]?.filename}
                  />
                </FadeIn>
              </div>
              <div className="relative overflow-hidden aspect-square w-full max-w-[3000px]">
                <FadeIn>
                  <ImageGalleryItem
                    id={dataDummy[9]?.id}
                    src={dataDummy[9]?.filename}
                  />
                </FadeIn>
              </div>
            </div>

            <div className="relative overflow-hidden h-1/4">
              <FadeIn>
                <ImageGalleryItem
                  id={dataDummy[10]?.id}
                  src={dataDummy[10]?.filename}
                />
              </FadeIn>
            </div>
          </div>

          <div className="sm:flex-1  lg:block hidden pt-1">
            <div className="relative overflow-hidden h-1/4">
              <FadeIn>
                <ImageGalleryItem
                  id={dataDummy[11]?.id}
                  src={dataDummy[11]?.filename}
                />
              </FadeIn>
            </div>

            <div className="relative overflow-hidden h-1/4 flex">
              <div className="relative overflow-hidden aspect-square w-full max-w-[3000px]">
                <FadeIn>
                  <ImageGalleryItem
                    id={dataDummy[12]?.id}
                    src={dataDummy[12]?.filename}
                  />
                </FadeIn>
              </div>
              <div className="relative overflow-hidden aspect-square w-full max-w-[3000px]">
                <FadeIn>
                  <ImageGalleryItem
                    id={dataDummy[13]?.id}
                    src={dataDummy[13]?.filename}
                  />
                </FadeIn>
              </div>
            </div>

            <div className="relative overflow-hidden h-1/2 aspect-square w-full ">
              <FadeIn>
                <ImageGalleryItem
                  id={dataDummy[14]?.id}
                  src={dataDummy[14]?.filename}
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </MotionDiv>
    </>
  );
}
