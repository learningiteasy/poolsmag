import { CHANGE_LOGIN_INPUT, CLEAR_LOGIN_API_RESPONSE, CLEAR_LOGIN_INPUT, LOGIN_DATA_FAILURE, LOGIN_DATA_REQUEST, LOGIN_DATA_SUCCESS } from "./LoginConstants"

const initialState = {
    loginInput: {
        name: "",
        password: ""
    },

    loginApiResponse: {
        loginApiLoading: false,
        loginApiStatus: "",
        loginMessage: "",
        loginDataResponse: "",
        is_individual: true
    }
}

export const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LOGIN_INPUT:
            return {
                ...state,
                ...{ loginInput: { ...state.loginInput, ...action.newState } }
            }
        case CLEAR_LOGIN_INPUT:
            let loginField = {
                name: "",
                password: ""
            }
            return {
                ...state,
                ...{
                    loginInput: { ...state.loginInput, ...loginField }
                }
            }
        case LOGIN_DATA_REQUEST:
            return {
                ...state,
                ...{ loginApiResponse: { ...state.loginApiResponse, ...{ loginApiLoading: true } } }
            }
        case LOGIN_DATA_SUCCESS:
            console.log(action, "action...");
            const { response: { data: { data, success ,message ,status} } } = action;
            let loginStateSuccess = {
                loginApiLoading: false,
                loginApiStatus: status,
                loginMessage: message,
                loginDataResponse: data,
                is_individual: success ? data.is_individual : true
            }
            return {
                ...state,
                ...{
                    loginApiResponse: { ...state.loginApiResponse, ...loginStateSuccess }
                }
            }
        case LOGIN_DATA_FAILURE:
            let loginStateFailure = {
                loginApiLoading: false,
                loginApiStatus: action.response.data.status,
                loginMessage: action.response.data.message,
                loginDataResponse: "",
                is_individual: true
            }
            return {
                ...state,
                ...{
                    loginApiResponse: { ...state.loginApiResponse, ...loginStateFailure }
                }
            }
        case CLEAR_LOGIN_API_RESPONSE:
            let loginResponse = {
                loginApiStatus: "",
                loginMessage: "",
                is_individual: true
            }
            return {
                ...state,
                ...{
                    loginApiResponse: { ...state.loginApiResponse, ...loginResponse }
                }
            }
        default:
            return state
    }
}