import { POST_API } from "../../main/fetch"
import { RESET_PASSWORD_DATA_FAILURE, RESET_PASSWORD_DATA_REQUEST, RESET_PASSWORD_DATA_SUCCESS } from "../../modules/ResetPassword/ResetPasswordConstant"
import { RESET_PASSWORD_DATA_API } from "../urls"

const resetPasswordDataApi = (body) => {
    return {
        [POST_API]: {
            endpoint: RESET_PASSWORD_DATA_API,
            types: [RESET_PASSWORD_DATA_REQUEST,
                RESET_PASSWORD_DATA_SUCCESS,
                RESET_PASSWORD_DATA_FAILURE],
            body
        }
    }
}
export{resetPasswordDataApi}