import { CHANGE_GENERAL_INFO_INPUT } from "./AccountConstant"

const changeGeneralInfoInput = (newState) => {
    return{type:CHANGE_GENERAL_INFO_INPUT , newState}
}
export {changeGeneralInfoInput}