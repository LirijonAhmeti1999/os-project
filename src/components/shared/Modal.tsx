import { Browser } from "@components/BrowserWindow/Browser";
import { Gallery } from "@components/Gallery/Gallery";
import { News } from "@components/News/News";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

interface Props {
  value: number;
  openModal: boolean;
}

export const Modal = (props: Props) => {
  let [isOpen, setIsOpen] = useState(props.openModal);
  const [comp, setComp] = useState<JSX.Element>();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    if (props.value == 1) {
      setComp(<Browser />);
    } else if (props.value == 2) {
      setComp(<News />);
    } else if (props.value == 3) {
      setComp(<Gallery />);
    }
    setIsOpen(props.openModal);
  }, [props.value]);

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
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-11/12 transform h-90 overflow-hidden rounded-2xl bg-gray-200 p-6 text-left align-middle shadow-xl transition-all">
                  <button
                    onClick={closeModal}
                    className="absolute right-2 top-2 w-4 h-4 bg-red-600 rounded-full"
                  ></button>
                  {comp && comp}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
