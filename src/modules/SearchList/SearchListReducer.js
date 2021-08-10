import { CLEAR_SEARCH_LIST_RESPONSE, CLEAR_SEND_REQUEST_RESPONSE, SEARCH_LIST_DATA_FAILURE, SEARCH_LIST_DATA_REQUEST, SEARCH_LIST_DATA_SUCCESS, SEND_REQUEST_DATA_FAILURE, SEND_REQUEST_DATA_REQUEST, SEND_REQUEST_DATA_SUCCESS } from "./SearchListConstant";

const initialState = {
  searchList: [],
  searchApi: {
    searchListLoading: false,
    searchListStatus: "",
    is_list_empty: "",
    searchListSuccess: "",
  },
  sendRequestApi: {
    sendRequestLoading: "",
    sendRequestStatus: "",
    sendRequestSuccess: "",
    sendRequestMessage: ""
  }
}
export const SearchListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_LIST_DATA_REQUEST:
      return {
        ...state,
        ...{ searchApi: { ...state.searchApi, ...{ searchListLoading: true } } }
      }
    case SEARCH_LIST_DATA_SUCCESS:
      console.log(action, "action...");
      const { response: { data: { success, data } } } = action;
      let searchStateSuccess = {
        searchListLoading: false,
        searchListStatus: 200,
        is_list_empty: !!data ? (data.length == 0 ? true : false) : false,
        searchListSuccess: success
      }
      return {
        ...state,
        ...{
          searchApi: { ...state.searchApi, ...searchStateSuccess },
          searchList: !!data ? data : []
        }
      }
    case SEARCH_LIST_DATA_FAILURE:
      console.log(action, "action...");
      let searchListFailure = {
        searchListLoading: false,
        searchListStatus: action.response.status,
        is_list_empty: false,
        searchListSuccess: false
      }
      return {
        ...state,
        ...{
          searchApi: { ...state.searchApi, ...searchListFailure },
          searchList: []
        }
      }
    case CLEAR_SEARCH_LIST_RESPONSE:
      let clearSearchResponse = {
        searchListStatus: "",
        is_list_empty: "",
        searchListSuccess: ""
      }
      return {
        ...state,
        ...{
          searchApi: { ...state.searchApi, ...clearSearchResponse },
          searchList:[]
        }
      }
    case SEND_REQUEST_DATA_REQUEST:
      return {
        ...state,
        ...{ sendRequestApi: { ...state.sendRequestApi, ...{ sendRequestLoading: true } } }
      }
    case SEND_REQUEST_DATA_SUCCESS:
      console.log(action, "action...");
      const { response } = action;
      let requestStateSuccess = {
        sendRequestLoading: false,
        sendRequestStatus: response.data.status,
        sendRequestMessage: response.data.message,
        sendRequestSuccess: response.data.success
      }
      return {
        ...state,
        ...{
          sendRequestApi: { ...state.sendRequestApi, ...requestStateSuccess }
        }
      }
    case SEND_REQUEST_DATA_FAILURE:
      console.log(action, "action...");
      let sendRequestFailure = {
        sendRequestLoading: false,
        sendRequestStatus: action.response.status,
        sendRequestMessage: "",
        sendRequestSuccess: ""
      }
      return {
        ...state,
        ...{
          sendRequestApi: { ...state.sendRequestApi, ...sendRequestFailure }
        }
      }
    case CLEAR_SEND_REQUEST_RESPONSE:
      let clearSendResponse = {
        sendRequestStatus: "",
        sendRequestMessage: "",
        sendRequestSuccess: ""
      }
      return {
        ...state,
        ...{
          sendRequestApi: { ...state.sendRequestApi, ...clearSendResponse },
        }
      }
    default:
      return state
  }
}