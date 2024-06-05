import { currentWeatherTemplate } from '../templates/currentWeatherTemplate.js';
import { render } from '../../node_modules/lit-html/lit-html.js';

import * as weatherService from '../services/weatherService.js';


const getWeather = async (e) => {

    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let city = formData.get('city');

    const coordinatesArr = await weatherService.getCityCoordinates(city);

    const latitude = coordinatesArr[0]?.lat;
    const longitude = coordinatesArr[0]?.lon;

    const weatherResult = await weatherService.getCurrentWeather(latitude, longitude);

    const { main, description } = weatherResult.weather[0];
    const { temp, feels_like, temp_min, temp_max, pressure, humidity } = weatherResult.main;
    const { speed, gust } = weatherResult.wind;


    const data = {
        city,
        state: main,
        description,
        temp,
        feels_like,
        temp_min,
        temp_max,
        pressure,
        humidity,
        speed,
        gust
    };

    render(currentWeatherTemplate(data, getWeather), document.getElementById('root'));
};

export const currentWeatherView = (ctx) => {

    ctx.render(currentWeatherTemplate('', getWeather));
}

