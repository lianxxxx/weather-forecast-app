import iconRain from "../assets/img/icon-rain.webp";
import iconDrizzle from "../assets/img/icon-drizzle.webp";
import iconSunny from "../assets/img/icon-sunny.webp";
import iconPartlyCloudy from "../assets/img/icon-partly-cloudy.webp";
import iconSnow from "../assets/img/icon-snow.webp";
import iconStorm from "../assets/img/icon-storm.webp";
import iconFog from "../assets/img/icon-fog.webp";
import iconOvercast from "../assets/img/icon-overcast.webp";

// Open-Meteo Weather Code Mapping
// Reference: https://open-meteo.com/en/docs
export const getWeatherIcon = (weatherCode) => {
  const iconMap = {
    // Clear sky
    0: iconSunny,
    1: iconSunny, // Mainly clear

    // Partly cloudy
    2: iconPartlyCloudy,

    // Overcast
    3: iconOvercast,

    // Fog
    45: iconFog,
    48: iconFog,

    // Drizzle
    51: iconDrizzle, // Light
    53: iconDrizzle, // Moderate
    55: iconDrizzle, // Dense
    56: iconDrizzle, // Freezing light
    57: iconDrizzle, // Freezing dense

    // Rain
    61: iconRain, // Slight
    63: iconRain, // Moderate
    65: iconRain, // Heavy
    66: iconRain, // Freezing light
    67: iconRain, // Freezing heavy
    80: iconRain, // Rain showers slight
    81: iconRain, // Rain showers moderate
    82: iconRain, // Rain showers violent

    // Snow
    71: iconSnow, // Slight
    73: iconSnow, // Moderate
    75: iconSnow, // Heavy
    77: iconSnow, // Snow grains
    85: iconSnow, // Snow showers slight
    86: iconSnow, // Snow showers heavy

    // Thunderstorm
    95: iconStorm, // Slight or moderate
    96: iconStorm, // With slight hail
    99: iconStorm, // With heavy hail
  };

  return iconMap[weatherCode] || iconSunny; // Default to sunny if unknown
};

// Get weather description (optional, for display)
export const getWeatherDescription = (weatherCode) => {
  const descriptions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Foggy",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Heavy drizzle",
    56: "Light freezing drizzle",
    57: "Heavy freezing drizzle",
    61: "Light rain",
    63: "Moderate rain",
    65: "Heavy rain",
    66: "Light freezing rain",
    67: "Heavy freezing rain",
    71: "Light snow",
    73: "Moderate snow",
    75: "Heavy snow",
    77: "Snow grains",
    80: "Light rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Light snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with light hail",
    99: "Thunderstorm with heavy hail",
  };

  return descriptions[weatherCode] || "Unknown";
};
