import { CHANGE_SEARCH_NAME_INPUT, ONSCREEN_NOTIFICATION_DATA_FAILURE, ONSCREEN_NOTIFICATION_DATA_REQUEST, ONSCREEN_NOTIFICATION_DATA_SUCCESS, READALL_NOTIFICATION_DATA_FAILURE, READALL_NOTIFICATION_DATA_REQUEST, READALL_NOTIFICATION_DATA_SUCCESS } from "./ToolbarConstants"

const initialState = {
    searchNameInput:{
        reduxSearchName: "",
        onChangeSearchName:""
    },
    onScreenNotificationApi: {
        onScreenNotificationLoading: false,
        onScreenNotification: [],
        onScreenNotificationStatus: "",
        allNotificationCount: ""
    },
    readAllApi:{
        readAllLoading: false,
        readAllStatus: "",
        readAllMessage:""
    }
}
export const ToolbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SEARCH_NAME_INPUT:
            return {
                ...state,
                ...{ searchNameInput: { ...state.searchNameInput, ...action.newState } }
            }
        case ONSCREEN_NOTIFICATION_DATA_REQUEST:
            return {
                ...state,
                ...{ onScreenNotificationApi: { ...state.onScreenNotificationApi, ...{ onScreenNotificationLoading: true } } }
            }
        case ONSCREEN_NOTIFICATION_DATA_SUCCESS:
            console.log(action, "action...");
            const { response: { data: { data, status, total } } } = action;
            let notiSuccess = {
                onScreenNotificationLoading: false,
                onScreenNotificationStatus: status,
                onScreenNotification: !!data ? data : [],
                allNotificationCount: total
            }
            return {
                ...state,
                ...{
                    onScreenNotificationApi: { ...state.onScreenNotificationApi, ...notiSuccess },
                }
            }
        case ONSCREEN_NOTIFICATION_DATA_FAILURE:
            console.log(action, "action...");
            let notificationFailure = {
                onScreenNotificationLoading: false,
                onScreenNotificationStatus: action.response.status,
                onScreenNotification: [],
                allNotificationCount: ""
            }
            return {
                ...state,
                ...{
                    onScreenNotificationApi: { ...state.onScreenNotificationApi, ...notificationFailure },
                }
            }
            case READALL_NOTIFICATION_DATA_REQUEST:
                return {
                    ...state,
                    ...{ readAllApi: { ...state.readAllApi, ...{ readAllLoading: true } } }
                }
            case READALL_NOTIFICATION_DATA_SUCCESS:
                console.log(action, "action...");
                const { response } = action;
                let readAllSuccess = {
                    readAllLoading: false,
                    readAllStatus: response.data.status,
                    readAllMessage: response.data.message
                }
                return {
                    ...state,
                    ...{
                        readAllApi: { ...state.readAllApi, ...readAllSuccess },
                    }
                }
            case READALL_NOTIFICATION_DATA_FAILURE:
                console.log(action, "action...");
                let notifFailure = {
                    readAllLoading: false,
                    readAllStatus: action.response.status,
                    readAllMessage: ""
                }
                return {
                    ...state,
                    ...{
                        readAllApi: { ...state.readAllApi, ...notifFailure },
                    }
                }
        default:
            return state
    }
}