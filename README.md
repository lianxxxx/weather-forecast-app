# 🌤 Weather Forecast App

A simple **responsive weather dashboard** built with **HTML, CSS, JavaScript, and Bootstrap**. Fetches current weather data from **Weatherstack API** and displays temperature, wind, humidity, UV index, sunrise/sunset, moon info, and precipitation.

---

## **Features**

* Responsive layout with Bootstrap for desktop and mobile
* Search for any city to get live weather updates
* Displays:

  * Temperature & weather description
  * Feels like temperature, humidity, wind speed & direction
  * Pressure, visibility, cloud cover, UV index
  * Day/Night info: sunrise, sunset, moonrise, moonset, moon phase
  * Precipitation

---

## **Preview**


 **API Key**
   This project uses [Weatherstack API](https://weatherstack.com/).

* Sign up and get your free API key.
* Open `js/script.js` and replace the placeholder:

```js
const apiKey = "YOUR_API_KEY_HERE"; // replace with your own key
```

**Important:** Do NOT push your real API key to GitHub. Keep it private.



---

## **Technologies Used**

* HTML5 & CSS3
* Bootstrap 5
* JavaScript (ES6)
* Font Awesome
* Google Fonts

---



## **Notes**

* The current version is **front-end only**, so the API key is used in the browser.
* For production or public sites, consider creating a **backend** to hide your API key.
* Some Weatherstack data (like future forecasts or detailed astro info) may require a **paid subscription**.



