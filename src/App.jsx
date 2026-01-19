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
import { getWeatherByCity, getWeatherByCoords } from "./services/weatherApi";
import axios from "axios";

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

  const fetchSuggestions = async (query) => {
    if (query.length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    try {
      const response = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search`,
        {
          params: {
            name: query,
            count: 5,
          },
        }
      );

      if (response.data.results) {
        setSuggestions(response.data.results);
        setShowSuggestions(true);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

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
  const detectUserLocation = async () => {
    // Try Geolocation first
    if (navigator.geolocation) {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            timeout: 5000, // 5 seconds timeout
          });
        });

        const { latitude, longitude } = position.coords;
        console.log("✅ Geolocation success:", latitude, longitude);

        // Fetch weather using coordinates
        const result = await getWeatherByCoords(latitude, longitude, unit);

        if (result.success) {
          setWeather(result.weatherData);
          setLocation(result.location);
          setLoading(false);
          return true;
        }
      } catch (geoError) {
        console.log("❌ Geolocation failed:", geoError.message);
        // Continue to IP-based fallback
      }
    }

    // Fallback: IP-based location
    try {
      console.log("🌐 Trying IP-based location...");
      const ipResponse = await axios.get("https://ipapi.co/json/");
      const { city, latitude, longitude } = ipResponse.data;

      console.log("✅ IP-based location:", city, latitude, longitude);

      const result = await getWeatherByCoords(latitude, longitude, unit);

      if (result.success) {
        setWeather(result.weatherData);
        setLocation(result.location);
        setLoading(false);
        return true;
      }
    } catch (ipError) {
      console.log("❌ IP-based location failed:", ipError.message);
    }

    // Final fallback: Manila
    console.log("🇵🇭 Using default: Manila");
    await fetchWeatherByCity("Manila", false);
    return false;
  };
  useEffect(() => {
    detectUserLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
