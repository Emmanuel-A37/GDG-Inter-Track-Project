import React, { useState, useEffect } from "react";
import { SearchIcon, Loader2 } from "lucide-react";
import useDebounce from "../hooks/useDebounce";

const Searchbar = ({ onSearch, placeholder = "Search for buildings, lecturers..." }) => {
  const [searchText, setSearchText] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchText = useDebounce(searchText, 500);

  useEffect(() => {
    if (debouncedSearchText !== undefined) {
      handleSearch(debouncedSearchText);
    }
  }, [debouncedSearchText]);

  const handleSearch = (query) => {
    if (!query.trim()) {
      if (onSearch) onSearch("");
      return;
    }
    
    setIsSearching(true);
    // Simulate API delay or actual search logic
    if (onSearch) {
      onSearch(query);
    }
    
    // Reset searching state after a small delay (or when parent updates)
    setTimeout(() => setIsSearching(false), 300);
  };

  return (
    <div className="relative flex justify-center items-center w-full group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
        {isSearching ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <SearchIcon className="w-5 h-5" />
        )}
      </div>

      <input
        name="search-input"
        value={searchText}
        placeholder={placeholder}
        className="flex-1 my-3 bg-white border border-gray-200 pl-12 pr-4 py-3 h-14 rounded-2xl shadow-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all text-gray-800"
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
