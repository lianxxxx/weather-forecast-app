import bgSmall from "../assets/img/bg-today-small.svg";
import bgLarge from "../assets/img/bg-today-large.svg";
import { getWeatherIcon, getWeatherDescription } from "../utils/weatherIcons";
import { SyncLoader } from "react-spinners";
function WeatherCard({ weatherData, loading }) {
  if (loading) {
    return (
      <div className="mt-7 relative">
        <img src={bgSmall} alt="" className="md:hidden w-full" />
        <img src={bgLarge} alt="" className="hidden md:block w-full" />

        <div className="absolute inset-0 bg-[hsl(243,27%,20%)] flex  flex-col items-center justify-center rounded-2xl">
          <SyncLoader color="hsl(250, 6%, 84%)" size={12} margin={2} />
          <p className=" text-white mt-4 ">Loading....</p>
        </div>
      </div>
    );
  }
  if (!weatherData) {
    return (
      <div className="mt-7 relative">
        <img src={bgSmall} alt="" className="md:hidden w-full" />
        <img src={bgLarge} alt="" className="hidden md:block w-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-xl">No weather data</p>
        </div>
      </div>
    );
  }

  const { current } = weatherData;
  const temperature = Math.round(current.temperature_2m);
  const weatherIcon = getWeatherIcon(current.weather_code); // Get icon
  const weatherDesc = getWeatherDescription(current.weather_code); //  Get description

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="mt-7 relative">
      {/* Background images */}
      <img src={bgSmall} alt="" className="md:hidden w-full " />
      <img src={bgLarge} alt="" className="hidden md:block w-full " />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col  items-center pt-9 md:flex-row md:justify-between md:p-3 lg:p-5">
        <div className="">
          <h1 id="location" className="text-2xl 2xl:text-4xl">
            Manila, Philippines
          </h1>
          <p id="date" className=" mt-2 md:text-start 2xl:text-xl">
            {currentDate}
          </p>
        </div>
        <div className="flex justify-between items-center gap-8 md:gap-2   my-4">
          <img
            src={weatherIcon}
            alt={weatherDesc}
            className="icon-weather h-24"
          />
          <h1 id="temperature" className="italic text-7xl 2xl:text-8xl">
            {temperature}°
          </h1>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
