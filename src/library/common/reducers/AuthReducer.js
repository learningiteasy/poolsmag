
import { getCookie } from '../../utilities/functions'
import { CHANGE_IS_AUTH } from '../constants/AuthConstants'
const initialState = {
  is_auth:  !!getCookie("token_id")?true :false
}

export const Authreducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_IS_AUTH:
            return{
                ...state,
                ...action.newState
            }
        default:
            return state
    }
}