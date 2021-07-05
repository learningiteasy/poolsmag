import { CLEAR_INVITE_RESPONSE, INVITE_DATA_FAILURE, INVITE_DATA_REQUEST, INVITE_DATA_SUCCESS, INVITE_MODEL_INPUT } from "./HomeConstants"

const initialState = {
   inviteModelInput :{
       emails :[],
       message:""
   },
   inviteApiResponse: {
    inviteApiLoading: false,
    inviteApiStatus: "",
    inviteMessage: "",
    inviteApiSuccess: ""
}
  }
  
  export const HomeReducer = (state = initialState, action) => {
      switch (action.type) {
          case INVITE_MODEL_INPUT:
          return{
            ...state,
            ...{ inviteModelInput: { ...state.inviteModelInput, ...action.newState } }
          }
          case INVITE_DATA_REQUEST:
            return {
                ...state,
                ...{ inviteApiResponse: { ...state.inviteApiResponse, ...{ inviteApiLoading: true } } }
            }
        case INVITE_DATA_SUCCESS:
            console.log(action, "action...");
            const { response: { data: { success ,message} } } = action;
            let inviteApiSucess ={
                inviteApiLoading: false,
                inviteApiStatus: 200,
                inviteMessage: message,
                inviteApiSuccess: success
            }
          
            return {
                ...state,
                ...{
                    inviteApiResponse: { ...state.inviteApiResponse, ...inviteApiSucess }
                }
            }
        case INVITE_DATA_FAILURE:
            console.log(action, "action...");
            // const { response: { data: { message }, status } } = action;
            let inviteApiFailure ={
                inviteApiLoading: false,
                inviteApiStatus: action.status,
                inviteMessage: action.response.data.message,
                inviteApiSuccess: false
            }
         
            return {
                ...state,
                ...{
                    inviteApiResponse: { ...state.inviteApiResponse, ...inviteApiFailure }
                }
            }
            case CLEAR_INVITE_RESPONSE :
                let clearInviteApi = {
                    inviteApiLoading: false,
                    inviteApiStatus: "",
                    inviteMessage: "",
                    inviteApiSuccess: ""
                }
                return{
                    ...state,
                    ...{
                        inviteApiResponse: { ...state.inviteApiResponse, ...clearInviteApi }
                    }
                }
          default:
              return state
      }
  }