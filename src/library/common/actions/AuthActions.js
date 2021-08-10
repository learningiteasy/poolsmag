import { CHANGE_IS_AUTH } from "../constants/AuthConstants"

const changeIsAuth = (newState) => {
    return { type: CHANGE_IS_AUTH, newState }
}

export {
    changeIsAuth  
}