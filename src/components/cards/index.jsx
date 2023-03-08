import React, { useState } from "react";
import NFTCard from "../card";

const CardsSection = ({ nfts }) => {
  return (
    <div className="mt-4 mx-6 xs:mx-4 md:mx-10 text-sky-800">
      <p className="text-xl">Top NFTs</p>
      <div className="grid items-center grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {nfts.length > 0 &&
          nfts.map((nft, index) => (
            <div key={index}>
              <NFTCard price={nft.price} image={nft.image} {...nft} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardsSection;
