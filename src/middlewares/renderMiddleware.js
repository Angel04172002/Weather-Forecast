import { render } from "../../node_modules/lit-html/lit-html.js";


const rootElement = document.getElementById('root');

const renderTemplate = (templateResult) => {

    render(templateResult, rootElement);

};

export const render = (ctx, next) => {

    ctx.render = renderTemplate;

    return next();
};