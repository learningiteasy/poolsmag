import { POST_API } from "../../main/fetch"
import { LOGIN_DATA_REQUEST, LOGIN_DATA_SUCCESS, LOGIN_DATA_FAILURE } from "../../modules/Login/LoginConstants"
import { LOGIN_DATA_API } from "../urls"

const loginDataApi = (body) => {
    return {
        [POST_API]: {
            endpoint: LOGIN_DATA_API,
            types: [LOGIN_DATA_REQUEST,
                LOGIN_DATA_SUCCESS,
                LOGIN_DATA_FAILURE],
            body
        }
    }
}

export{loginDataApi}