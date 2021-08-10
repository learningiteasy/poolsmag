import { ACCEPT_REQUEST_DATA_FAILURE, ACCEPT_REQUEST_DATA_REQUEST, ACCEPT_REQUEST_DATA_SUCCESS, ALL_NOTIFICATION_DATA_FAILURE, ALL_NOTIFICATION_DATA_REQUEST, ALL_NOTIFICATION_DATA_SUCCESS, CHANGE_NOTIFICATION_PAGE, CLEAR_ACCEPT_REQUEST_RESPONSE, CLEAR_ALL_NOTIFICATION_RESPONSE, CLEAR_DECLINE_REQUEST_RESPONSE, DECLINE_REQUEST_DATA_FAILURE, DECLINE_REQUEST_DATA_REQUEST, DECLINE_REQUEST_DATA_SUCCESS } from "./NotificationConstant";

const initialState = {
    NotificationCount: "",
    notificationPage: 1,
    onScreenNotification : [],
    acceptRequestApi: {
        acceptRequestLoading: false,
        acceptRequestStatus: "",
        acceptRequestSuccess: ""
    },
    declineRequestApi: {
        declineRequestLoading: false,
        declineRequestStatus: "",
        declineRequestSuccess: ""
    },
    allNotificationApi: {
        allNotificationLoading: false,
        allNotificationStatus: "",
        allNotificationResponse: [],
    }
}
export const NotificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACCEPT_REQUEST_DATA_REQUEST:
            return {
                ...state,
                ...{ acceptRequestApi: { ...state.acceptRequestApi, ...{ acceptRequestLoading: true } } }
            }
        case ACCEPT_REQUEST_DATA_SUCCESS:
            console.log(action, "action...");
            const { response: { data: { success ,status } } } = action;
            let acceptSuccess = {
                acceptRequestLoading: false,
                acceptRequestStatus: status,
                acceptRequestSuccess: success
            }
            return {
                ...state,
                ...{
                    acceptRequestApi: { ...state.acceptRequestApi, ...acceptSuccess },
                }
            }
        case ACCEPT_REQUEST_DATA_FAILURE:
            console.log(action, "action...");
            let acceptFailure = {
                acceptRequestLoading: false,
                acceptRequestStatus: action.response.status,
                acceptRequestSuccess: ""
            }
            return {
                ...state,
                ...{
                    acceptRequestApi: { ...state.acceptRequestApi, ...acceptFailure },
                }
            }
        case CLEAR_ACCEPT_REQUEST_RESPONSE:
            let clearAcceptResponse = {
                acceptRequestStatus: "",
                acceptRequestSuccess: ""
            }
            return {
                ...state,
                ...{
                    acceptRequestApi: { ...state.acceptRequestApi, ...clearAcceptResponse },
                }
            }
        case DECLINE_REQUEST_DATA_REQUEST:
            return {
                ...state,
                ...{ declineRequestApi: { ...state.declineRequestApi, ...{ declineRequestLoading: true } } }
            }
        case DECLINE_REQUEST_DATA_SUCCESS:
            console.log(action, "action...");
            const { response: { data } } = action;
            let declineSuccess = {
                declineRequestLoading: false,
                declineRequestStatus: data.status,
                declineRequestSuccess: data.success
            }
            return {
                ...state,
                ...{
                    declineRequestApi: { ...state.declineRequestApi, ...declineSuccess },
                }
            }
        case DECLINE_REQUEST_DATA_FAILURE:
            console.log(action, "action...");
            let declineFailure = {
                declineRequestLoading: false,
                declineRequestStatus: action.response.status,
                declineRequestSuccess: ""
            }
            return {
                ...state,
                ...{
                    declineRequestApi: { ...state.declineRequestApi, ...declineFailure },
                }
            }
        case CLEAR_DECLINE_REQUEST_RESPONSE:
            let cleardeclineResponse = {
                declineRequestStatus: "",
                declineRequestSuccess: ""
            }
            return {
                ...state,
                ...{
                    declineRequestApi: { ...state.declineRequestApi, ...cleardeclineResponse },
                }
            }
        case ALL_NOTIFICATION_DATA_REQUEST:
            return {
                ...state,
                ...{ allNotificationApi: { ...state.allNotificationApi, ...{ allNotificationLoading: true } } }
            }
        case ALL_NOTIFICATION_DATA_SUCCESS:
            console.log(action, "action...");
            const { response } = action;
            let notiSuccess = {
                allNotificationLoading: false,
                allNotificationStatus: 200,
                allNotificationResponse: !!response.data ? [...state.allNotificationApi.allNotificationResponse ,...response.data.list] : [] ,
                
            }
            return {
                ...state,
                ...{
                    allNotificationApi: { ...state.allNotificationApi, ...notiSuccess },
                    NotificationCount: response.data.total,
                }
            }
        case ALL_NOTIFICATION_DATA_FAILURE:
            console.log(action, "action...");
            let notificationFailure = {
                allNotificationLoading: false,
                allNotificationStatus: action.response.status,
                allNotificationResponse: [],
            
            }
            return {
                ...state,
                ...{
                    allNotificationApi: { ...state.allNotificationApi, ...notificationFailure },
                    NotificationCount: "",
                }
            }
        case CLEAR_ALL_NOTIFICATION_RESPONSE:
            let clearNotification = {
                allNotificationLoading: false,
                allNotificationStatus: "",
                allNotificationResponse: [],
             
            }
            return {
                ...state,
                ...{
                    allNotificationApi: { ...state.allNotificationApi, ...clearNotification },
                    NotificationCount: "",
                    notificationPage: 1
                }
            }
        case CHANGE_NOTIFICATION_PAGE :
            return{
                ...state,
                ...action.newState
            }
        default:
            return state
    }
}