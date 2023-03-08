import React, { useEffect, useState } from "react";
import { Alchemy, Network, Nft } from "alchemy-sdk";

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
    try {
      const response = await fetch(
        `https://eth-mainnet.g.alchemy.com/nft/v2/${process.env.REACT_APP_API_KEY}/getNFTsForCollection?contractAddress=${address}&withMetadata=true&limit=12`
      );
      const data = await response.json();
      const res = data[nfts];
      console.log(data.nfts);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>FetchNfts</div>;
};

export default FetchNfts;
