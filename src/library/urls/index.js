const API_BASE_URL = 'http://167.172.209.57/poolsmagnic/api';

const IMAGE_BASE_URL = "http://167.172.209.57/poolsmagnic/public/images/";
// ---------------------- login API's start ----------------------------------//

const getApiUrl = (endpoint) => API_BASE_URL + endpoint;
const LOGIN_DATA_API = getApiUrl("/login");
const SIGNUP_DATA_API = getApiUrl("/register");
const FORGOT_PASSWORD_DATA_API = getApiUrl("/forgot-password");
const RESET_PASSWORD_DATA_API = getApiUrl("/change-password");
const INVITE_DATA_API = getApiUrl("/invite");
const GET_PROFILE_API = getApiUrl("/get-profile");
const UPDATE_ADDITIONAL_INFO = getApiUrl("/additional-info");
const LANGUAGE_LIST_API = getApiUrl("/language-list")
const SKILLS_LIST_API = getApiUrl("/skills-list")
const ADD_SOCIAL_ICON_API = getApiUrl("/add-social");
const GET_SOCIAL_ICON_API = getApiUrl("/get-social");
const SPECIALIZATION_LIST_API = getApiUrl("/specializations-list");
/**
 * projects urls
 */
const GET_PROJECTS_API = getApiUrl("/projects-list");
const SAVE_MY_PROJECTS_API = getApiUrl("/add-projects")
const DELETE_PROJECT_API = getApiUrl("/delete-project")
const UPDATE_PROJECT_API = getApiUrl("/update-project")

/**
 * employments urls
 */
 const GET_EMPLOYMENTS_API = getApiUrl("/employment-list");
 const SAVE_MY_EMPLOYMENTS_API = getApiUrl("/add-employment")
 const DELETE_EMPLOYMENT_API = getApiUrl("/delete-employment")
 const UPDATE_EMPLOYMENT_API = getApiUrl("/update-employment")
 /**
  * search list
  */
  const SEARCH_LIST_API = getApiUrl("/search-user");
  const SEARCH_PROFILE_DATA_API = getApiUrl("/get-additional-details");
  const SEND_REQUEST_API = getApiUrl("/send-request");
  const CANCEL_REQUEST_API = getApiUrl("/delete-request");
  const ACCEPT_REQUEST_API = getApiUrl("/accept-request")
  const DECLINE_REQUEST_API = getApiUrl("/cancel-request")
  const ALL_NOTIFICATION_API = getApiUrl("/notifications")
  const UNFRIEND_USER_API = getApiUrl("/unfriend")
  const POST_UPLOAD_API =getApiUrl("/post-something")
  const ONSCREEN_NOTIFICATION_API =getApiUrl("/onScreenNotification")
  const READALL_NOTIFICATION_API =getApiUrl("/readnotificaton")
  const GET_POST_API = getApiUrl("/getpost")
  const LIKE_DISLIKE_POST_API =  getApiUrl("/likedislike")

export {
    LOGIN_DATA_API, SIGNUP_DATA_API, FORGOT_PASSWORD_DATA_API, RESET_PASSWORD_DATA_API, INVITE_DATA_API,
    GET_PROFILE_API, IMAGE_BASE_URL, UPDATE_ADDITIONAL_INFO ,LANGUAGE_LIST_API ,SKILLS_LIST_API,

    GET_PROJECTS_API, SAVE_MY_PROJECTS_API, DELETE_PROJECT_API, UPDATE_PROJECT_API,

    GET_EMPLOYMENTS_API, SAVE_MY_EMPLOYMENTS_API, DELETE_EMPLOYMENT_API, UPDATE_EMPLOYMENT_API,

    ADD_SOCIAL_ICON_API, GET_SOCIAL_ICON_API ,SPECIALIZATION_LIST_API ,SEARCH_LIST_API ,SEARCH_PROFILE_DATA_API,
    SEND_REQUEST_API,CANCEL_REQUEST_API ,ACCEPT_REQUEST_API , DECLINE_REQUEST_API ,ALL_NOTIFICATION_API,UNFRIEND_USER_API,
    POST_UPLOAD_API ,ONSCREEN_NOTIFICATION_API ,READALL_NOTIFICATION_API,GET_POST_API,LIKE_DISLIKE_POST_API
}