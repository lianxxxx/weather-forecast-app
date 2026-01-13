import "./App.css";
import DailyForecast from "./components/DailyForecast";
import Header from "./components/Header";
import HourlyForecast from "./components/HourlyForecast";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherStats from "./components/WeatherStats";
function App() {
  return (
    <>
      <Header />
      <SearchBar />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* LEFT COLUMN - 2/3 width */}
        <div className="md:col-span-2 space-y-4">
          <WeatherCard />
          <WeatherStats /> {/* 4 small boxes */}
          <DailyForecast />
        </div>

        {/* RIGHT COLUMN - 1/3 width */}
        <div>
          <HourlyForecast /> {/* 8 vertical items, same height as left */}
        </div>
      </div>
    </>
  );
}

export default App;
