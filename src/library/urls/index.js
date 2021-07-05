const API_BASE_URL = 'http://167.172.209.57/poolsmagnic/api';

// ---------------------- login API's start ----------------------------------//

const getApiUrl = (endpoint) => API_BASE_URL + endpoint;
const LOGIN_DATA_API = getApiUrl("/login");
const SIGNUP_DATA_API = getApiUrl("/register");
const FORGOT_PASSWORD_DATA_API = getApiUrl("/forgot-password");
const RESET_PASSWORD_DATA_API = getApiUrl("/change-password");
const INVITE_DATA_API = getApiUrl("/invite");
const GET_PROFILE_API = getApiUrl("/get-profile");
const UPDATE_ADDITIONAL_INFO = getApiUrl("/additional-info");

export{LOGIN_DATA_API ,SIGNUP_DATA_API , FORGOT_PASSWORD_DATA_API,RESET_PASSWORD_DATA_API ,INVITE_DATA_API,
    GET_PROFILE_API,UPDATE_ADDITIONAL_INFO}