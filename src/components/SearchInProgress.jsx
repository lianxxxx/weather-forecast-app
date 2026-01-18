import iconLoading from "../assets/img/icon-loading.svg";
function SearchInProgress() {
  return (
    <div className="  relative flex flex-col md:flex-row md:items-center md:justify-center  md:mr-27">
      <div className="search-progress absolute top-0 left-1/2 transform -translate-x-1/2 w-full md:w-lg rounded-xl   shadow-lg z-50 mt-3">
        <input
          type="search"
          alt="search"
          disabled
          placeholder="Search in progress"
          className="w-full md:w-lg  rounded-lg pl-12 pr-3 py-3"
        />
        <img
          src={iconLoading}
          alt="search"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5  pointer-events-none"
        />
      </div>
    </div>
  );
}

export default SearchInProgress;
