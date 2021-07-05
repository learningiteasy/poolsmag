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
        loginApiSuccess: ""
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
            const { response: { data: { data, success ,message} } } = action;
            let loginStateSuccess = {
                loginApiLoading: false,
                loginApiStatus: 200,
                loginMessage: message,
                loginDataResponse: data,
                loginApiSuccess: success
            }
            return {
                ...state,
                ...{
                    loginApiResponse: { ...state.loginApiResponse, ...loginStateSuccess }
                }
            }
        case LOGIN_DATA_FAILURE:
            console.log(action, "action...");
            // const loginApiError = { response: { data } } = action;
            let loginStateFailure = {
                loginApiLoading: false,
                loginApiStatus: action.response.status,
                loginMessage: action.response.message,
                loginDataResponse: "",
                loginApiSuccess: action.response.success
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
                loginDataResponse: "",
                loginApiSuccess: ""
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