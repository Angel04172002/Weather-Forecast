import page from '../node_modules/page/page.mjs';

import { renderMiddleware } from './middlewares/renderMiddleware.js';

import { currentWeatherView } from './views/currentWeatherView.js';
import { detailsView } from './views/detailsView.js';
import { homeView } from './views/homeView.js';



page(renderMiddleware);

page('/', homeView);
page('/currentWeather', currentWeatherView);
page('/currentWeather/:latitude/:longitude', detailsView);


page.start();