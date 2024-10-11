import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded-md p-1 pl-10 focus:outline-none focus:border-blue-400 shadow-sm"
      />
      <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
    </div>
  );
};

export default SearchBar;
