function Suggestions({ suggestions, onSelectCity }) {
  return (
    <div className="  relative flex flex-col md:flex-row md:items-center md:justify-center  md:mr-27">
      {/* Absolute positioned dropdown */}
      <div className="city-suggestion absolute top-0 left-1/2 transform -translate-x-1/2 w-full md:w-lg rounded-xl  p-2 shadow-lg z-50 mt-3">
        {suggestions.map((city, index) => (
          <div
            key={index}
            onClick={() => onSelectCity(city.name)}
            className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded transition-colors"
          >
            <p className="text-white text-sm text-start ">
              {city.name || "Unknown"}
              {city.country || city.admin1
                ? `, ${city.country || city.admin1}`
                : ""}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
