import * as request from './requester.js';
import { APP_ID } from '../constants.js';

const city = 'London';

const url = `http://api.openweathermap.org/geo/1.0/direct?q={city name}&appid=${APP_ID}`;

