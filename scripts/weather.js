const apiKey = "9d6429782aaa195fd8ff50f6c3dac0d1";
const city = "Tegucigalpa,HN";

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},HN&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            document.getElementById("weather-container").innerHTML = `
                <h2>${data.name}, Honduras</h2>
                <p>🌡️ Temperature: ${data.main.temp}°C</p>
                <p>🌤️ Condition: ${data.weather[0].description}</p>
                <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
            `;
        } else {
            console.error("Error:", data.message);
            document.getElementById("weather-container").innerHTML = `<p>Error: ${data.message}</p>`;
        }
    } catch (error) {
        console.error("Fetch error:", error);
        document.getElementById("weather-container").innerHTML = `<p>Failed to fetch weather data.</p>`;
    }
}

window.onload = getWeather;