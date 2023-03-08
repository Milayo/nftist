import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  return (
    <div className="relative dark:text-white text-slate-800 cursor-pointer w-1/2 sm:w-1/3 ">
      <input
        className="w-full h-10 px-5 pr-10 dark:bg-slate-800 border-2 bg-transparent border-slate-800 rounded-full text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Enter Contract Address"
      />
      <button
        type="submit"
        className="h-5 w-5 absolute right-0 top-0 mt-2.5 mr-4"
      >
        <MagnifyingGlassIcon className="" />
      </button>
    </div>
  );
};

export default SearchBar;
