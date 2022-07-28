const APIKey = '7b155850b1b0d2d6a491695cc70ffd46';
const cityInput = document.getElementById('cityInput');
const citySearchBtn = document.getElementById('citySearchBtn');
const currentDateTitle = document.getElementById('currentDateTitle');
const currentCityNameTitle = document.getElementById('currentCityNameTitle');
const temperatureParagraph = document.getElementById('temperature');
const iconWeather = document.getElementById('iconWeather');
const windSpeedParagraph = document.getElementById('wind-speed');
const howCloudyParagraph = document.getElementById('how-cloudy');
const sunriseParagraph = document.getElementById('sunrise');
const sunsetParagraph = document.getElementById('sunset');

const today = new Date();
currentDateTitle.innerHTML = today.toDateString();

function showCityWeather() {
  console.log(cityInput.value);
  if (!cityInput.value) {
    alert('You should write a city name');
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((element) => {
      const cityNameStr = cityInput.value;
      currentCityNameTitle.innerHTML =
        cityNameStr[0].toUpperCase() + cityNameStr.substring(1);

      temperatureParagraph.innerHTML = `${(element.main.temp - 273.15).toFixed(
        1
      )}°`;

      const icon = `http://api.openweathermap.org/img/w/${element.weather[0].icon}.png`;
      iconWeather.src = icon;

      windSpeedParagraph.innerHTML = `Wind speed: ${element.wind.speed} m/s`;

      howCloudyParagraph.innerHTML = `Cloudy: ${element.weather[0].description}`;

      const sunrise = new Date(element.sys.sunrise * 1000);
      const timeChange = sunrise.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      sunriseParagraph.innerHTML = `Sunrise: ${timeChange}`;

      const sunset = new Date(element.sys.sunset * 1000);
      const timeChange1 = sunset.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      sunsetParagraph.innerHTML = `Sunset: ${timeChange1}`;
    });
}

citySearchBtn.addEventListener('click', showCityWeather);
