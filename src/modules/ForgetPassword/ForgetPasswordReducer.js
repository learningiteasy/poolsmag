import { CLEAR_FORGET_API_RESPONSE, CLEAR_FORGET_PASSWORD_INPUT, FORGET_PASSWORD_DATA_FAILURE, FORGET_PASSWORD_DATA_REQUEST, FORGET_PASSWORD_DATA_SUCCESS, FORGET_PASSWORD_INPUT } from "./ForgetPasswordConstants"

const initialState = {
    forgetPasswordInput: {
        email: ""
    },

    forgetApiResponse :{
        forgetApiLoading: false,
        forgetApiStatus: "",
        forgetMessage: "",
        forgetApiSuccess: ""
    }
}

export const ForgetPasswordReducer = (state = initialState, action) => {
    switch (action.type) {
        case FORGET_PASSWORD_INPUT:
            return {
                ...state,
                ...{ forgetPasswordInput: { ...state.forgetPasswordInput, ...action.newState } }
            }
        case CLEAR_FORGET_PASSWORD_INPUT:
            let forgetPassword = {
                email: ""
            }
            return {
                ...state,
                ...{
                    forgetPasswordInput: { ...state.forgetPasswordInput, ...forgetPassword }
                }
            }
            case FORGET_PASSWORD_DATA_REQUEST:
                return {
                    ...state,
                    ...{ forgetApiResponse: { ...state.forgetApiResponse, ...{ forgetApiLoading: true } } }
                }
            case FORGET_PASSWORD_DATA_SUCCESS:
                console.log(action, "action...");
                const { response: { data: { success, message } } } = action;
                let forgetStateSuccess = {
                    forgetApiLoading: false,
                    forgetApiStatus: 200,
                    forgetMessage: message,
                    forgetApiSuccess: success
                }
                return {
                    ...state,
                    ...{
                        forgetApiResponse: { ...state.forgetApiResponse, ...forgetStateSuccess }
                    }
                }
            case FORGET_PASSWORD_DATA_FAILURE:
                console.log(action, "action...");
                const forgetApiError = { response: { data: {  message }, status } } = action;
                let forgetStateFailure = {
                    signupApiLoading: false,
                    signupApiStatus: forgetApiError.status,
                    signupMessage: forgetApiError.message,
                    signupApiSuccess:false
                }
                return {
                    ...state,
                    ...{
                        forgetApiResponse: { ...state.forgetApiResponse, ...forgetStateFailure }
                    }
                }
                case CLEAR_FORGET_API_RESPONSE:
                    let forgetResponse = {
                        forgetApiStatus: "",
                        forgetMessage: "",
                        forgetApiSuccess: ""
                    } 
                    return{
                        ...state,
                        ...{
                            forgetApiResponse: { ...state.forgetApiResponse, ...forgetResponse }
                        } 
                    }
        default:
            return state
    }
}