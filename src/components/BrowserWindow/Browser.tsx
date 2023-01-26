import { Dialog } from "@headlessui/react";
import "./browser.css";

export const Browser = () => {
  // console.log({ data, isLoading, error });
  return (
    <div className="relative h-full">
      <div className="flex flex-col justify-center items-center text-center browser-box">
        <Dialog.Title
          as="h1"
          className="text-5xl font-bold leading-6 text-gray-900 mb-14"
        >
          Google
        </Dialog.Title>
        <input
          type="text"
          className="rounded-md mb-5 border-r-2 focus:outline-none focus:ring focus:ring-green-400"
        />
        <button className="mt-4 bg-sky-200 hover:bg-sky-300 text-black font-bold py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </div>
  );
};
