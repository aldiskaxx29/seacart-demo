// ImagePopUp.tsx
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

interface ImagePopUpProps {
  isOpen: boolean;
  onClose: () => void;
  images: Array<{ id: number; filename: string }>;
  initialSlideId?: number;
}

export default function ImagePopUp({
  isOpen,
  onClose,
  images,
  initialSlideId = 0,
}: ImagePopUpProps) {

    const [currentSlide, setCurrentSlide] = useState(
      images.findIndex((img) => img.id === initialSlideId)
    );
  
    const sliderSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: currentSlide,
    };

    const sliderRef = useRef<Slider>(null);

    const handleSlideChange = (index: number) => {
      setCurrentSlide(index);
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
            <div className="fixed inset-0 bg-[#2F306A]/40 blur-background" />
          </Transition.Child>

          <div className="fixed top-20 inset-0 flex items-center justify-center object-center">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className=" transform  transition-all flex items-center justify-center object-center">
                  <button
                    onClick={onClose}
                    className="fixed lg:top-[-20px] lg:right-[-50px] top-[-40px] right-[0px] z-50">
                    <Image
                      src={`/assets/general/Button close X.svg`}
                      alt={"icon"}
                      height={800}
                      width={800}
                      className="object-cover shadow-xl w-full h-full "
                    />
                  </button>
                  <div className="grid">
                  <Slider
                    {...sliderSettings}
                    ref={sliderRef}
                    className="lg:w-[900px] w-[350px]">
                    {images.map((item, index) => (
                      <div
                        key={index}
                        className="lg:w-[900px] w-[500px] max-h-[900px] items-center justify-center object-center relative rounded-2xl overflow-hidden">
                        <Image
                          src={`${item.filename}`}
                          alt={"icon"}
                          height={800}
                          width={800}
                          className="object-cover shadow-xl w-full h-full"
                        />
                      </div>
                    ))}
                  </Slider>
                  <div className="flex gap-8 lg:w-fit justify-between lg:mb-16   lg:px-0 px-20 h-fit lg:hidden block">
                    <button
                      className=""
                      onClick={() => sliderRef?.current?.slickPrev()}>
                      {" "}
                      <Image
                        src={"/assets/product-icons/arrow-left.svg"}
                        alt={"icon"}
                        width={20}
                        height={20}
                        className="w-14 h-14 hover:bg-slate-300 bg-white bg-opacity-90 rounded-[28px] p-4"
                      />
                    </button>
                    <button
                      className=""
                      onClick={() => sliderRef?.current?.slickNext()}>
                      {" "}
                      <Image
                        src={"/assets/product-icons/arrow-right.svg"}
                        alt={"icon"}
                        width={20}
                        height={20}
                        className="w-14 h-14 hover:bg-slate-300 bg-white bg-opacity-90 rounded-[28px] p-4"
                      />
                    </button>
                  </div>                    
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
