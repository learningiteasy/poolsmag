import { data } from 'jquery';
import { getCookie } from '../../library/utilities/functions';

let Symbol = require('es6-symbol');

const postApi = (endpoint, body, is_form_data) => {
  
    
    let config = {
        method: "POST",
        headers: !!is_form_data ? { 'Authorization': 'Bearer ' + getCookie('token_id') } : {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + getCookie('token_id')
        },
        body: !!is_form_data ? body : JSON.stringify(body)
    };
    return fetch(endpoint, config)
        .then((response) => {
            return response.json().then(data => ({ data, status: response.status }))
        })
        .catch(err => ({ data: { message: "Internal Server Error", success: false }, status: 500 }))
}

export const POST_API = Symbol('CALL POST API');

export default store => next => action => {
    const postAPI = action[POST_API];
    if (typeof postAPI === 'undefined') return next(action);
    let { endpoint, types, body, is_form_data } = postAPI;
    const [requestType, successType, errorType] = types;
    return (next({ type: requestType }),
        postApi(endpoint, body, is_form_data)).then(
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
