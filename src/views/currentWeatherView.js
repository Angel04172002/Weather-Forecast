import { currentWeatherTemplate } from '../templates/currentWeatherTemplate.js';
import * as weatherService from '../services/weatherService.js';


const getWeather = async (e) => {

    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let city = formData.get('city');

    const coordinatesArr = await weatherService.getCityCoordinates(city);

    const latitude = coordinatesArr[0].lat;
    const longitude = coordinatesArr[0].lon;



};

export const currentWeatherView = (ctx) => {

    ctx.render(currentWeatherTemplate(getWeather));
}

