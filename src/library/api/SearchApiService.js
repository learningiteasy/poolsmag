import { POST_API } from "../../main/fetch"
import { SEARCH_LIST_DATA_FAILURE, SEARCH_LIST_DATA_REQUEST, SEARCH_LIST_DATA_SUCCESS, SEND_REQUEST_DATA_FAILURE, SEND_REQUEST_DATA_REQUEST, SEND_REQUEST_DATA_SUCCESS } from "../../modules/SearchList/SearchListConstant"
import { CANCEL_REQUEST_DATA_FAILURE, CANCEL_REQUEST_DATA_REQUEST, CANCEL_REQUEST_DATA_SUCCESS, SEARCH_PROFILE_DATA_FAILURE, SEARCH_PROFILE_DATA_REQUEST, SEARCH_PROFILE_DATA_SUCCESS, UNFRIEND_DATA_FAILURE, UNFRIEND_DATA_REQUEST, UNFRIEND_DATA_SUCCESS } from "../../modules/SearchProfile/SearchProfileConstant"
import { CANCEL_REQUEST_API, SEARCH_LIST_API, SEARCH_PROFILE_DATA_API, SEND_REQUEST_API, UNFRIEND_USER_API } from "../urls"

const searchListDataApi = (body) => {
    return {
        [POST_API]: {
            endpoint: SEARCH_LIST_API,
            types: [SEARCH_LIST_DATA_REQUEST,
                SEARCH_LIST_DATA_SUCCESS,
                SEARCH_LIST_DATA_FAILURE],
            body
        }
    }
}
const searchProfileDataApi = (body) => {
    return {
        [POST_API]: {
            endpoint: SEARCH_PROFILE_DATA_API,
            types: [SEARCH_PROFILE_DATA_REQUEST,
                SEARCH_PROFILE_DATA_SUCCESS,
                SEARCH_PROFILE_DATA_FAILURE],
            body
        }
    }
}
const sendRequestDataApi = (body) => {
    return {
        [POST_API]: {
            endpoint: SEND_REQUEST_API,
            types: [SEND_REQUEST_DATA_REQUEST,
                SEND_REQUEST_DATA_SUCCESS,
                SEND_REQUEST_DATA_FAILURE],
            body
        }
    }
}
const cancelRequestDataApi = (body) => {
    return {
        [POST_API]: {
            endpoint: CANCEL_REQUEST_API,
            types: [CANCEL_REQUEST_DATA_REQUEST,
                CANCEL_REQUEST_DATA_SUCCESS,
                CANCEL_REQUEST_DATA_FAILURE],
            body
        }
    }
}
const unfriendUserApi = (body) => {
    return {
        [POST_API]: {
            endpoint: UNFRIEND_USER_API,
            types: [UNFRIEND_DATA_REQUEST,
                UNFRIEND_DATA_SUCCESS,
                UNFRIEND_DATA_FAILURE],
            body
        }
    }
}
export {searchListDataApi ,searchProfileDataApi,sendRequestDataApi ,cancelRequestDataApi ,unfriendUserApi}