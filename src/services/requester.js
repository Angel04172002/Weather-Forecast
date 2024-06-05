
const request = (method, url, data) => {

    const options = {};

    if(method == 'POST') {

        options.headers = {
            'content-type': 'application/json'
        };

        options.body = JSON.stringify(data);
    }

    return fetch(url, options);
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');