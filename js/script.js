const userLocation = document.getElementById('locationName');
const searchBar = document.getElementById('searchBar');
const searchBtn = document.getElementById('searchBtn');
const dynamicDate = document.getElementById('dynamicDate');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weatherDescription');
const weatherIcon = document.querySelector('.weatherIcon');
const feelsLike = document.getElementById('feelsLike');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const windDirection = document.getElementById('windDirection');
const pressure = document.getElementById('pressure');
const visbility = document.getElementById('visbility');
const cloudCover = document.getElementById('cloudCover');
const uvIndex= document.getElementById('uvIndex');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const moonrise = document.getElementById('moonrise');
const moonset = document.getElementById('moonset');
const moonphase = document.getElementById('moonphase');
const rain = document.getElementById('rain');

searchBtn.addEventListener('click', () => {
  const city = searchBar.value;
const apiKey = "YOUR_API_KEY_HERE";


  async function fetchWeather() {
    try {
      const response = await fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`);
      const data = await response.json();

      console.log(data); 


      if (data && data.location) {
        userLocation.textContent = `${data.location.name}, ${data.location.region}`;
        dynamicDate.textContent = `${data.location.localtime}`;
        temperature.textContent = `${data.current.temperature}°C`;
        weatherDescription.textContent = data.current.weather_descriptions[0];
        weatherIcon.src = data.current.weather_icons[0];
        feelsLike.textContent = `Feels like: ${data.current.feelslike}°C`;
        humidity.textContent = `Humidity: ${data.current.humidity}%`;
        wind.textContent = ` Wind: ${data.current.wind_speed} km/h`;
        windDirection.textContent = ` Wind Direction: ${data.current.wind_dir}`;
        pressure.textContent = ` Pressure: ${data.current.pressure} mb`;
        visbility.textContent = ` Visibility: ${data.current.visibility} km`;
        cloudCover.textContent = ` Cloud Cover: ${data.current.cloudcover}%`;
        uvIndex.textContent = ` UV Index: ${data.current.uv_index}`;
        sunrise.textContent = ` Sunrise: ${data.astro.localtime}`; //change the key once the free api call restored
        sunset.textContent = ` Sunset: ${data.location.localtime}`; //change the key once free the api call restored
        moonrise.textContent = ` Moonrise: ${data.location.localtime}`; //change the key once the free api call restored
        moonset.textContent = ` Moonset: ${data.location.localtime}`; //change the key once the free api call restored
        moonphase.textContent = ` Moon Phase: N/A`; //change the key once the free api call restored
        rain.textContent = ` Precipitation: ${data.current.precip} mm`;  

}
       else {
        userLocation.textContent = "Location not found";
      }

    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  fetchWeather();
});

