// script.js
document.getElementById('get-weather-btn').addEventListener('click', getWeather);

async function getWeather() {
  const city = document.getElementById('city-input').value;
  if (!city) {
    alert('Please enter a city name');
    return;
  }

  const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('City not found');
    }
    const weatherData = await response.json();
    displayWeather(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    document.getElementById('weather-info').innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

function displayWeather(weatherData) {
  const weatherInfo = `
    <h2>${weatherData.name}</h2>
    <p>Temperature: ${weatherData.main.temp} &deg;C</p>
    <p>Description: ${weatherData.weather[0].description}</p>
    <p>Humidity: ${weatherData.main.humidity}%</p>
  `;
  document.getElementById('weather-info').innerHTML = weatherInfo;
}
