import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center m-40 justify-center space-x-2 animate-pulse">
      <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
      <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
      <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
    </div>
  );
};

export default Loader;
