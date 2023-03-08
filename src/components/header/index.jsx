import React from "react";
import SearchBar from "../searchbar";
import Switcher from "../switcher";

const Header = () => {
  return (
    <nav className="flex justify-between p-7 px-5 xs:px-10">
      <div className=" text-2xl xs:text-3xl text-blue-900 dark:text-white font-bold">
        Nftist
      </div>
      <SearchBar />
      <Switcher />
    </nav>
  );
};

export default Header;
