class WeatherService {
    async getWeatherByCity(city) {
        const apiKey = 'a6b9b4003e58a63743667fcb73dbfba2';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
}