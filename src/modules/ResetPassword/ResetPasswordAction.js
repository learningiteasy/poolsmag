import { CLEAR_RESET_API_RESPONSE, CLEAR_RESET_PASSWORD_INPUT, RESET_PASSWORD_INPUT } from "./ResetPasswordConstant"

const changeResetPasswordInput = (newState) => {
    return { type: RESET_PASSWORD_INPUT, newState }
}

const clearResetPasswordInput = (newState) => {
    return { type: CLEAR_RESET_PASSWORD_INPUT, newState }
}

const clearResetApiResponse =(newState) => {
    return { type: CLEAR_RESET_API_RESPONSE, newState }
}
export { changeResetPasswordInput, clearResetPasswordInput ,clearResetApiResponse }