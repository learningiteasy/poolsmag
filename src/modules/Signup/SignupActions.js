import {
    CHANGE_SIGNUP_INDIVIDUAL_INPUT, CHANGE_SIGNUP_BUSSINESS_INPUT, CHECK_SIGNUP_INDIVIDUAL_INPUT,
    CHECK_ISFINAL_INDIVIDUAL_INPUT,
    CLEAR_SIGNUP_PAGE,
    CLEAR_SIGNUP_API_RESPONSE
} from "./SignupConstants"

const changeLoginIndividualInput = (newState) => {
    return { type: CHANGE_SIGNUP_INDIVIDUAL_INPUT, newState }
}

const changeLoginBusinessInput = (newState) => {
    return { type: CHANGE_SIGNUP_BUSSINESS_INPUT, newState }
}

const changeIsIndividualInput = (newState) => {
    return { type: CHECK_SIGNUP_INDIVIDUAL_INPUT, newState }
}
const changeIsFinalIndividualInput = (newState) => {
    return { type: CHECK_ISFINAL_INDIVIDUAL_INPUT, newState }
}
const clearSignupPage = (newState) => {
    return { type: CLEAR_SIGNUP_PAGE, newState }
}
const clearSignupApiResponse = (newState) => {
    return { type: CLEAR_SIGNUP_API_RESPONSE, newState }
}

export {
    changeLoginIndividualInput, changeLoginBusinessInput, changeIsIndividualInput,
    changeIsFinalIndividualInput, clearSignupPage ,clearSignupApiResponse
}