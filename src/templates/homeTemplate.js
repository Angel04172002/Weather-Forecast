import { render, html } from '../../node_modules/lit-html/lit-html.js';

export const homeTemplate = () => html` 
    <h1 class="homeTitle"> Welcome to weather forecaster! </h1>

    <p class="homeDescription">You can check the current weather and forecast for next days of different towns</p>
`;