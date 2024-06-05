import { html } from '../../node_modules/lit-html/lit-html.js';

export const currentWeatherTemplate = (getWeather) => html` 

    <form id="searchForm" @submit = "${getWeather}">

        <div>
            <label for="city">City</label>
            <input type="text" name="city">
        </div>

        <div>
            <button>Search</button>
        </div>

    </form>

`;