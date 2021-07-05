import { POST_API } from "../../main/fetch"
import { INVITE_DATA_FAILURE, INVITE_DATA_REQUEST, INVITE_DATA_SUCCESS } from "../../modules/Home/HomeConstants"
import { INVITE_DATA_API } from "../urls"

const inviteApi = (body) => {
    return {
        [POST_API]: {
            endpoint: INVITE_DATA_API,
            types: [INVITE_DATA_REQUEST,
                INVITE_DATA_SUCCESS,
                INVITE_DATA_FAILURE],
            body
        }
    }
}
export{inviteApi}