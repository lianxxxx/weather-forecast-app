function WeatherStats() {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="weather-stats p-6 text-center h-full  rounded-xl">
          Feels Like
        </div>
        <div className="weather-stats p-6 text-center h-full rounded-xl">
          Humidity
        </div>
        <div className="weather-stats p-6 text-center h-full rounded-xl">
          Wind
        </div>
        <div className="weather-stats p-6 text-center h-full rounded-xl">
          Precipitation
        </div>
      </div>
    </div>
  );
}

export default WeatherStats;
