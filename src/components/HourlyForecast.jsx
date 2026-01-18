import { getWeatherIcon } from "../utils/weatherIcons";
import dropdown from "../assets/img/icon-dropdown.svg";
import HoursDropdown from "./HoursDropdown";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState, useMemo } from "react";
function HourlyForecast({ weatherData, loading }) {
  const [isHoursDropdownOpen, setHoursDropdownOpen] = useState(false);
  const daysArray = useMemo(() => {
    const days = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
      days.push(dayName);
    }

    return days;
  }, []); // Empty array = calculate once only

  const [selectedDay, setSelectedDay] = useState(daysArray[0] || "Monday");

  // Filter hourly data for selected day
  const getHourlyDataForDay = useMemo(() => {
    if (!weatherData?.hourly) return [];

    const { time, temperature_2m, weather_code } = weatherData.hourly;
    const now = new Date();

    // If today is selected, get next 8 hours from current time
    if (selectedDay === daysArray[0]) {
      const hourlyData = [];

      time.forEach((timestamp, index) => {
        const date = new Date(timestamp);

        // Get all future hours (including tomorrow if needed)
        if (date >= now) {
          const hour = date.getHours();
          const period = hour >= 12 ? "PM" : "AM";
          const displayHour = hour % 12 || 12;

          hourlyData.push({
            time: `${displayHour} ${period}`,
            temperature: Math.round(temperature_2m[index]),
            weatherCode: weather_code[index],
            icon: getWeatherIcon(weather_code[index]),
          });
        }
      });

      return hourlyData.slice(0, 8); // Get exactly 8 hours
    }

    // For other selected days, show hours for that specific day only
    const hourlyData = [];
    time.forEach((timestamp, index) => {
      const date = new Date(timestamp);
      const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

      if (dayName === selectedDay) {
        const hour = date.getHours();
        const period = hour >= 12 ? "PM" : "AM";
        const displayHour = hour % 12 || 12;

        hourlyData.push({
          time: `${displayHour} ${period}`,
          temperature: Math.round(temperature_2m[index]),
          weatherCode: weather_code[index],
          icon: getWeatherIcon(weather_code[index]),
        });
      }
    });

    return hourlyData.slice(0, 8);
  }, [weatherData, selectedDay, daysArray]);

  if (loading) {
    return (
      <div className="hourly-forecast-container my-8 rounded-2xl p-4 relative">
        <div className="flex justify-between mb-4">
          <h1 className="font-medium text-lg">Hourly Forecast</h1>
          <Skeleton
            width={120}
            height={32}
            baseColor="hsl(243, 24%, 24%)"
            highlightColor="hsl(243, 23%, 30%)"
          />
        </div>

        <div className="flex flex-col gap-3 ">
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="hourly-forecast rounded-lg h-full py-1 px-4 flex flex-row justify-between items-center"
              >
                <div className="flex items-center gap-3">
                  <Skeleton
                    circle
                    width={48}
                    height={48}
                    baseColor="hsl(243, 24%, 24%)"
                    highlightColor="hsl(243, 23%, 30%)"
                  />
                  <Skeleton
                    width={60}
                    height={20}
                    baseColor="hsl(243, 24%, 24%)"
                    highlightColor="hsl(243, 23%, 30%)"
                  />
                </div>
                <Skeleton
                  width={40}
                  height={20}
                  baseColor="hsl(243, 24%, 24%)"
                  highlightColor="hsl(243, 23%, 30%)"
                />
              </div>
            ))}
        </div>
      </div>
    );
  }
  return (
    <div className="hourly-forecast-container my-8 rounded-2xl p-4 relative">
      <div className="flex justify-between mb-4">
        <h1 className="font-medium text-lg">Hourly Forecast</h1>

        <button
          onClick={() => setHoursDropdownOpen((prev) => !prev)}
          className="unit-dropdown gap-3 rounded-lg px-2 py-1 flex items-center justify-between cursor-pointer"
        >
          <span>{selectedDay}</span>
          <img src={dropdown} alt="dropdown" className="w-4 h-4 shrink-0" />
        </button>
      </div>

      {isHoursDropdownOpen && (
        <HoursDropdown
          daysArray={daysArray}
          selectedDay={selectedDay}
          onSelectDay={(day) => {
            setSelectedDay(day);
            setHoursDropdownOpen(false); // Close dropdown after selection
          }}
        />
      )}

      <div className="flex flex-col gap-3">
        {getHourlyDataForDay.length > 0 ? (
          getHourlyDataForDay.map((hourData, index) => (
            <div
              key={index}
              className="hourly-forecast rounded-lg h-full py-1 px-4 flex flex-row justify-between items-center"
            >
              <div className="flex items-center gap-2">
                <img src={hourData.icon} alt="weather" className="w-12" />
                <span className="text-lg">{hourData.time}</span>
              </div>
              <h1 className="text-md">{hourData.temperature}°</h1>
            </div>
          ))
        ) : (
          <p>No hourly data available</p>
        )}
      </div>
    </div>
  );
}

export default HourlyForecast;
