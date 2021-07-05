import { GET_API } from "../../main/fetch"
import { GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS } from "../../modules/Account/AccountConstant"
import { GET_PROFILE_API } from "../urls"

const getProfileApi = (token) => {
    return {
        [GET_API]: {
            endpoint: GET_PROFILE_API,
            types: [GET_PROFILE_REQUEST,
                GET_PROFILE_SUCCESS,
                GET_PROFILE_FAILURE],
            token
        }
    }
}
export{getProfileApi}