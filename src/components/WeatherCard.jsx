import bgSmall from "../assets/img/bg-today-small.svg";
import bgLarge from "../assets/img/bg-today-large.svg";
import iconSunny from "../assets/img/icon-sunny.webp";
function WeatherCard() {
  return (
    <div className="mt-7 relative">
      {/* Background images */}
      <img src={bgSmall} alt="" className="md:hidden w-full " />
      <img src={bgLarge} alt="" className="hidden md:block w-full " />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col  items-center pt-9 md:flex-row md:justify-between md:p-3 lg:p-5">
        <div className="">
          <h1 id="location" className="text-2xl 2xl:text-4xl">
            Berline, Germany
          </h1>
          <p id="date" className=" mt-2 md:text-start 2xl:text-xl">
            Tuesday, Aug 5, 2025
          </p>
        </div>
        <div className="flex justify-between items-center gap-8 md:gap-2   my-4">
          <img src={iconSunny} alt="sunny" className="icon-weather h-24" />
          <h1 id="temperature" className="italic text-7xl 2xl:text-8xl">
            68°
          </h1>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
