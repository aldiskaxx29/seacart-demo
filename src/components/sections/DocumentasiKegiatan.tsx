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
  const [loading, setLoading] = useState(true); 

  const GetGalleryHomeData = () => {
    getGalleryHome()
      .then((res) => {
        console.log(res);
        setData(res);
        setLoading(false); 
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

    useEffect(() => {
      GetGalleryHomeData();
    }, []);

  return (
    <>
      <MotionDiv>
        {loading ? (
          <div>
          <p>Loading ... </p>
          </div>) : (

        <div className="flex h-[100vh] pt-[72px]">
          <div className="sm:flex-1 lg:block w-full pt-1">
            <div className="relative overflow-hidden h-1/2 aspect-square w-full">
              <FadeIn>
                <ImageGalleryItem
                  id={data[1]?.id}
                  src={data[1]?.filename}
                />
              </FadeIn>
            </div>

            <div className="relative overflow-hidden h-1/4">
              <FadeIn>
                <ImageGalleryItem
                  id={data[2]?.id}
                  src={data[2]?.filename}
                />
              </FadeIn>
            </div>

            <div className="relative overflow-hidden h-1/4 flex ">
              <div className="relative overflow-hidden aspect-square w-full max-w-[3000px]">
                <FadeIn>
                  <ImageGalleryItem
                    id={data[3]?.id}
                    src={data[3]?.filename}
                  />
                </FadeIn>
              </div>

              <div className="relative overflow-hidden aspect-square w-full max-w-[3000px]">
                <FadeIn>
                  <ImageGalleryItem
                    id={data[4]?.id}
                    src={data[4]?.filename}
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
                    id={data[5]?.id}
                    src={data[5]?.filename}
                  />
                </FadeIn>
              </div>
              <div className="relative overflow-hidden aspect-square w-full max-w-[3000px]">
                <FadeIn>
                  <ImageGalleryItem
                    id={data[6]?.id}
                    src={data[6]?.filename}
                  />
                </FadeIn>
              </div>
            </div>

            <div className="relative overflow-hidden h-1/4">
              <FadeIn>
                <ImageGalleryItem
                  id={data[7]?.id}
                  src={data[7]?.filename}
                />
              </FadeIn>
            </div>
            <div className="relative overflow-hidden h-1/4 flex">
              <div className="relative overflow-hidden aspect-square w-full max-w-[3000px]">
                <FadeIn>
                  <ImageGalleryItem
                    id={data[8]?.id}
                    src={data[8]?.filename}
                  />
                </FadeIn>
              </div>
              <div className="relative overflow-hidden aspect-square w-full max-w-[3000px]">
                <FadeIn>
                  <ImageGalleryItem
                    id={data[9]?.id}
                    src={data[9]?.filename}
                  />
                </FadeIn>
              </div>
            </div>

            <div className="relative overflow-hidden h-1/4">
              <FadeIn>
                <ImageGalleryItem
                  id={data[10]?.id}
                  src={data[10]?.filename}
                />
              </FadeIn>
            </div>
          </div>

          <div className="sm:flex-1  lg:block hidden pt-1">
            <div className="relative overflow-hidden h-1/4">
              <FadeIn>
                <ImageGalleryItem
                  id={data[11]?.id}
                  src={data[11]?.filename}
                />
              </FadeIn>
            </div>

            <div className="relative overflow-hidden h-1/4 flex">
              <div className="relative overflow-hidden aspect-square w-full max-w-[3000px]">
                <FadeIn>
                  <ImageGalleryItem
                    id={data[12]?.id}
                    src={data[12]?.filename}
                  />
                </FadeIn>
              </div>
              <div className="relative overflow-hidden aspect-square w-full max-w-[3000px]">
                <FadeIn>
                  <ImageGalleryItem
                    id={data[13]?.id}
                    src={data[13]?.filename}
                  />
                </FadeIn>
              </div>
            </div>

            <div className="relative overflow-hidden h-1/2 aspect-square w-full ">
              <FadeIn>
                <ImageGalleryItem
                  id={data[14]?.id}
                  src={data[14]?.filename}
                />
              </FadeIn>
            </div>
          </div>
        </div>            
          )
        }

      </MotionDiv>
    </>
  );
}
