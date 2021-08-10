import { data } from "jquery"
import { CHANGE_ACTIVA_CAROUSAL, CHANGE_ALL_POST_DETAIL, CHANGE_SHARE_INPUT, CLEAR_GET_POST_RESPONSE, CLEAR_INVITE_RESPONSE, CLEAR_POST_UPLOAD_RESPONSE, GET_POST_FAILURE, GET_POST_REQUEST, GET_POST_SUCCESS, INVITE_DATA_FAILURE, INVITE_DATA_REQUEST, INVITE_DATA_SUCCESS, INVITE_MODEL_INPUT, POST_UPLOAD_FAILURE, POST_UPLOAD_REQUEST, POST_UPLOAD_SUCCESS } from "./HomeConstants"

const initialState = {
    inviteModelInput: {
        emails: [],
        message: ""
    },
    SharePostInput: {
        shareText: "",
        mediaFile: [],
        mediaUrl: [],
        fileVisibility: 0
    },
    inviteApiResponse: {
        inviteApiLoading: false,
        inviteApiStatus: "",
        inviteMessage: "",
        inviteApiSuccess: ""
    },
    uploadPostApi: {
        uploadPostLoading: false,
        uploadPostStatus: "",
        uploadPostMessage: "",
        uploadPostResponse: ""
    },
    allPostDetail: {
        allPost: [],
        allPostPage: 1
    },
    getPostApi: {
        getPostLoading: false,
        getPostStatus: "",
        getPostMessage: "",
    },
    activeCarousalDetail: {
        activeCarousal: [],
        activeIndex: ""
    }
}

export const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case INVITE_MODEL_INPUT:
            return {
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
            const { response: { data: { success, message, status } } } = action;
            let inviteApiSucess = {
                inviteApiLoading: false,
                inviteApiStatus: status,
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
            let inviteApiFailure = {
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
        case CLEAR_INVITE_RESPONSE:
            let clearInviteApi = {
                inviteApiLoading: false,
                inviteApiStatus: "",
                inviteMessage: "",
                inviteApiSuccess: ""
            }
            return {
                ...state,
                ...{
                    inviteApiResponse: { ...state.inviteApiResponse, ...clearInviteApi }
                }
            }
        case CHANGE_SHARE_INPUT:
            return {
                ...state,
                ...{ SharePostInput: { ...state.SharePostInput, ...action.newState } }
            }
        case POST_UPLOAD_REQUEST:
            return {
                ...state,
                ...{ uploadPostApi: { ...state.uploadPostApi, ...{ uploadPostLoading: true } } }
            }
        case POST_UPLOAD_SUCCESS:
            console.log(action, "action...");
            // const { response: { data: { data}} } = action;
            console.log(action.response.data.status, "response")
            let uploadApiSucess = {
                uploadPostLoading: false,
                uploadPostStatus: action.response.data.status,
                uploadPostMessage: action.response.data.message,
                uploadPostResponse: !!action.response.data.success? action.response.data.success: ""
            }
            return {
                ...state,
                ...{
                    uploadPostApi: { ...state.uploadPostApi, ...uploadApiSucess }
                }
            }
        case POST_UPLOAD_FAILURE:
            console.log(action, "action...");
            let uploadFailure = {
                uploadPostLoading: false,
                uploadPostStatus: action.status,
                uploadPostMessage: action.response.data.message,
                uploadPostResponse: ""

            }

            return {
                ...state,
                ...{
                    uploadPostApi: { ...state.uploadPostApi, ...uploadFailure }
                }
            }
        case CLEAR_POST_UPLOAD_RESPONSE:
            let clearUpload = {
                uploadPostStatus: "",
                uploadPostMessage: "",
                uploadPostResponse: ""
            }
            return {
                ...state,
                ...{
                    uploadPostApi: { ...state.uploadPostApi, ...clearUpload }
                }
            }
        case GET_POST_REQUEST:
            return {
                ...state,
                ...{ getPostApi: { ...state.getPostApi, ...{ getPostLoading: true } } }
            }
        case GET_POST_SUCCESS:
            console.log(action, "action...");
            let getApiSucess = {
                getPostLoading: false,
                getPostStatus: action.response.data.status,
                getPostMessage: action.response.data.message

            }
            return {
                ...state,
                ...{
                    getPostApi: { ...state.getPostApi, ...getApiSucess },
                    ...{ allPostDetail: { ...state.allPostDetail, ...{ allPost: !!action.response.data.list ? [...state.allPostDetail.allPost , ...action.response.data.list] : [] } } }
                }
            }
        case GET_POST_FAILURE:
            console.log(action, "action...");
            let getApiFailure = {
                getPostLoading: false,
                getPostStatus: action.status,
                getPostMessage: action.response.data.message

            }

            return {
                ...state,
                ...{
                    getPostApi: { ...state.getPostApi, ...getApiFailure },
                    ...{ allPostDetail: { ...state.allPostDetail, ...{ allPost: [] } } }
                }
            }
        case CLEAR_GET_POST_RESPONSE:
            let clearGetResponse = {
                getPostStatus: "",
                getPostMessage: "",
            }
            let clearPostDetail={
                allPost: [],
                allPostPage:1
            }
            return {
                ...state,
                ...{
                    getPostApi: { ...state.getPostApi, ...clearGetResponse },
                     allPostDetail: { ...state.allPostDetail, ...clearPostDetail } 
                }
            }
        case CHANGE_ACTIVA_CAROUSAL:
            return {
                ...state,
                ...{ activeCarousalDetail: { ...state.activeCarousalDetail, ...action.newState } }
            }
        case CHANGE_ALL_POST_DETAIL:
            return{
                ...state,
                ...{ allPostDetail: { ...state.allPostDetail, ...action.newState } }
            }
        default:
            return state
    }
}