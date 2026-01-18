# Weather Now ☀️

A responsive weather forecast application built with React and Vite. Get real-time weather data, hourly forecasts, and 7-day predictions for any location worldwide.

## 🌐 Live Demo

[https://weather-forecast-app-lianxxxx.vercel.app/](https://weather-forecast-app-lianxxxx.vercel.app/)

## ✨ Features

- 🔍 **Smart City Search** - Search with autocomplete suggestions
- 🌡️ **Real-time Weather** - Current temperature, humidity, wind speed, and precipitation
- ⏰ **Hourly Forecast** - 8-hour forecast with day selector
- 📅 **7-Day Forecast** - Weekly weather predictions
- 💀 **Skeleton Loading** - Smooth loading states for better UX
- ❌ **Error Handling** - Graceful error states with retry functionality
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🎨 **Modern UI** - Clean and intuitive interface

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **HTTP Client:** Axios
- **API:** [Open-Meteo API](https://open-meteo.com/) (Free, no API key required)
- **Deployment:** Vercel

## 📦 Installation

1. **Clone the repository**

```bash
   git clone https://github.com/lianxxxx/weather-forecast-app
   cd weather-forecast-app
```

2. **Install dependencies**

```bash
   npm install
```

3. **Start development server**

```bash
   npm run dev
```

4. **Open in browser**

```
   http://localhost:5173
```

## 🚀 Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
weather-forecast-app/
├── src/
│   ├── assets/          # Images and icons
│   ├── components/      # React components
│   │   ├── CitySuggestion.jsx
│   │   ├── DailyForecast.jsx
│   │   ├── ErrorStates.jsx
│   │   ├── Header.jsx
│   │   ├── HourlyForecast.jsx
│   │   ├── HoursDropdown.jsx
│   │   ├── NoResult.jsx
│   │   ├── SearchBar.jsx
│   │   ├── SearchInProgress.jsx
│   │   ├── Suggestions.jsx
│   │   ├── UnitsDropdown.jsx
│   │   ├── WeatherCard.jsx
│   │   └── WeatherStats.jsx
│   ├── services/        # API services
│   │   └── weatherApi.js
│   ├── utils/           # Utility functions
│   │   └── weatherIcons.js
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── public/              # Static assets
└── package.json
```

## 🎯 How It Works

1. **Search for a city** - Type any city name and get autocomplete suggestions
2. **Select a location** - Click on a suggestion or press Enter
3. **View weather data** - See current conditions, hourly forecast, and 7-day predictions
4. **Switch days** - Use the dropdown in hourly forecast to view different days

## 🌟 Features in Detail

### Current Weather

- Temperature (°C)
- Feels like temperature
- Humidity percentage
- Wind speed
- Precipitation

### Hourly Forecast

- Next 8 hours of weather
- Day selector dropdown
- Weather icons for conditions
- Temperature per hour

### Daily Forecast

- 7-day weather prediction
- Min/max temperatures
- Weather condition icons
- Day of the week

### Error Handling

- **No Results** - Shows when city is not found
- **API Error** - Shows when network/API fails with retry option
- **Search in Progress** - Loading indicator during data fetch

## 🔮 Upcoming Features

- 🌍 Auto-detect user location (Geolocation API)
- 🌡️ Unit toggle (Celsius ↔ Fahrenheit)
- 🌙 Dark/Light mode
- ⭐ Favorite locations
- 📊 Weather charts and graphs

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Leyanne**

- GitHub: [@lianxxxx](https://github.com/lianxxxx)
- Demo: [Weather Now](https://weather-forecast-app-lianxxxx.vercel.app/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Weather data provided by [Open-Meteo API](https://open-meteo.com/)
- Icons and design inspiration from various sources
- Built with ❤️ using React and Vite

---

⭐ **Star this repo if you found it helpful!**
