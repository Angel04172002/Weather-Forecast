import { GET, POST } from "../constants.js";


const request = (method, url, data) => {

    const options = {};

    if (method == POST) {

        options.headers = {
            'content-type': 'application/json'
        };

        options.body = JSON.stringify(data);
    }

    return fetch(url, options)
        .then(res => res.json());
};

const get = request.bind(null, GET);
const post = request.bind(null, POST);

export {
    get,
    post
}