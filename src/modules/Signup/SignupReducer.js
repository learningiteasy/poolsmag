import { CHANGE_SIGNUP_BUSSINESS_INPUT, CHANGE_SIGNUP_INDIVIDUAL_INPUT, CHECK_ISFINAL_INDIVIDUAL_INPUT, CHECK_SIGNUP_INDIVIDUAL_INPUT, CLEAR_SIGNUP_API_RESPONSE, CLEAR_SIGNUP_PAGE, SIGNUP_DATA_FAILURE, SIGNUP_DATA_REQUEST, SIGNUP_DATA_SUCCESS } from "./SignupConstants"

const initialState = {
    signUpIndividual: {
        individualName: "",
        email: "",
        phoneNo: ""
    },
    signUpBussiness: {
        businessName: "",
        password: "",
        verifyPassword: ""
    },
    is_individual: "true",
    is_individual_final: true,

    SignupApiResponse: {
        signupApiLoading: false,
        signupApiStatus: "",
        signupMessage: "",
    }
}

export const SignupReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SIGNUP_INDIVIDUAL_INPUT: {
            return {
                ...state,
                ...{ signUpIndividual: { ...state.signUpIndividual, ...action.newState } }
            }
        }
        case CHANGE_SIGNUP_BUSSINESS_INPUT: {
            return {
                ...state,
                ...{ signUpBussiness: { ...state.signUpBussiness, ...action.newState } }
            }
        }
        case CHECK_SIGNUP_INDIVIDUAL_INPUT: {
            return {
                ...state,
                ...action.newState
            }
        }
        case CHECK_ISFINAL_INDIVIDUAL_INPUT:
            return {
                ...state,
                ...action.newState
            }
        case CLEAR_SIGNUP_PAGE:
            let Individual = {
                individualName: "",
                email: "",
                phoneNo: "",
            }
            let business = {
                businessName: "",
                password: "",
                verifyPassword: "",
            }
            return {
                ...state,
                ...{
                    signUpIndividual: { ...state.signUpIndividual, ...Individual },
                    signUpBussiness: { ...state.signUpBussiness, ...business },
                }
            }
        case SIGNUP_DATA_REQUEST:
            return {
                ...state,
                ...{ SignupApiResponse: { ...state.SignupApiResponse, ...{ signupApiLoading: true } } }
            }
        case SIGNUP_DATA_SUCCESS:
            console.log(action, "action...");
            const { response: { data: { success, message ,status } } } = action;
            let signupStateSuccess = {
                signupApiLoading: false,
                signupApiStatus:status ,
                signupMessage: message,
            }
            return {
                ...state,
                ...{
                    SignupApiResponse: { ...state.SignupApiResponse, ...signupStateSuccess }
                }
            }
        case SIGNUP_DATA_FAILURE:
            console.log(action, "action...");
            // const signupApiError = { response: { data: {  message }, status } } = action;
            let signupStateFailure = {
                signupApiLoading: false,
                signupApiStatus: action.response.status,
                signupMessage: action.response.message,
            }
            return {
                ...state,
                ...{
                    SignupApiResponse: { ...state.SignupApiResponse, ...signupStateFailure }
                }
            }
            case CLEAR_SIGNUP_API_RESPONSE:
                let signupResponse = {
                    signupApiStatus: "",
                    signupMessage: "",
                } 
                return{
                    ...state,
                    ...{
                        SignupApiResponse: { ...state.SignupApiResponse, ...signupResponse }
                    } 
                }
        default:
            return state
    }
}