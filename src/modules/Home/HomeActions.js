import { CHANGE_ACTIVA_CAROUSAL, CHANGE_ALL_POST_DETAIL, CHANGE_SHARE_INPUT, CLEAR_GET_POST_RESPONSE, CLEAR_INVITE_RESPONSE, CLEAR_POST_UPLOAD_RESPONSE, INVITE_MODEL_INPUT } from "./HomeConstants"

const changeInviteModelInput = (newState) => {
    return{type:INVITE_MODEL_INPUT , newState}
}
const clearinviteapiResponse = (newState) =>{
    return{type :CLEAR_INVITE_RESPONSE , newState}
}
const changeSharePostInput =(newState) => {
    return{type:CHANGE_SHARE_INPUT , newState}
}
const clearPostUploadResponse =(newState) => {
    return{type:CLEAR_POST_UPLOAD_RESPONSE , newState}
}
const clearGetPostDetail = (newState) => {
    return{type:CLEAR_GET_POST_RESPONSE , newState}
}
const changeActiveCarousal = (newState) => {
    return{type: CHANGE_ACTIVA_CAROUSAL ,newState}
}
const changeAllPostDetail = (newState) => {
    return{type:CHANGE_ALL_POST_DETAIL , newState}
}

export{changeInviteModelInput,clearinviteapiResponse ,changeSharePostInput ,clearPostUploadResponse,clearGetPostDetail,
    changeActiveCarousal , changeAllPostDetail
}