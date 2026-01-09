import { useState } from "react";
import { SearchIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchText.trim()) return;
    navigate(`/home/search?q=${encodeURIComponent(searchText)}`);
  };

  return (
    <div className="relative flex items-center w-full px-4 py-3">
      <button
        onClick={handleSearch}
        className="absolute left-5 top-1/2 -translate-y-1/2"
      >
        <SearchIcon size={24} />
      </button>

      <input
        value={searchText}
        className="flex-1 bg-white pl-10 h-14 rounded-md focus:outline-none focus:border-primary focus:border transition-all "
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
    </div>
  );
};

export default Searchbar;
