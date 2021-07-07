import { getCookie } from '../../library/utilities/functions';
let Symbol = require('es6-symbol');

const getApi = (endpoint) => {
    let config = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + getCookie('token_id')
        }
    };

    return fetch(endpoint, config)
        .then((response) => {
            console.log(response, "response...")
            return response.json().then(data => ({ data, status: response.status }))
        })
        .catch(err => ({ data: { error: true, message: "Internal Server Error" }, status: 500 }))
}

export const GET_API = Symbol('CALL GET API');

export default store => next => action => {
    const getAPI = action[GET_API];
    if (typeof getAPI === 'undefined') return next(action);
    let { endpoint, types } = getAPI;
    const [requestType, successType, errorType] = types;
    return (next({ type: requestType }),
        getApi(endpoint)).then(
            response => {
                if (response.status === 200) {
                    return next({ response, type: successType })
                }
                else if (response.status === 401) {
                    return next({ response, type: errorType })
                }
                else {
                    return next({ response, type: errorType })
                }
            }
        )
}
