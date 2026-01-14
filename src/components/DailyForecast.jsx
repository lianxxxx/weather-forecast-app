import iconRain from "../assets/img/icon-rain.webp";
import iconDrizzle from "../assets/img/icon-drizzle.webp";
import iconSunny from "../assets/img/icon-sunny.webp";
import iconPartlyCloudy from "../assets/img/icon-partly-cloudy.webp";
import iconSnow from "../assets/img/icon-snow.webp";
import iconStorm from "../assets/img/icon-storm.webp";
import iconFog from "../assets/img/icon-fog.webp";

function DailyForecast() {
  return (
    <div className="mt-6">
      <h1 className="daily-forecast-title text-start py-3 ">Daily Forecast</h1>
      <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
        <div className="daily-forecast h-full rounded-xl py-3 flex flex-col items-center">
          <h1>Mon</h1>
          <img src={iconRain} alt="" className="w-12 h-12 my-2" />
          <div className="flex justify-around w-full mt-2">
            <small>68°</small>
            <small>57°</small>
          </div>
        </div>

        <div className="daily-forecast h-full rounded-xl py-3 flex flex-col items-center">
          <h1>Tues</h1>
          <img src={iconDrizzle} alt="" className="w-12 h-12 my-2" />
          <div className="flex justify-around w-full mt-2">
            <small>68°</small>
            <small>57°</small>
          </div>
        </div>

        <div className="daily-forecast h-full rounded-xl py-3 flex flex-col items-center">
          <h1>Wed</h1>
          <img src={iconSunny} alt="" className="w-12 h-12 my-2" />
          <div className="flex justify-around w-full mt-2">
            <small>68°</small>
            <small>57°</small>
          </div>
        </div>

        <div className="daily-forecast h-full rounded-xl py-3 flex flex-col items-center">
          <h1>Thur</h1>
          <img src={iconPartlyCloudy} alt="" className="w-12 h-12 my-2" />
          <div className="flex justify-around w-full mt-2">
            <small>68°</small>
            <small>57°</small>
          </div>
        </div>

        <div className="daily-forecast h-full rounded-xl py-3 flex flex-col items-center">
          <h1>Fri</h1>
          <img src={iconFog} alt="" className="w-12 h-12 my-2" />
          <div className="flex justify-around w-full mt-2">
            <small>68°</small>
            <small>57°</small>
          </div>
        </div>

        <div className="daily-forecast h-full rounded-xl py-3 flex flex-col items-center">
          <h1>Sat</h1>
          <img src={iconSnow} alt="" className="w-12 h-12 my-2" />
          <div className="flex justify-around w-full mt-2">
            <small>68°</small>
            <small>57°</small>
          </div>
        </div>

        <div className="daily-forecast h-full rounded-xl py-3 flex flex-col items-center">
          <h1>Sun</h1>
          <img src={iconStorm} alt="" className="w-12 h-12 my-2" />
          <div className="flex justify-around w-full mt-2">
            <small>68°</small>
            <small>57°</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyForecast;
