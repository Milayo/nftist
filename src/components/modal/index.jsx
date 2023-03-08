import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import NftImage from "../../assets/NftImage3.jpg";

const DetailModal = ({ closeModal }) => {
  return (
    <div class="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-900 bg-opacity-50 h-screen">
      <div class="bg-white rounded-lg shadow-lg overflow-auto max-w-4xl w-5/6 relative h-3/5 xs:h-3/4">
        <div class="relative flex h-full flex-col xs:flex-row">
          <img
            src={NftImage}
            className="object-cover w-full xs:w-1/2 hidden xs:block"
          />
          <div class="text-gray-700 w-full xs:w-1/2 px-4 sm:px-8 justify-center flex flex-col gap-3 md:gap-6 h-full">
            <XMarkIcon
              className="w-6 absolute top-4 right-4 cursor-pointer"
              onClick={closeModal}
            />
            <h3 className="text-2xl md:text-3xl font-bold">
              Crypto Punk Bros #344
            </h3>
            <p>Owned by Mila</p>
            <p className="text-sm text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              excepturi non laborum consequatur ab fuga, neque deleniti ullam
              rem eos ea architecto laudantium quis obcaecati
            </p>
            <div className="flex justify-between text-base md:text-xl">
              <p>Current Price:</p>
              <p>$123</p>
            </div>
            <button className="mt-4 p-2 px-5 mx-auto text-blue-900 border-2 border-blue-900 uppercase">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
