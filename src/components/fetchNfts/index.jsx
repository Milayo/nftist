import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Alchemy, Network } from "alchemy-sdk";
import CardsSection from "../cards";
import Loader from "../loader";
import NullPage from "../nullpage";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(config);

const FetchNfts = () => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const address = searchParams.get("contractAddress");

  const fetchUrl = `https://eth-mainnet.g.alchemy.com/nft/v2/${process.env.REACT_APP_API_KEY}/getNFTsForCollection?contractAddress=${address}&withMetadata=true&limit=12`;

  // console.log(
  //   `https://eth-mainnet.g.alchemy.com/nft/v2/${
  //     process.env.REACT_APP_API_KEY
  //   }/getNFTsForCollection?contractAddress=${add.trim()}&withMetadata=true&limit=12`
  // );

  // const address = "0xf7479f9527c57167caff6386daa588b7bf05727f";

  const fetchData = async () => {
    setLoading(true);

    try {
      let AllNfts = [];
      const response = await fetch(fetchUrl);

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
          collectionUrl: price.openSea.collectionUrl,
          price: price.openSea.floorPrice,
        };

        AllNfts = [...AllNfts, nft];
      }
      console.log(AllNfts);
      setNfts(AllNfts);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [address]);

  return (
    <div>
      {loading && <Loader />}
      {!loading && nfts.length === 0 && <NullPage />}
      {!loading && nfts.length > 0 && <CardsSection nfts={nfts} />}
    </div>
  );
};

export default FetchNfts;
