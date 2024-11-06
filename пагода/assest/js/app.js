const apiKey = "6be5bcb5136584ac61355d420a2e0bae";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input"),
  searchBtn = document.querySelector(".search button"),
  weatherIcon = document.querySelector(".weather-icon");

async function chekWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./assest/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./assest/images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./assest/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./assest/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./assest/images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    chekWeather(searchBox.value);
  }
});

searchBtn.addEventListener("click", () => {
  chekWeather(searchBox.value);
});