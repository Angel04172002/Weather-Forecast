import { render } from "../../node_modules/lit-html/lit-html.js";


const rootElement = document.getElementById('root');

const renderTemplate = (templateResult) => {

    render(templateResult, rootElement);
};


export const renderMiddleware = (ctx, next) => {

    ctx.render = renderTemplate;

    return next();
};