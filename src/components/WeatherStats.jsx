import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function WeatherStats({ weatherData, loading }) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="weather-stats p-4 text-start h-full  rounded-xl">
          <h1 className="weather-label">Feels Like</h1>
          <h1 className="weather-value text-3xl mt-3">
            <Skeleton
              height={25}
              baseColor="hsl(243, 24%, 24%)"
              highlightColor="hsl(243, 23%, 30%)"
            />
          </h1>
        </div>

        <div className="weather-stats p-4 text-start h-full rounded-xl">
          <h1 className="weather-label">Humidity</h1>
          <h1 className="weather-value text-3xl mt-3">
            <Skeleton
              height={25}
              baseColor="hsl(243, 24%, 24%)"
              highlightColor="hsl(243, 23%, 30%)"
            />
          </h1>
        </div>

        <div className="weather-stats p-4 text-start h-full rounded-xl">
          <h1 className="weather-label">Wind</h1>
          <h1 className="weather-value text-3xl mt-3">
            <Skeleton
              height={25}
              baseColor="hsl(243, 24%, 24%)"
              highlightColor="hsl(243, 23%, 30%)"
            />
          </h1>
        </div>

        <div className="weather-stats p-4 text-start h-full rounded-xl">
          <h1 className="weather-label whitespace-nowrap truncate">
            Precipitation
          </h1>
          <h1 className="weather-value text-3xl mt-3">
            <Skeleton
              height={25}
              baseColor="hsl(243, 24%, 24%)"
              highlightColor="hsl(243, 23%, 30%)"
            />
          </h1>
        </div>
      </div>
    );
  }
  if (!weatherData) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="weather-stats p-4 text-start h-full  rounded-xl">
          <h1 className="weather-label">Feels Like</h1>
          <h1 className="weather-value text-3xl mt-3">—</h1>
        </div>

        <div className="weather-stats p-4 text-start h-full rounded-xl">
          <h1 className="weather-label">Humidity</h1>
          <h1 className="weather-value text-3xl mt-3">—</h1>
        </div>

        <div className="weather-stats p-4 text-start h-full rounded-xl">
          <h1 className="weather-label">Wind</h1>
          <h1 className="weather-value text-3xl mt-3">—</h1>
        </div>

        <div className="weather-stats p-4 text-start h-full rounded-xl">
          <h1 className="weather-label whitespace-nowrap truncate">
            Precipitation
          </h1>
          <h1 className="weather-value text-3xl mt-3">—</h1>
        </div>
      </div>
    );
  }
  const { current } = weatherData;
  const humidity = current.relative_humidity_2m;
  const wind = current.wind_speed_10m;
  const temperature = Math.round(current.temperature_2m);
  const precipitation = current.precipitation;
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      <div className="weather-stats p-4 text-start h-full  rounded-xl">
        <h1 className="weather-label">Feels Like</h1>
        <h1 className="weather-value text-3xl mt-3">{temperature}°</h1>
      </div>

      <div className="weather-stats p-4 text-start h-full rounded-xl">
        <h1 className="weather-label">Humidity</h1>
        <h1 className="weather-value text-3xl mt-3">{humidity}</h1>
      </div>

      <div className="weather-stats p-4 text-start h-full rounded-xl">
        <h1 className="weather-label">Wind</h1>
        <h1 className="weather-value text-3xl mt-3">{wind} mph</h1>
      </div>

      <div className="weather-stats p-4 text-start h-full rounded-xl">
        <h1 className="weather-label whitespace-nowrap truncate">
          Precipitation
        </h1>
        <h1 className="weather-value text-3xl mt-3">{precipitation} in</h1>
      </div>
    </div>
  );
}

export default WeatherStats;
