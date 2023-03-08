import React, { useEffect, useState } from "react";
import { Alchemy, Network, Nft } from "alchemy-sdk";
import CardsSection from "../cards";
import Loader from "../loader";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(config);

const FetchNfts = () => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);

  const address = "0xf7479f9527c57167caff6386daa588b7bf05727f";

  const fetchData = async () => {
    setLoading(true);
    try {
      let AllNfts = [];
      const response = await fetch(
        `https://eth-mainnet.g.alchemy.com/nft/v2/${process.env.REACT_APP_API_KEY}/getNFTsForCollection?contractAddress=${address}&withMetadata=true&limit=12`
      );
      const data = await response.json();
      const res = data.nfts;

      for (let item of res) {
        const token = item.id.tokenId;
        const title = item.title;
        const description = item.description;
        const image = item.media[0].gateway;
        const owner = await alchemy.nft.getOwnersForNft(address, token);
        const price = await alchemy.nft.getFloorPrice(address);
        const nft = {
          owner: owner.owners[0],
          token,
          title,
          description,
          image,
          price: price.openSea.floorPrice,
        };
        AllNfts = [...AllNfts, nft];
      }
      setNfts(AllNfts);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {!loading && <CardsSection nfts={nfts} />}
    </div>
  );
};

export default FetchNfts;
