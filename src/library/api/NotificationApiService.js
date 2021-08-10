import { GET_API, POST_API } from "../../main/fetch"
import { ACCEPT_REQUEST_DATA_FAILURE, ACCEPT_REQUEST_DATA_REQUEST, ACCEPT_REQUEST_DATA_SUCCESS, ALL_NOTIFICATION_DATA_FAILURE, ALL_NOTIFICATION_DATA_REQUEST, ALL_NOTIFICATION_DATA_SUCCESS, DECLINE_REQUEST_DATA_FAILURE, DECLINE_REQUEST_DATA_REQUEST, DECLINE_REQUEST_DATA_SUCCESS } from "../../modules/Allnotifications/NotificationConstant"
import { ONSCREEN_NOTIFICATION_DATA_FAILURE, ONSCREEN_NOTIFICATION_DATA_REQUEST, ONSCREEN_NOTIFICATION_DATA_SUCCESS, READALL_NOTIFICATION_DATA_FAILURE, READALL_NOTIFICATION_DATA_REQUEST, READALL_NOTIFICATION_DATA_SUCCESS } from "../common/components/Toolbar/ToolbarConstants"
import { ACCEPT_REQUEST_API, ALL_NOTIFICATION_API, DECLINE_REQUEST_API, ONSCREEN_NOTIFICATION_API, READALL_NOTIFICATION_API } from "../urls"

const acceptRequestApi = (body) => {
    return {
        [POST_API]: {
            endpoint: ACCEPT_REQUEST_API,
            types: [ACCEPT_REQUEST_DATA_REQUEST,
                ACCEPT_REQUEST_DATA_SUCCESS,
                ACCEPT_REQUEST_DATA_FAILURE],
            body
        }
    }
}
const declineRequestApi = (body) => {
    return {
        [POST_API]: {
            endpoint: DECLINE_REQUEST_API,
            types: [DECLINE_REQUEST_DATA_REQUEST,
                DECLINE_REQUEST_DATA_SUCCESS,
                DECLINE_REQUEST_DATA_FAILURE],
            body
        }
    }
}
const allNotificationsApi = (page) => {
    return {
        [GET_API]: {
            endpoint: ALL_NOTIFICATION_API+"?page="+page,
            types: [ALL_NOTIFICATION_DATA_REQUEST,
                ALL_NOTIFICATION_DATA_SUCCESS,
                ALL_NOTIFICATION_DATA_FAILURE],
            
        }
    }
}
const onScreenNotificationsApi = () => {
    return {
        [GET_API]: {
            endpoint: ONSCREEN_NOTIFICATION_API,
            types: [ONSCREEN_NOTIFICATION_DATA_REQUEST,
                ONSCREEN_NOTIFICATION_DATA_SUCCESS,
                ONSCREEN_NOTIFICATION_DATA_FAILURE],
            
        }
    }
}
const readAllNotificationsApi = (body) => {
    return {
        [POST_API]: {
            endpoint: READALL_NOTIFICATION_API,
            types: [READALL_NOTIFICATION_DATA_REQUEST,
                READALL_NOTIFICATION_DATA_SUCCESS,
                READALL_NOTIFICATION_DATA_FAILURE],
            body
        }
    }
}
export{acceptRequestApi ,declineRequestApi ,allNotificationsApi ,onScreenNotificationsApi,readAllNotificationsApi}