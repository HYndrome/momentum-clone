const API_KEY = "614a55b35c0d3e7d1b418a4b9ef51759";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherContainer = document.querySelector("#weather p:first-child");
      const cityContainer = document.querySelector("#weather p:last-child");
      weatherContainer.innerText = data.name;
      cityContainer.innerText = `${data.weather[0].main} / ${data.main.temp}ºC`;
    });
}

function onGeoError() {
  alert("Cannot find your current location!");
  const cityContainer = document.querySelector("#weather p:last-child");
  cityContainer.innerText = "Cannot find your current location!";
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
