import React from "react";
import NftImage from "../../assets/NftImage3.jpg";

const NFTCard = ({ openModal }) => {
  return (
    <div className="card dark:bg-slate-800 dark:shadow-none dark:text-white">
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={NftImage}
          className="h-72 object-cover overflow-hidden w-full hover:scale-125 transition-transform"
        />
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="">
            <p>Aqua Effect</p>
            <p className="text-sm text-sky-800 dark:text-slate-500">
              by Bella Noviac
            </p>
          </div>

          <div>0.05 ETH</div>
        </div>
        <div className="grid">
          <button
            className="mt-4 p-2 px-5 mx-auto bg-blue-900 text-white uppercase dark:border-2 dark:border-blue-900 dark:bg-transparent"
            onClick={openModal}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
