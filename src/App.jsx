import { useState, useEffect } from "react";
import "./App.css";
import DailyForecast from "./components/DailyForecast";
import ErrorStates from "./components/ErrorStates";
import Header from "./components/Header";
import HourlyForecast from "./components/HourlyForecast";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherStats from "./components/WeatherStats";
import NoResult from "./components/NoResult";
import Suggestions from "./components/Suggestions";
import SearchInProgress from "./components/SearchInProgress";
import {
  getWeatherByCity,
  getWeatherByCoords,
  getCitySuggestions,
  detectLocation,
} from "./services/weatherApi";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [location, setLocation] = useState("Manila, Philippines");
  const [noResult, setNoResult] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [unit, setUnit] = useState("metric");

  // Fetch city suggestions for autocomplete
  const fetchSuggestions = async (query) => {
    const results = await getCitySuggestions(query);

    if (results.length > 0) {
      setSuggestions(results);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  // Fetch weather data by city name
  const fetchWeatherByCity = async (cityName, isUserSearch = false) => {
    try {
      if (isUserSearch) {
        setSearching(true);
      } else {
        setLoading(true);
      }

      setNoResult(false);
      setApiError(false);
      setShowSuggestions(false);

      const result = await getWeatherByCity(cityName, unit);

      if (result.success) {
        setWeather(result.weatherData);
        setLocation(result.location);
        setNoResult(false);
        setApiError(false);
      } else {
        if (result.errorType === "NOT_FOUND") {
          setNoResult(true);
          setApiError(false);
        } else if (result.errorType === "API_ERROR") {
          setApiError(true);
          setNoResult(false);
        }
      }
    } catch (error) {
      console.error("Failed to fetch weather:", error);
      setApiError(true);
      setNoResult(false);
    } finally {
      setLoading(false);
      setSearching(false);
    }
  };

  // Detect user's location (geolocation → IP → Manila)
  const detectUserLocation = async () => {
    const locationData = await detectLocation();

    const result = await getWeatherByCoords(
      locationData.latitude,
      locationData.longitude,
      unit,
    );

    if (result.success) {
      setWeather(result.weatherData);
      setLocation(result.location);
    }

    setLoading(false);
  };

  useEffect(() => {
    detectUserLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle unit change (metric/imperial)
  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
    setSearching(false);
    if (weather && location) {
      setLoading(true);
      fetchWeatherByCity(location, false);
    }
  };
  return (
    <div className=" p-4 md:px-8 md:py-6 lg:px-16 xl:px-20 2xl:px-24">
      <Header
        showTitle={!apiError}
        currentUnit={unit}
        onUnitChange={handleUnitChange}
      />

      {apiError ? (
        <ErrorStates onRetry={() => fetchWeatherByCity(location, true)} />
      ) : (
        <>
          <SearchBar
            onSearch={(city) => fetchWeatherByCity(city, true)}
            onInputChange={fetchSuggestions}
            onSelectSuggestion={(city) => {
              setShowSuggestions(false);
              fetchWeatherByCity(city, true);
            }}
          />

          {/* Show Suggestions while typing */}
          {showSuggestions && suggestions.length > 0 && (
            <Suggestions
              suggestions={suggestions}
              onSelectCity={(city) => {
                setShowSuggestions(false);
                fetchWeatherByCity(city, true);
              }}
            />
          )}

          {/* Show SearchInProgress ONLY during user search */}
          {searching && <SearchInProgress />}

          {/* Show NoResult if city not found */}
          {noResult ? (
            <NoResult />
          ) : (
            // Weather UI - uses 'loading' prop for skeletons
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-8 space-y-4">
                <WeatherCard
                  weatherData={weather}
                  loading={loading} // ← Skeleton on initial load
                  location={location}
                />
                <WeatherStats weatherData={weather} loading={loading} />
                <DailyForecast weatherData={weather} loading={loading} />
              </div>

              <div className="col-span-12 md:col-span-4">
                <HourlyForecast weatherData={weather} loading={loading} />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
