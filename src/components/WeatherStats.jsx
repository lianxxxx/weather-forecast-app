function WeatherStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      <div className="weather-stats p-4 text-start h-full  rounded-xl">
        <h1 className="weather-label">Feels Like</h1>
        <h1 className="weather-value text-3xl mt-3">64°</h1>
      </div>

      <div className="weather-stats p-4 text-start h-full rounded-xl">
        <h1 className="weather-label">Humidity</h1>
        <h1 className="weather-value text-3xl mt-3">46</h1>
      </div>

      <div className="weather-stats p-4 text-start h-full rounded-xl">
        <h1 className="weather-label">Wind</h1>
        <h1 className="weather-value text-3xl mt-3">9 mph</h1>
      </div>

      <div className="weather-stats p-4 text-start h-full rounded-xl">
        <h1 className="weather-label whitespace-nowrap truncate">
          Precipitation
        </h1>
        <h1 className="weather-value text-3xl mt-3">0 in</h1>
      </div>
    </div>
  );
}

export default WeatherStats;
