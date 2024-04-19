window.onload = function() {
    const button = document.getElementById('getWeatherButton');
    button.addEventListener('click', getWeather);
};

async function getWeather() {
    try {
        const weatherController = new WeatherController();
        await weatherController.getWeather();
    } catch (error) {
        console.error('Erro ao obter dados meteorológicos:', error);
    }
}
