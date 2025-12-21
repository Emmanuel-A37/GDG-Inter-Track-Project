import React from "react";
import { useState } from "react";
import { SearchIcon } from "lucide-react";

const Searchbar = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    if (!searchText.trim()) {
      console.log("Please search for something");
      return;
    }
    console.log("You searched for: " + searchText);
  };

  return (
    <div className="relative flex justify-center items-center w-full">
      <button
        onClick={handleSearch}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-l-md"
        aria-label="search"
      >
        <SearchIcon/>
      </button>

      <input
        name="search-input"
        value={searchText}
        className="flex-1 my-3 border border-gray-300 pl-10 pr-4 py-3 h-14 rounded-r-md focus:outline-none"
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
    </div>
  );
};

export default Searchbar;
