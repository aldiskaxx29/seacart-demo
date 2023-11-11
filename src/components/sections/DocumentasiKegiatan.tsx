import Image from "next/image";
import React, { useState } from "react";
import ImageGalleryItem from "../atomic/ImageGalleryItem";
import { ImageGallery } from "../../../service/DummyData";
import ImagePopUp from "../molecules/ImagePopUp";


export default function DocumentasiKegiatan() {

  
  return (
    <>
      <div className="flex lg:h-[600px]">
        {/* Col 1 */}
        <div className="sm:flex-1 lg:block w-full pt-1">
          {/* Col 1 Row 1 */}
          <div className="relative overflow-hidden h-1/2 aspect-square w-full">
            <ImageGalleryItem
              id={ImageGallery[1].id}
              src={ImageGallery[1].url}
            />
          </div>

          {/* Col 1 Row 2 */}
          <div className="relative overflow-hidden h-1/4">
            <ImageGalleryItem
              id={ImageGallery[2].id}
              src={ImageGallery[2].url}
            />
          </div>

          {/* Col 1 Row 3 */}
          <div className="relative overflow-hidden h-1/4 flex">
            <div className="relative overflow-hidden aspect-square w-full max-w-[250px]">
              <ImageGalleryItem
                id={ImageGallery[3].id}
                src={ImageGallery[3].url}
              />
            </div>
            <div className="relative overflow-hidden aspect-square w-full max-w-[250px]">
              <ImageGalleryItem
                id={ImageGallery[4].id}
                src={ImageGallery[4].url}
              />
            </div>
          </div>
        </div>

        {/* Col 2 */}
        <div className="sm:flex-1  lg:block hidden pt-1">
          {/* Col 2 Row 3 */}
          <div className="relative overflow-hidden h-1/4 flex">
            <div className="relative overflow-hidden aspect-square w-full max-w-[250px]">
              <ImageGalleryItem
                id={ImageGallery[5].id}
                src={ImageGallery[5].url}
              />
            </div>
            <div className="relative overflow-hidden aspect-square w-full max-w-[250px]">
              <ImageGalleryItem
                id={ImageGallery[6].id}
                src={ImageGallery[6].url}
              />
            </div>
          </div>

          {/* Col 2 Row 2 */}
          <div className="relative overflow-hidden h-1/4">
            <ImageGalleryItem
              id={ImageGallery[7].id}
              src={ImageGallery[7].url}
            />
          </div>
          {/* Col 2 Row 3 */}
          <div className="relative overflow-hidden h-1/4 flex">
            <div className="relative overflow-hidden aspect-square w-full max-w-[250px]">
              <ImageGalleryItem
                id={ImageGallery[8].id}
                src={ImageGallery[8].url}
              />
            </div>
            <div className="relative overflow-hidden aspect-square w-full max-w-[250px]">
              <ImageGalleryItem
                id={ImageGallery[9].id}
                src={ImageGallery[9].url}
              />
            </div>
          </div>

          {/* Col 2 Row 2 */}
          <div className="relative overflow-hidden h-1/4">
            <ImageGalleryItem
              id={ImageGallery[10].id}
              src={ImageGallery[10].url}
            />
          </div>
        </div>

        {/* Col 3 */}
        <div className="sm:flex-1  lg:block hidden pt-1">
          {/* Col 3 Row 2 */}
          <div className="relative overflow-hidden h-1/4">
            <ImageGalleryItem
              id={ImageGallery[11].id}
              src={ImageGallery[11].url}
            />
          </div>

          {/* Col 3 Row 3 */}
          <div className="relative overflow-hidden h-1/4 flex">
            <div className="relative overflow-hidden aspect-square w-full max-w-[250px]">
              <ImageGalleryItem
                id={ImageGallery[12].id}
                src={ImageGallery[12].url}
              />
            </div>
            <div className="relative overflow-hidden aspect-square w-full max-w-[250px]">
              <ImageGalleryItem
                id={ImageGallery[13].id}
                src={ImageGallery[13].url}
              />
            </div>
          </div>

          {/* Col 3 Row 1 */}
          <div className="relative overflow-hidden h-1/2 aspect-square w-full ">
            <ImageGalleryItem
              id={ImageGallery[14].id}
              src={ImageGallery[14].url}
            />
          </div>
        </div>
      </div>
    </>
  );
}
