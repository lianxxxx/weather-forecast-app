import { getWeatherIcon } from "../utils/weatherIcons";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function DailyForecast({ weatherData, loading }) {
  if (loading) {
    return (
      <div className="mt-6">
        <h1 className="daily-forecast-title text-start py-3">Daily Forecast</h1>

        <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
          {Array(7)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="daily-forecast h-full rounded-xl py-3 flex flex-col items-center"
              >
                {/* Day */}
                <Skeleton
                  width={32}
                  height={16}
                  baseColor="hsl(243, 24%, 24%)"
                  highlightColor="hsl(243, 23%, 30%)"
                />

                {/* Icon */}
                <Skeleton
                  circle
                  width={48}
                  height={48}
                  className="my-2"
                  baseColor="hsl(243, 24%, 24%)"
                  highlightColor="hsl(243, 23%, 30%)"
                />

                {/* Min / Max */}
                <div className="flex justify-around w-full mt-2">
                  <Skeleton
                    width={24}
                    height={14}
                    baseColor="hsl(243, 24%, 24%)"
                    highlightColor="hsl(243, 23%, 30%)"
                  />
                  <Skeleton
                    width={24}
                    height={14}
                    baseColor="hsl(243, 24%, 24%)"
                    highlightColor="hsl(243, 23%, 30%)"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
  const { daily } = weatherData;
  const temperatureMin = daily.temperature_2m_min;
  const temperatureMax = daily.temperature_2m_max;

  return (
    <div className="mt-6">
      <h1 className="daily-forecast-title text-start py-3 ">Daily Forecast</h1>
      <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
        {daily.time.map((date, index) => {
          const dayName = new Date(date).toLocaleDateString("en-US", {
            weekday: "short",
          });
          const weatherIcon = getWeatherIcon(daily.weather_code[index]);
          return (
            <div
              className="daily-forecast h-full rounded-xl py-3 flex flex-col items-center"
              key={date}
            >
              <h1>{dayName}</h1>
              <img src={weatherIcon} alt="" className="w-12 h-12 my-2" />
              <div className="flex justify-around w-full mt-2">
                <small>{temperatureMin[index]}°</small>
                <small>{temperatureMax[index]}°</small>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DailyForecast;
