import { POST_API } from "../../main/fetch"
import { FORGET_PASSWORD_DATA_FAILURE, FORGET_PASSWORD_DATA_REQUEST, FORGET_PASSWORD_DATA_SUCCESS } from "../../modules/ForgetPassword/ForgetPasswordConstants"
import { FORGOT_PASSWORD_DATA_API } from "../urls"

const forgetPasswordDataApi = (body) => {
    return {
        [POST_API]: {
            endpoint: FORGOT_PASSWORD_DATA_API,
            types: [FORGET_PASSWORD_DATA_REQUEST,
                FORGET_PASSWORD_DATA_SUCCESS,
                FORGET_PASSWORD_DATA_FAILURE],
            body
        }
    }
}

export{forgetPasswordDataApi}