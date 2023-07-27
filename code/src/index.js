// Feature 1
// In your project, display the current date and time using JavaScript: Tuesday 16:00
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
let currentDay = days[now.getDay()];
let currentHour = now.getHours();
if (currentHour < 9) {
  currentHour = `0${currentHour}`;
}
let currentMinute = now.getMinutes();
if (currentMinute < 9) {
  currentMinute = `0${currentMinute}`;
}

let currentDateTime = document.querySelector(".currentDateTime");
currentDateTime.innerHTML = `${currentDay} ${currentHour}:${currentMinute}`;

// Function for finding the temperature in city searched by user
function showTemp(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#degree").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = Math.round(
    response.data.main.humidity
  );
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function search(city) {
  let units = "metric";
  let apiKey = `8cd9be374c7c96c39a9fe73f4bf2f055`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemp);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#citySearch").value;
  search(city);
}

let searchForm = document.querySelector("#search");
searchForm.addEventListener("submit", handleSubmit);

search("Cape Town");
