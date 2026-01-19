import axios from "axios";

const BASE_URL = "https://api.open-meteo.com/v1";
const GEO_URL = "https://geocoding-api.open-meteo.com/v1";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 seconds
});

export const getWeather = async (latitude, longitude, unit = "metric") => {
  try {
    const response = await api.get("/forecast", {
      params: {
        latitude: latitude,
        longitude: longitude,
        current:
          "temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,precipitation",
        hourly:
          "temperature_2m,weather_code,precipitation_probability,precipitation,relative_humidity_2m,wind_speed_10m",
        daily: "temperature_2m_max,temperature_2m_min,weather_code",
        timezone: "auto",
        temperature_unit: unit === "metric" ? "celsius" : "fahrenheit",
        wind_speed_unit: unit === "metric" ? "kmh" : "mph",
        precipitation_unit: unit === "metric" ? "mm" : "inch",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw error;
  }
};

export const getWeatherByCity = async (cityName, unit = "metric") => {
  try {
    // Get coordinates from city name
    const geoResponse = await axios.get(`${GEO_URL}/search`, {
      params: {
        name: cityName,
        count: 1,
      },
    });

    const geoData = geoResponse.data;

    if (geoData.results && geoData.results.length > 0) {
      const { latitude, longitude, name, country } = geoData.results[0];

      // Fetch weather using coordinates - PASS unit here
      const weatherData = await getWeather(latitude, longitude, unit);

      return {
        success: true,
        weatherData,
        location: `${name}, ${country}`,
      };
    } else {
      // No results found - CITY NOT FOUND
      return {
        success: false,
        error: "City not found",
        errorType: "NOT_FOUND",
      };
    }
  } catch (error) {
    // Network/API error
    console.error("Error fetching weather by city:", error);
    return {
      success: false,
      error: error.message || "Error fetching weather data",
      errorType: "API_ERROR",
    };
  }
};

export const getWeatherByCoords = async (
  latitude,
  longitude,
  unit = "metric"
) => {
  try {
    // Use OpenStreetMap Nominatim for reverse geocoding
    const geoResponse = await axios.get(
      `https://nominatim.openstreetmap.org/reverse`,
      {
        params: {
          lat: latitude,
          lon: longitude,
          format: "json",
        },
        headers: {
          "User-Agent": "WeatherApp/1.0", // Required by Nominatim
        },
      }
    );

    const address = geoResponse.data.address;
    const cityName =
      address.city ||
      address.town ||
      address.village ||
      address.municipality ||
      "Unknown Location";
    const country = address.country || "";

    // Fetch weather
    const weatherData = await getWeather(latitude, longitude, unit);

    return {
      success: true,
      weatherData,
      location: country ? `${cityName}, ${country}` : cityName,
    };
  } catch (error) {
    console.error("Error fetching weather by coords:", error);
    return {
      success: false,
      error: error.message || "Error fetching weather data",
      errorType: "API_ERROR",
    };
  }
};
