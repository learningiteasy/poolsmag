import { CHANGE_NOTIFICATION_PAGE, CLEAR_ACCEPT_REQUEST_RESPONSE, CLEAR_ALL_NOTIFICATION_RESPONSE, CLEAR_DECLINE_REQUEST_RESPONSE } from "./NotificationConstant"

const clearAcceptRequestResponse  =(newState) => {
return{type:CLEAR_ACCEPT_REQUEST_RESPONSE , newState}
}
const clearDeclineRequestResponse = (newState) => {
return{type:CLEAR_DECLINE_REQUEST_RESPONSE , newState}
}
const clearAllNotificationResponse = (newState) => {
    return{type:CLEAR_ALL_NOTIFICATION_RESPONSE , newState}
}
const changeNotificationPage = (newState) => {
    return{type:CHANGE_NOTIFICATION_PAGE , newState}
}

export {clearAcceptRequestResponse,clearDeclineRequestResponse ,clearAllNotificationResponse ,changeNotificationPage}