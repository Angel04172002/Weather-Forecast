
import { APP_ID } from '../constants.js';
import * as request from './requester.js';


const getCityCoordinatesUrl = (city) => `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${APP_ID}`;
const getCityWeatherUrl = (lat, lon) => `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APP_ID}`;
const getForecastForNext16DaysUrl = (lat, lon) => `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APP_ID}`;


export const getCityCoordinates = (city) => {

    const url = getCityCoordinatesUrl(city);
    return request.get(url, {});
};

export const getCurrentWeather = (lat, lon) => {

    const url = getCityWeatherUrl(lat, lon);
    return request.get(url, {});
};


export const getForecastForNext16Days = (lat, lon) => {

    const url = getForecastForNext16DaysUrl(lat, lon);
    return request.get(url, {});
}

