import React, { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import useColorMode from "../../hooks/useColorMode";

const Switcher = () => {
  const toggleDarkMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  const [colorMode, setColorMode] = useColorMode();
  console.log(colorMode);

  return (
    <div>
      <button className="w-8" onClick={toggleDarkMode}>
        {colorMode === "light" ? (
          <MoonIcon />
        ) : (
          <SunIcon className="text-white" />
        )}
      </button>
    </div>
  );
};

export default Switcher;
