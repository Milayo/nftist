import React, { useEffect, useState } from "react";
import { Alchemy, Network, Nft } from "alchemy-sdk";
import { XMarkIcon } from "@heroicons/react/24/outline";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(config);

const DetailModal = ({
  closeModal,
  owner,
  price,
  image,
  description,
  title,
}) => {
  return (
    <div class="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-900 bg-opacity-50 h-screen">
      <div class="bg-white rounded-lg shadow-lg overflow-auto max-w-4xl w-5/6 relative h-3/5 xs:h-3/4">
        <div class="relative flex h-full flex-col xs:flex-row">
          <img
            src={image}
            className="object-cover w-full xs:w-1/2 hidden xs:block"
          />
          <div class="text-gray-700 w-full xs:w-1/2 px-4 sm:px-8 justify-center flex flex-col gap-3 md:gap-6 h-full">
            <XMarkIcon
              className="w-6 absolute top-4 right-4 cursor-pointer"
              onClick={closeModal}
            />
            <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
            <p>Owned by {owner} </p>
            <p className="text-sm text-justify">{description}</p>
            <div className="flex justify-between text-base md:text-xl">
              <p>Floor Price:</p>
              <p>{price} ETH</p>
            </div>
            <button className="mt-4 p-2 px-5 mx-auto dark:text-white dark:bg-blue-900 text-blue-900 border-2 border-blue-900 uppercase">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
