let city = "bath";

async function getWeather(city) {
  const cityResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/
        weather?q={city}&appid={070c4da04e708cd5b0d3d0157e75a960}`,
    { mode: "cors" }
  );
  const cityWeatherData = await cityResponse.json();
}

getWeather(city);
console.log(cityWeatherData);

export { getWeather };
