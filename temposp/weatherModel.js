class WeatherModel {
    constructor(temperature, weatherDescription, humidity) {
        this.temperature = temperature;
        this.weatherDescription = weatherDescription;
        this.humidity = humidity;
    }

    update(weather) {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
            <h2>São Paulo</h2>
            <p>Temperatura: ${weather.temperature}°C</p>
            <p>Condição: ${weather.weatherDescription}</p>
            <p>Umidade: ${weather.humidity}%</p>
        `;
    }
}