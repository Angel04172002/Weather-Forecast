import { html } from '../../node_modules/lit-html/lit-html.js';

export const detailsTemplate = (ctx, data, pageNumber, paginate) => html` 

    <div class="cityInfo">

        <div class="weatherInfo">


            ${data != ''
                ?
                html`
                
                ${data.map(x => html`  
                
                    <div class="pageWrapper">
                
                        <p>Time: ${x.dt_txt}</p>
                        <p>Description: ${data.description}</p>

                        <p>State: ${x.weather[0].main}</p>

                        <p>Temperature: ${x.main.temp}</p>
                        <p>Feels Like: ${x.main.feels_like}</p>


                        <p>Min temp: ${x.main.temp_min}</p>
                        <p>Max temp: ${x.main.temp_max}</p>

                        <p>Pressure: ${x.main.pressure} </p>
                        <p>Humidity: ${x.main.humidity} </p>

                    </div>

                `)}

        </div>


        <div class="buttons">

            <button @click=${() => paginate(ctx, --pageNumber)}>Previous</button>
            <button @click=${() => paginate(ctx, ++pageNumber)}>Next</button>

        </div>

        `
        :
        html``
    }

    </div>


`;