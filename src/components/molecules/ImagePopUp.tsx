// ImagePopUp.tsx
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Slider from "react-slick";
import Image from "next/image";

interface ImagePopUpProps {
  isOpen: boolean;
  onClose: () => void;
  images: Array<{ id: number; url: string }>; // Menambahkan ID ke images
  initialSlideId?: number; // Menambahkan ID untuk slide awal
}

export default function ImagePopUp({
  isOpen,
  onClose,
  images,
  initialSlideId = 0,
}: ImagePopUpProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: images.findIndex((img) => img.id === initialSlideId), // Atur indeks awal berdasarkan ID
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full transform  max-w-lg   text-left align-middle transition-all ">
                  <Slider {...settings}>
                    {images.map((item, index) => (
                      <div
                        key={index}
                        className=" w-full max-h-[500px] items-center justify-center object-center relative rounded-2xl overflow-hidden">
                        <Image
                          src={`/assets/ImageGallery${item.url}`}
                          alt={"icon"}
                          height={300}
                          width={100}
                          className=" object-cover shadow-xl    "
                          layout="responsive"
                        />
                      </div>
                    ))}
                  </Slider>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
