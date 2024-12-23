const input = document.getElementById('input');
const submit = document.getElementById('submit');
const humidity = document.getElementById('humidity');
const temperatureDisplay = document.getElementById('temperature');
const windspeed = document.getElementById('windspeed');
const weather = document.getElementById('weather');
const locationDisplay = document.getElementById('cityname');
const regionDisplay = document.getElementById('region');

const API_KEY = 'baba22ff698a40d084374905242112';

submit.addEventListener('click', ()=>{
 const city = input.value.trim();
 if (!city) {
 	alert("Please input a valid city name!");
 	return;
 }

 const url = `https://api.weatherapi.com/v1/current.json?q=${city}&key=${API_KEY}`;	

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {   
    console.log('Weather Data:', data);
    console.log(data);

    const apiTemperature = data.current.temp_c; 
    const apiWeatherDescription = data.current.condition.text;
    const apiHumidity = data.current.humidity; 
    const apiWindSpeed = data.current.wind_kph;
    const apiLocationName = data.location.name;
    const apiRegion = data.location.tz_id;
    
    locationDisplay.textContent = `${apiLocationName}`;
    temperatureDisplay.textContent = `${apiTemperature}°C`;
    humidity.textContent = `${apiHumidity}%`;
    windspeed.textContent = `${apiWindSpeed} kph`;
    regionDisplay.textContent = `${apiRegion}`;

    if (apiWeatherDescription.includes("Sunny") || apiWeatherDescription.includes("Clear")) {
        weather.src = "img/sun.png";
      } else if (apiWeatherDescription.includes("Cloudy")) {
        weather.src = "img/cloud.png";
      } else if (apiWeatherDescription.includes("Patchy rain") || apiWeatherDescription.includes("rain")) {
        weather.src = "img/rainy.png";
      } else if (apiWeatherDescription.includes("Overcast") || apiWeatherDescription.includes("snow")) {
        weather.src = "img/snow.png";
      } else {
        weather.src = "img/sun.png";
      }

    console.log(`Temperature in ${city}: ${apiTemperature}°C`);
    console.log(`Weather: ${apiWeatherDescription}`);
  })
  .catch(error => {
    alert('Error fetching weather data: ' + error.message); 
  });
});

