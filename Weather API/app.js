document.getElementById("search").addEventListener("click", function () {
  const city = document.getElementById("city").value;
  const apiKey = `41a6c82d673faf4b7980a2998a184cee`;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {
        const weatherResult = document.getElementById("weather-result");
        document.getElementById(
          "location"
        ).innerText = `${data.name}, ${data.sys.country}`;
        document.getElementById(
          "temperature"
        ).innerText = `Temperature: ${data.main.temp} °C`;
        document.getElementById(
          "description"
        ).innerText = `Weather: ${data.weather[0].description}`;
        document.getElementById(
          "humidity"
        ).innerText = `Humidity: ${data.main.humidity}%`;
        document.getElementById(
          "wind"
        ).innerText = `Wind Speed: ${data.wind.speed} km/h`;

        const weatherDescription = data.weather[0].description.toLowerCase();
        let imageUrl = "";

        if (weatherDescription.includes("clear")) {
          imageUrl = "./Images/sun.png";
        } else if (weatherDescription.includes("clouds")) {
          imageUrl = "./Images/cloudy.jpeg";
        } else if (weatherDescription.includes("rain")) {
          imageUrl = "./Images/rain.png";
        } else if (weatherDescription.includes("snow")) {
          imageUrl = "./Images/snowy.png";
        } else {
          imageUrl = "./Images/default.png"; // Fallback image
        }

        document.getElementById("weather-image").src = imageUrl;
        weatherResult.classList.remove("hidden");
      } else {
        alert("City not found");
      }
    })
    .catch((error) => console.error("Error fetching the weather data:", error));
});
