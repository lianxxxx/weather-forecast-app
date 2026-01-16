import { useState, useEffect } from "react";
import "./App.css";
import DailyForecast from "./components/DailyForecast";
import ErrorStates from "./components/ErrorStates";
import Header from "./components/Header";
import HourlyForecast from "./components/HourlyForecast";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherStats from "./components/WeatherStats";
import { getWeather } from "./services/weatherApi";
function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        // Manila coordinates for now
        const data = await getWeather(14.5995, 120.9842);
        console.log("Weather data:", data); // Check console!
        setWeather(data);
      } catch (error) {
        console.error("Failed to fetch weather:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);
  return (
    <>
      <Header />
      <SearchBar />
      <div className="grid grid-cols-12 gap-6">
        {/* Left side: 8 columns */}
        <div className="col-span-12 md:col-span-8 space-y-4">
          <WeatherCard weatherData={weather} loading={loading} />
          <WeatherStats weatherData={weather} loading={loading} />
          <DailyForecast weatherData={weather} />
        </div>

        {/* Right side: 4 columns */}
        <div className="col-span-12 md:col-span-4">
          <HourlyForecast />
        </div>
      </div>
    </>
  );
}

export default App;
