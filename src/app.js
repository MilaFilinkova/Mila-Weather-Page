function showTemperature(response) {
  console.log(response.data);
  if (response.status == 200) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(
      response.data.main.temp
    );
    document.querySelector("#description").innerHTML =
      response.data.weather[0].description;
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(
      response.data.wind.speed
    );
  }
}

let apiKey = "c461f833528021c73b417ab40d24a6b8";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=${apiKey}`;

axios.get(apiUrl).then(showTemperature);
