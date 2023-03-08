import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  const [contractAddress, setContractAddress] = useState("");
  let [, setSearchParams] = useSearchParams();

  const handleSearch = (e) => {
    setContractAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contractAddress) {
      setSearchParams({ contractAddress });
    } else {
      setSearchParams({});
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearchParams({ contractAddress });
    }
  };

  return (
    <div className="relative dark:text-white text-slate-800 cursor-pointer w-1/2 sm:w-1/3 ">
      <input
        className="w-full h-10 px-5 pr-10 dark:bg-slate-800 border-2 bg-transparent border-slate-800 rounded-full text-sm focus:outline-none"
        type="search"
        name="search"
        value={contractAddress}
        onChange={handleSearch}
        placeholder="Enter Contract Address"
        onKeyDown={handleKeyPress}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="h-5 w-5 absolute right-0 top-0 mt-2.5 mr-4"
      >
        <MagnifyingGlassIcon />
      </button>
    </div>
  );
};

export default SearchBar;
