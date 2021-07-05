import { CLEAR_INVITE_RESPONSE, INVITE_MODEL_INPUT } from "./HomeConstants"

const changeInviteModelInput = (newState) => {
    return{type:INVITE_MODEL_INPUT , newState}
}
const clearinviteapiResponse = (newState) =>{
    return{type :CLEAR_INVITE_RESPONSE , newState}
}
export{changeInviteModelInput,clearinviteapiResponse}