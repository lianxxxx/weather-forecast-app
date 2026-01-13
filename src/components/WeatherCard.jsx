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
      <div className="absolute inset-0 flex flex-col  items-center text-amber-50 pt-9">
        <h1 id="location">Berline, Germany</h1>
        <p id="date" className=" mt-2">
          Tuesday, Aug 5, 2025
        </p>
        <div className="flex space-around ">
          <img src={iconSunny} alt="sunny" className="icon-weather mt-2 h-12" />
          <h1 id="temperature" className=" italic font-semibold">
            68°
          </h1>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
