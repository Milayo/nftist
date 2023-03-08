import React, { useState } from "react";
import DetailModal from "../modal";

const NFTCard = ({
  image,
  price,
  title,
  owner,
  token,
  description,
  collectionUrl,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="card dark:bg-slate-800 dark:shadow-none dark:text-white">
        <div className="overflow-hidden rounded-t-lg">
          <img
            src={image}
            className="h-72 object-cover overflow-hidden w-full hover:scale-125 transition-transform"
          />
        </div>

        <div className="p-4">
          <div className="flex justify-between items-center">
            <div className="">
              <p>{title}</p>
              <p className="text-sm text-sky-800 dark:text-slate-500">
                by {owner.slice(0, 7) + "..."}
              </p>
            </div>

            <div>{price} ETH</div>
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
      {isModalOpen && (
        <DetailModal
          setIsModalOpen={setIsModalOpen}
          closeModal={closeModal}
          owner={owner}
          price={price}
          image={image}
          token={token}
          description={description}
          collectionUrl={collectionUrl}
          title={title}
        />
      )}
    </>
  );
};

export default NFTCard;
