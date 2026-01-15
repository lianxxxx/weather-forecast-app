import iconSearch from "../assets/img/icon-search.svg";
function SearchBar() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-3">
      <div className="relative ">
        <input
          type="search"
          alt="search"
          placeholder="Search for a place..."
          className="w-full md:w-lg  rounded-lg pl-12 pr-3 py-3     text-white "
        />
        <img
          src={iconSearch}
          alt="search"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5  pointer-events-none"
        />
      </div>
      {/* Search Button */}
      <button className="search-btn w-full md:w-auto p-3 rounded-lg mt-3 md:mt-0 md:px-6">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
