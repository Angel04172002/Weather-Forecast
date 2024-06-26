import { html } from '../../node_modules/lit-html/lit-html.js';

export const currentWeatherTemplate = (data = '', getWeather) => html` 

    <form id="searchForm" @submit = "${getWeather}">

        <div class="cityDiv">
            <label for="city">City</label>
            <input type="text" name="city">
        </div>

        <div>
            <button class="searchBtn">Search</button>
        </div>

    </form>

    <div class="cityInfo">


    ${data != ''
        ?
        html`<p>City: ${data.city}</p>
        <p>Description: ${data.description}</p>

        <p>State: ${data.state}</p>

        <p>Temperature: ${data.temp}</p>
        <p>Feels Like: ${data.feels_like}</p>

        <p>Min temp: ${data.temp_min}</p>
        <p>Max temp: ${data.temp_max}</p>

        <p>Pressure: ${data.pressure} </p>
        <p>Humidity: ${data.humidity} </p>


        <p>Wind speed: ${data.speed} </p>
        <p>Gust: ${data.gust} </p>


        
        <a class="nextDaysForecastBtn" href= "/currentWeather/${data.lat.toString()}/${data.lon.toString()}">Next 7 days</a>

        `
        :
        html``
    }

</div>



`;