class WeatherController {
    async getWeather() {
        try {
            const weatherService = new WeatherService();
            const weatherModel = new WeatherModel();
            const data = await weatherService.getWeatherByCity('Sao Paulo');

            if (data.cod === 200) {
                const weather = new WeatherModel(
                    data.main.temp,
                    data.weather[0].description,
                    data.main.humidity
                );
                weatherModel.update(weather);
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error('Erro ao obter dados meteorológicos:', error);
        }
    }
}
