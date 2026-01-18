import axios from "axios";

const BASE_URL = "https://api.open-meteo.com/v1";
const GEO_URL = "https://geocoding-api.open-meteo.com/v1";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 seconds
});

export const getWeather = async (latitude, longitude) => {
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
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw error;
  }
};

export const getWeatherByCity = async (cityName) => {
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
      const { latitude, longitude, name } = geoData.results[0];

      // Fetch weather using coordinates
      const weatherData = await getWeather(latitude, longitude);

      return {
        success: true,
        weatherData,
        location: name,
      };
    } else {
      // No results found - CITY NOT FOUND
      return {
        success: false,
        error: "City not found",
        errorType: "NOT_FOUND", // ← ADD THIS
      };
    }
  } catch (error) {
    // Network/API error
    console.error("Error fetching weather by city:", error);
    return {
      success: false,
      error: error.message || "Error fetching weather data",
      errorType: "API_ERROR", // ← ADD THIS
    };
  }
};
