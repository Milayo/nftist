import React, { useState } from "react";
import NFTCard from "../card";
import DetailModal from "../modal";

const CardsSection = () => {
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
    <div className="mt-4 mx-6 xs:mx-4 md:mx-10 text-sky-800">
      <p className="text-xl">Trending NFTs</p>
      <div className="grid items-center grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        <NFTCard openModal={openModal} />
        <NFTCard openModal={openModal} />
        <NFTCard openModal={openModal} />
        <NFTCard openModal={openModal} />
        <NFTCard openModal={openModal} />
        <NFTCard openModal={openModal} />
        <NFTCard openModal={openModal} />
      </div>
      {isModalOpen && (
        <DetailModal setIsModalOpen={setIsModalOpen} closeModal={closeModal} />
      )}
    </div>
  );
};

export default CardsSection;
