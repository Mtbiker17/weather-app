let city = "northampton";
let state = "MA";
let country = "US";

async function getWeather() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=070c4da04e708cd5b0d3d0157e75a960`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData);
  console.log(weatherData.weather[0].description);
}

export { getWeather };
