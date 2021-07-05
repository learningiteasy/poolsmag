import { POST_API } from "../../main/fetch"
import { SIGNUP_DATA_FAILURE, SIGNUP_DATA_REQUEST, SIGNUP_DATA_SUCCESS } from "../../modules/Signup/SignupConstants"
import { SIGNUP_DATA_API } from "../urls"

const signUpDataApi = (body) => {
    return {
        [POST_API]: {
            endpoint: SIGNUP_DATA_API,
            types: [SIGNUP_DATA_REQUEST,
                SIGNUP_DATA_SUCCESS,
                SIGNUP_DATA_FAILURE],
            body
        }
    }
}

export{signUpDataApi}