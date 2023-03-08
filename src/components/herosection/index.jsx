import React from "react";
import NftImage1 from "../../assets/NftImage1.jpg";
import NftImage2 from "../../assets/NftImage2.jpg";
import NftImage3 from "../../assets/NftImage3.jpg";

const HeroSection = () => {
  return (
    <div className="flex px-20 py-16 border-red-500 border-8">
      <div className="text-5xl text-blue-900 border-black border-8">
        Discover, collect and sell unique NFTs.
      </div>
      <div className="flex gap-2">
        <div className="w-60 bg-gray-500">
          <img src={NftImage3} className="object-fill h-5/6" />
          <div>
            <div>Aqua Effect</div>
            <div>by Bella Noviac</div>
          </div>
        </div>
        <div>
          <div className="h-60 w-60 bg-gray-500">
            <img src={NftImage1} className="object-fill h-4/6" />
            <div>
              <div>Aqua Effect</div>
              <div>by Bella Noviac</div>
            </div>
          </div>
          <div className="h-60 w-60 bg-gray-500 border-3 mt-2">
            <img src={NftImage2} className="object-fill h-4/6" />
            <div>
              <div>Aqua Effect</div>
              <div>by Bella Noviac</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
