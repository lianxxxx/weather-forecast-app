import { useState } from "react";
import iconSearch from "../assets/img/icon-search.svg";

function SearchBar({ onSearch, onInputChange }) {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    // Only call onInputChange if it exists
    if (onInputChange) {
      onInputChange(value); // ← Trigger suggestions
    }
  };

  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input);
      setInput(""); // Clear input after search
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-3">
      <div className="relative">
        <input
          type="search"
          alt="search"
          placeholder="Search for a place..."
          className="w-full md:w-lg  pl-12 pr-3 py-3 text-white cursor-pointer"
          value={input}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <img
          src={iconSearch}
          alt="search"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none cursor-pointer"
        />
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="search-btn w-full md:w-auto  mt-3 md:mt-0 "
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
