import { CLEAR_SEARCH_LIST_RESPONSE, CLEAR_SEND_REQUEST_RESPONSE } from "./SearchListConstant"

const clearSearchListResponse = (newState) => {
    return{ type:CLEAR_SEARCH_LIST_RESPONSE , newState}
}
const clearSendRequestResponse = (newState) => {
    return{type:CLEAR_SEND_REQUEST_RESPONSE , newState}
}
export{clearSearchListResponse ,clearSendRequestResponse}