// PopUpComingSoon.tsx

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Button from "../atomic/Button";
import Image from "next/image";

interface PopUpComingSoonProps {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const PopUpComingSoon: React.FC<PopUpComingSoonProps> = ({
  isOpen,
  openModal,
  closeModal,
}) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Image
                    src={"/assets/general/PopUp.png"}
                    alt="Image"
                    width={500}
                    height={500}
                    className="w-full"
                  />
                  <Dialog.Title
                    as="h3"
                    className=" text-center text-indigo-900 text-lg font-extrabold font-['Sen'] leading-7">
                    Our Upcoming Article Is on Its Way!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-center text-black text-sm font-normal font-['Sen'] leading-tight">
                      As you eagerly await, we invite you to explore our array
                      of currently stocked products.
                    </p>
                  </div>

                  <div className="mt-4 flex w-full gap-3">
                    <button
                      type="button"
                      className="inline-flex flex-1 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}>
                      Keep Waiting..
                    </button>
                    <div className="flex-1 ">
                      <Button
                        link={"/product"}
                        text={"View Product"}
                        variant={"Primary"}
                        classNames=""
                      />
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
};

export default PopUpComingSoon;
