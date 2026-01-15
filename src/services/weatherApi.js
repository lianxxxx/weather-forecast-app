import axios from "axios";

const BASE_URL = "https://api.open-meteo.com/v1";

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
          "temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m",
        hourly: "temperature_2m,weather_code",
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
