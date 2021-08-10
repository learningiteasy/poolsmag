import { GET_API, POST_API } from "../../main/fetch"
import { GET_POST_FAILURE, GET_POST_REQUEST, GET_POST_SUCCESS, INVITE_DATA_FAILURE, INVITE_DATA_REQUEST, INVITE_DATA_SUCCESS, POST_UPLOAD_FAILURE, POST_UPLOAD_REQUEST, POST_UPLOAD_SUCCESS } from "../../modules/Home/HomeConstants"
import { GET_POST_API, INVITE_DATA_API, POST_UPLOAD_API } from "../urls"

const inviteApi = (body) => {
    return {
        [POST_API]: {
            endpoint: INVITE_DATA_API,
            types: [INVITE_DATA_REQUEST,
                INVITE_DATA_SUCCESS,
                INVITE_DATA_FAILURE],
            body
        }
    }
}
 const postUploadApi = (body) => {
     return{
        [POST_API]: {
            endpoint: POST_UPLOAD_API,
            types: [POST_UPLOAD_REQUEST,
                POST_UPLOAD_SUCCESS,
                POST_UPLOAD_FAILURE],
            body,
            is_form_data: true
        }
     }
 }
 const getPostApi = (page) => {
    return{
       [GET_API]: {
           endpoint: GET_POST_API+"?page="+page,
           types: [GET_POST_REQUEST,
            GET_POST_SUCCESS,
            GET_POST_FAILURE],
       }
    }
}
export{inviteApi ,postUploadApi,getPostApi}