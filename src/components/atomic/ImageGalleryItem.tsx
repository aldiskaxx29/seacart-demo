import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import ImagePopUp from "../molecules/ImagePopUp";
import { ImageGallery } from "../../../service/DummyData";
import { getGalleryHome } from "../../../service/API";

interface ImageGalleryItemProps {
  id: any; 
  src: any;
  alt?: string;
  height?: number;
  width?: number;
}

interface Props {
  id: any;
  filename: string;
}
[];

const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({
  id,
  src,
  alt,
  height = 500,
  width = 500,
}) => {
  const handleClick = () => {
    openPopUp(id);
  };

  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [initialSlideId, setInitialSlideId] = useState(1);

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

  const openPopUp = (id: number) => {
    setIsPopUpOpen(true);
    setInitialSlideId(id);
  };

  const closePopUp = () => {
    setIsPopUpOpen(false);
  };




  return (
    <>
      <ImagePopUp
        isOpen={isPopUpOpen}
        onClose={closePopUp}
        images={data}
        initialSlideId={initialSlideId}
      />
      <div onClick={handleClick}>
        <div className=" overflow-hidden group duration-1000">
          {src && (
            <Image
              src={`${src}`}
              alt={alt || "gallery-item"}
              className="absolute inset-0 w-full object-cover h-full p-1 transform transition-transform duration-1000 group-hover:blur-lg"
              height={height}
              width={width}
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-800">
            <button
              className="bg-gray-800 text-white px-4 py-2 rounded-md"
              onClick={handleClick}>
              View Image
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGalleryItem;
