import { detailsTemplate } from "../templates/detailsTemplate.js";
import * as weatherService from "../services/weatherService.js";


let latitude;
let longitude;
let weatherResult;


export const detailsView = async (ctx) => {

    latitude = ctx.params.latitude;
    longitude = ctx.params.longitude;
    weatherResult = await weatherService.getForecastForNext16Days(latitude, longitude);

    renderPage(ctx);
};



const renderPage = (ctx, pageNumber, data = weatherResult.list) => {

    if (ctx.pageNumber == undefined) {
        ctx.pageNumber = 0;
    } else {
        ctx.pageNumber = pageNumber;
    }

    const result = paginate(data, ctx.pageNumber);
    ctx.render(detailsTemplate(ctx, result, ctx.pageNumber, renderPage));
}


const paginate = (data, pageNumber, itemsPerPage = 3) => {

    let allItemsCount = pageNumber * itemsPerPage;
    let items = data.slice(allItemsCount, allItemsCount + itemsPerPage);

    return items;
};