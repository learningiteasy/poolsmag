import { CLEAR_CANCEL_REQUEST_RESPONSE, CLEAR_SEARCH_PROFILE_RESPONSE, CLEAR_UNFRIEND_RESPONSE } from "./SearchProfileConstant"

const clearProfileResponse = (newState) => {
return{type:CLEAR_SEARCH_PROFILE_RESPONSE , newState}
}
const clearCancelRequestResponse = (newState) => {
    return{type:CLEAR_CANCEL_REQUEST_RESPONSE , newState}
}
const clearUnfriendResponse = (newState) => {
    return{type:CLEAR_UNFRIEND_RESPONSE , newState}
}
export{clearProfileResponse ,clearCancelRequestResponse ,clearUnfriendResponse}