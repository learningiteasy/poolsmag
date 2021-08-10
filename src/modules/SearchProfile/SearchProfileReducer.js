import { CANCEL_REQUEST_DATA_FAILURE, CANCEL_REQUEST_DATA_REQUEST, CANCEL_REQUEST_DATA_SUCCESS, CLEAR_CANCEL_REQUEST_RESPONSE, CLEAR_SEARCH_PROFILE_RESPONSE, CLEAR_UNFRIEND_RESPONSE, SEARCH_PROFILE_DATA_FAILURE, SEARCH_PROFILE_DATA_REQUEST, SEARCH_PROFILE_DATA_SUCCESS, UNFRIEND_DATA_FAILURE, UNFRIEND_DATA_REQUEST, UNFRIEND_DATA_SUCCESS } from "./SearchProfileConstant";


const initialState = {
    searchProfileApi: {
        searchProfileLoading: false,
        searchProfileStatus: "",
        searchProfileResponse: "",
        searchProfileSuccess: "",
    },
    cancleRequestApi: {
        cancleRequestLoading: false,
        cancleRequestStatus: "",
        cancleRequestMessage: "",
        cancleRequestSuccess: ""
    },
    unfriendApi: {
        unfriendLoading: false,
        unfriendStatus: "",
        unfriendMessage: "",
    }
}
export const SearchProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_PROFILE_DATA_REQUEST:
            return {
                ...state,
                ...{ searchProfileApi: { ...state.searchProfileApi, ...{ searchProfileLoading: true } } }
            }
        case SEARCH_PROFILE_DATA_SUCCESS:
            console.log(action, "action...");
            const { response: { data: { status, data } } } = action;
            let profileSuccess = {
                searchProfileLoading: false,
                searchProfileStatus: status,
                searchProfileResponse: !!data ? data : "",
            }
            return {
                ...state,
                ...{
                    searchProfileApi: { ...state.searchProfileApi, ...profileSuccess },
                }
            }
        case SEARCH_PROFILE_DATA_FAILURE:
            console.log(action, "action...");
            let profileFailure = {
                searchProfileLoading: false,
                searchProfileStatus: action.response.status,
                searchProfileResponse: false,
                searchProfileSuccess: false
            }
            return {
                ...state,
                ...{
                    searchProfileApi: { ...state.searchProfileApi, ...profileFailure },

                }
            }
        case CLEAR_SEARCH_PROFILE_RESPONSE:
            let profileResponse = {
                searchProfileStatus: "",
                searchProfileResponse: "",
                searchProfileSuccess: ""
            }
            return {
                ...state,
                ...{
                    searchProfileApi: { ...state.searchProfileApi, ...profileResponse },

                }
            }
        case CANCEL_REQUEST_DATA_REQUEST:
            return {
                ...state,
                ...{ cancleRequestApi: { ...state.cancleRequestApi, ...{ cancleRequestLoading: true } } }
            }
        case CANCEL_REQUEST_DATA_SUCCESS:
            console.log(action, "action...");
            const { response } = action;
            let clearSuccess = {
                cancleRequestLoading: false,
                cancleRequestStatus: response.data.status,
                cancleRequestMessage: response.data.message,
            }
            return {
                ...state,
                ...{
                    cancleRequestApi: { ...state.cancleRequestApi, ...clearSuccess },
                }
            }
        case CANCEL_REQUEST_DATA_FAILURE:
            console.log(action, "action...");
            let clearFailure = {
                cancleRequestLoading: false,
                cancleRequestStatus: action.response.status,
                cancleRequestMessage: "",
            }
            return {
                ...state,
                ...{
                    cancleRequestApi: { ...state.cancleRequestApi, ...clearFailure },

                }
            }
        case CLEAR_CANCEL_REQUEST_RESPONSE:
            let cancelResponse = {
                cancleRequestStatus: "",
                cancleRequestMessage: "",
            }
            return {
                ...state,
                ...{
                    cancleRequestApi: { ...state.cancleRequestApi, ...cancelResponse },

                }
            }
        case UNFRIEND_DATA_REQUEST:
            return {
                ...state,
                ...{ unfriendApi: { ...state.unfriendApi, ...{ unfriendLoading: true } } }
            }
        case UNFRIEND_DATA_SUCCESS:
            console.log(action, "action...");
            let unfriendSucess = {
                unfriendLoading: false,
                unfriendStatus: action.response.data.status,
                unfriendMessage: action.response.data.message,
            }
            return {
                ...state,
                ...{
                    unfriendApi: { ...state.unfriendApi, ...unfriendSucess },
                }
            }
        case UNFRIEND_DATA_FAILURE:
            console.log(action, "action...");
            let unfriendFailure = {
                unfriendLoading: false,
                unfriendStatus: action.response.status,
                unfriendMessage: "",
            }
            return {
                ...state,
                ...{
                    unfriendApi: { ...state.unfriendApi, ...unfriendFailure },

                }
            }
        case CLEAR_UNFRIEND_RESPONSE:
            let unfriendResponse = {
                unfriendStatus: "",
                unfriendMessage: "",
            }
            return {
                ...state,
                ...{
                    unfriendApi: { ...state.unfriendApi, ...unfriendResponse },

                }
            }
        default:
            return state
    }
}