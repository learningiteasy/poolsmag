import { CHANGE_LOGIN_INPUT, CLEAR_LOGIN_API_RESPONSE, CLEAR_LOGIN_INPUT } from "./LoginConstants"

const changeLoginInput = (newState) => {
    return { type: CHANGE_LOGIN_INPUT, newState }
}
const clearLoginInput = (newState) => {
    return { type: CLEAR_LOGIN_INPUT, newState }
}
const clearLoginApiResponse = (newState) => {
    return { type: CLEAR_LOGIN_API_RESPONSE, newState }
}
export { changeLoginInput, clearLoginInput , clearLoginApiResponse }