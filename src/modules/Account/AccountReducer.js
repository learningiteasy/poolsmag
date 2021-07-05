import { CHANGE_GENERAL_INFO_INPUT } from "./AccountConstant"

const initialState = {
    GeneralInput :{
        intro:"",
        specialization:"",
        expertise:"",
        address:"",
        language: ""
    }
  }
  
  export const AccountReducer = (state = initialState, action) => {
      switch (action.type) {
        case CHANGE_GENERAL_INFO_INPUT:
            return{
                ...state,
                ...{ GeneralInput: { ...state.GeneralInput, ...action.newState } }
            }
          default:
              return state
      }
  }