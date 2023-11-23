import React from "react";
import ICSearch from "/icons/ICSearch.svg";
import ICImport from "/icons/ICImport.svg";

const SearchImport = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between">
      <div className="flex items-center bg-[#171717] border-2 border-[#333333] w-full lg:w-auto py-4 lg:py-2 rounded-[4px] pr-2 mb-4 lg:mb-0">
        <input
          type="text"
          className="bg-transparent focus:outline-none text-white px-4 w-full"
          placeholder="Search product"
        />
        <img src={ICSearch} alt="" />
      </div>
      <button className="flex items-center space-x-2 border-2 border-white py-4 lg:py-2 px-4 lg:px-8 text-white rounded-[4px] w-full lg:w-auto">
        <img src={ICImport} alt="" />
        <span>Import</span>
      </button>
    </div>
  );
};

export default SearchImport;
