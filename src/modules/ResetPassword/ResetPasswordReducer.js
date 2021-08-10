import { CLEAR_RESET_API_RESPONSE, CLEAR_RESET_PASSWORD_INPUT, RESET_PASSWORD_DATA_FAILURE, RESET_PASSWORD_DATA_REQUEST, RESET_PASSWORD_DATA_SUCCESS, RESET_PASSWORD_INPUT } from "./ResetPasswordConstant"

const initialState = {
    resetPasswordInput: {
        password: "",
        verifyPassword: ""
    },
    resetApiResponse: {
        resetApiLoading: false,
        resetApiStatus: "",
        resetMessage: "",
        resetApiSuccess: ""
    }
}

export const ResetPasswordReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET_PASSWORD_INPUT:
            return {
                ...state,
                ...{ resetPasswordInput: { ...state.resetPasswordInput, ...action.newState } }
            }
        case CLEAR_RESET_PASSWORD_INPUT:
            let resetPassword = {
                password: "",
                verifyPassword: ""
            }
            return {
                ...state,
                ...{
                    resetPasswordInput: { ...state.resetPasswordInput, ...resetPassword }
                }
            }

        case RESET_PASSWORD_DATA_REQUEST:
            return {
                ...state,
                ...{ resetApiResponse: { ...state.resetApiResponse, ...{ resetApiLoading: true } } }
            }
        case RESET_PASSWORD_DATA_SUCCESS:
            console.log(action, "action...");
            const { response: { data: { success, message } } } = action;
            let resetStateSuccess = {
                resetApiLoading: false,
                resetApiStatus: 200,
                resetMessage: message,
               
            }
            return {
                ...state,
                ...{
                    resetApiResponse: { ...state.resetApiResponse, ...resetStateSuccess }
                }
            }
        case RESET_PASSWORD_DATA_FAILURE:
            console.log(action, "action...");
            // const { response: { data: { message }, status } } = action;
            let resetStateFailure = {
                resetApiLoading: false,
                resetApiStatus: action.response.status,
                resetMessage: action.response.message,
            }
            return {
                ...state,
                ...{
                    resetApiResponse: { ...state.resetApiResponse, ...resetStateFailure }
                }
            }
        case CLEAR_RESET_API_RESPONSE:
            let resetResponse = {
                resetApiStatus: "",
                resetMessage: "",
            }
            return {
                ...state,
                ...{
                    resetApiResponse: { ...state.resetApiResponse, ...resetResponse }
                }
            }
        default:
            return state
    }
}