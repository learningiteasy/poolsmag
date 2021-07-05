import { CLEAR_FORGET_API_RESPONSE, CLEAR_FORGET_PASSWORD_INPUT, FORGET_PASSWORD_INPUT } from "./ForgetPasswordConstants"


const changeForgetPasswordInput = (newState) => {
    return { type: FORGET_PASSWORD_INPUT, newState }
}
const clearForgetPasswordInput = (newState) => {
    return { type: CLEAR_FORGET_PASSWORD_INPUT, newState }
}
const clearForgetApiResponse = (newState) => {
    return { type: CLEAR_FORGET_API_RESPONSE, newState } 
}
export { changeForgetPasswordInput, clearForgetPasswordInput , clearForgetApiResponse }