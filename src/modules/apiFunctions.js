async function getWeather() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=London&appid=070c4da04e708cd5b0d3d0157e75a960`,
    { mode: "cors" }
  );
  const giphData = await response.json();
  console.log(giphData);
}

export { getWeather };
