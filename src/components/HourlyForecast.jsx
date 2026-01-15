import HoursDropdown from "./HoursDropdown";
import iconRain from "../assets/img/icon-rain.webp";
import iconDrizzle from "../assets/img/icon-drizzle.webp";
import iconSunny from "../assets/img/icon-sunny.webp";
import iconPartlyCloudy from "../assets/img/icon-partly-cloudy.webp";
import iconSnow from "../assets/img/icon-snow.webp";
import iconStorm from "../assets/img/icon-storm.webp";
import iconFog from "../assets/img/icon-fog.webp";
import iconOvercast from "../assets/img/icon-overcast.webp";
import dropdown from "../assets/img/icon-dropdown.svg";
import { useState } from "react";

function HourlyForecast() {
  const [isHoursDropdownOpen, setHoursDropdownOpen] = useState(false);
  return (
    <div className="hourly-forecast-container my-8 rounded-2xl p-4 relative">
      <div className="flex justify-between mb-4">
        <h1 className="font-medium text-lg">Hourly Forecast</h1>

        <button
          onClick={() => setHoursDropdownOpen((prev) => !prev)}
          className="unit-dropdown gap-3 rounded-lg px-2 py-1 flex items-center justify-between"
        >
          <span>Monday</span>
          <img src={dropdown} alt="dropdown" className="w-4 h-4 shrink-0" />
        </button>
      </div>

      {isHoursDropdownOpen && <HoursDropdown />}

      <div className="flex flex-col gap-3">
        <div className="hourly-forecast rounded-lg h-full py-1 px-4 flex flex-row justify-between items-center">
          <div className="flex  items-center gap-2">
            <img src={iconDrizzle} alt="" className="w-12" />{" "}
            <span className="text-lg ">3 PM</span>
          </div>
          <h1 className="text-md ">68°</h1>
        </div>
        <div className="hourly-forecast rounded-lg h-full py-1 px-4 flex flex-row justify-between items-center">
          <div className="flex  items-center gap-2">
            <img src={iconRain} alt="" className="w-12" />{" "}
            <span className="text-lg ">4 PM</span>
          </div>
          <h1 className="text-md ">68°</h1>
        </div>
        <div className="hourly-forecast rounded-lg h-full py-1 px-4 flex flex-row justify-between items-center">
          <div className="flex  items-center gap-2">
            <img src={iconSunny} alt="" className="w-12" />{" "}
            <span className="text-lg ">5 PM</span>
          </div>
          <h1 className="text-md ">68°</h1>
        </div>
        <div className="hourly-forecast rounded-lg h-full py-1 px-4 flex flex-row justify-between items-center">
          <div className="flex  items-center gap-2">
            <img src={iconPartlyCloudy} alt="" className="w-12" />{" "}
            <span className="text-lg ">6 PM</span>
          </div>
          <h1 className="text-md ">68°</h1>
        </div>
        <div className="hourly-forecast rounded-lg h-full py-1 px-4 flex flex-row justify-between items-center">
          <div className="flex  items-center gap-2">
            <img src={iconSnow} alt="" className="w-12" />{" "}
            <span className="text-lg ">7 PM</span>
          </div>
          <h1 className="text-md ">68°</h1>
        </div>
        <div className="hourly-forecast rounded-lg h-full py-1 px-4 flex flex-row justify-between items-center">
          <div className="flex  items-center gap-2">
            <img src={iconStorm} alt="" className="w-12" />{" "}
            <span className="text-lg ">8 PM</span>
          </div>
          <h1 className="text-md ">68°</h1>
        </div>
        <div className="hourly-forecast rounded-lg h-full py-1 px-4 flex flex-row justify-between items-center">
          <div className="flex  items-center gap-2">
            <img src={iconFog} alt="" className="w-12" />{" "}
            <span className="text-lg ">9 PM</span>
          </div>
          <h1 className="text-md ">68°</h1>
        </div>
        <div className="hourly-forecast rounded-lg h-full py-1 px-4 flex flex-row justify-between items-center">
          <div className="flex  items-center gap-2">
            <img src={iconOvercast} alt="" className="w-12" />{" "}
            <span className="text-lg ">10 PM</span>
          </div>
          <h1 className="text-md ">68°</h1>
        </div>
      </div>
    </div>
  );
}

export default HourlyForecast;
