import { GET_API, POST_API } from "../../main/fetch"
import {
    GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, LANGUAGE_LIST_FAILURE, LANGUAGE_LIST_REQUEST,
    LANGUAGE_LIST_SUCCESS, SKILLS_LIST_FAILURE, SKILLS_LIST_REQUEST, SKILLS_LIST_SUCCESS,
    UPDATE_ADDITIONAL_INFO_FAILURE, UPDATE_ADDITIONAL_INFO_REQUEST, UPDATE_ADDITIONAL_INFO_SUCCESS,
    
    SAVE_MY_PROJECTS_REQUEST, SAVE_MY_PROJECTS_SUCCESS, SAVE_MY_PROJECTS_FAILURE, DELETE_PROJECT_REQUEST,
    DELETE_PROJECT_SUCCESS, DELETE_PROJECT_FAILURE, UPDATE_PROJECT_REQUEST, UPDATE_PROJECT_SUCCESS,
    UPDATE_PROJECT_FAILURE, GET_PROJECTS_FAILURE, GET_PROJECTS_REQUEST, GET_PROJECTS_SUCCESS,

    SAVE_MY_EMPLOYMENTS_REQUEST, SAVE_MY_EMPLOYMENTS_SUCCESS, SAVE_MY_EMPLOYMENTS_FAILURE, DELETE_EMPLOYMENT_REQUEST,
    DELETE_EMPLOYMENT_SUCCESS, DELETE_EMPLOYMENT_FAILURE, UPDATE_EMPLOYMENT_REQUEST, UPDATE_EMPLOYMENT_SUCCESS,
    UPDATE_EMPLOYMENT_FAILURE, GET_EMPLOYMENTS_FAILURE, GET_EMPLOYMENTS_REQUEST, GET_EMPLOYMENTS_SUCCESS,

    GET_SOCIAL_ICON_REQUEST,
    GET_SOCIAL_ICON_SUCCESS,
    GET_SOCIAL_ICON_FAILURE,

    ADD_SOCIAL_ICON_REQUEST,
    ADD_SOCIAL_ICON_SUCCESS,
ADD_SOCIAL_ICON_FAILURE
} from "../../modules/Account/AccountConstant"
import {
    GET_PROFILE_API, LANGUAGE_LIST_API, SKILLS_LIST_API, UPDATE_ADDITIONAL_INFO,
    GET_PROJECTS_API, SAVE_MY_PROJECTS_API, DELETE_PROJECT_API, UPDATE_PROJECT_API,
    GET_EMPLOYMENTS_API, SAVE_MY_EMPLOYMENTS_API, DELETE_EMPLOYMENT_API, UPDATE_EMPLOYMENT_API, GET_SOCIAL_ICON_API, ADD_SOCIAL_ICON_API
} from "../urls"

const getProfileApi = () => {
    return {
        [GET_API]: {
            endpoint: GET_PROFILE_API,
            types: [GET_PROFILE_REQUEST,
                GET_PROFILE_SUCCESS,
                GET_PROFILE_FAILURE]
        }
    }
}

const updateAdditinalApi = (body) => {
    return {
        [POST_API]: {
            endpoint: UPDATE_ADDITIONAL_INFO,
            types: [UPDATE_ADDITIONAL_INFO_REQUEST,
                UPDATE_ADDITIONAL_INFO_SUCCESS,
                UPDATE_ADDITIONAL_INFO_FAILURE],
            body,
            is_form_data: true
        }
    }
}
const languageListApi = () => {
    return {
        [GET_API]: {
            endpoint: LANGUAGE_LIST_API,
            types: [LANGUAGE_LIST_REQUEST,
                LANGUAGE_LIST_SUCCESS,
                LANGUAGE_LIST_FAILURE],
        }
    }
}
const skilsListApi = () => {
    return {
        [GET_API]: {
            endpoint: SKILLS_LIST_API,
            types: [SKILLS_LIST_REQUEST,
                SKILLS_LIST_SUCCESS,
                SKILLS_LIST_FAILURE],
        }
    }
}

/**
 * projects api service
 */
const getProjectsApi = () => {
    return {
        [GET_API]: {
            endpoint: GET_PROJECTS_API,
            types: [GET_PROJECTS_REQUEST,
                GET_PROJECTS_SUCCESS,
                GET_PROJECTS_FAILURE]
        }
    }
}

const saveMyProjectsApi = (body) => {
    return {
        [POST_API]: {
            endpoint: SAVE_MY_PROJECTS_API,
            types: [SAVE_MY_PROJECTS_REQUEST,
                SAVE_MY_PROJECTS_SUCCESS,
                SAVE_MY_PROJECTS_FAILURE],
            body,
            is_form_data: false
        }
    }
}

const deleteProjectApi = (body) => {
    return {
        [POST_API]: {
            endpoint: DELETE_PROJECT_API,
            types: [DELETE_PROJECT_REQUEST,
                DELETE_PROJECT_SUCCESS,
                DELETE_PROJECT_FAILURE],
            body,
            is_form_data: false
        }
    }
}

const updateProjectApi = (body) => {
    return {
        [POST_API]: {
            endpoint: UPDATE_PROJECT_API,
            types: [UPDATE_PROJECT_REQUEST,
                UPDATE_PROJECT_SUCCESS,
                UPDATE_PROJECT_FAILURE],
            body,
            is_form_data: false
        }
    }
}

/**
 * Employment Api Service
 */

 const getEmploymentsApi = () => {
    return {
        [GET_API]: {
            endpoint: GET_EMPLOYMENTS_API,
            types: [GET_EMPLOYMENTS_REQUEST,
                GET_EMPLOYMENTS_SUCCESS,
                GET_EMPLOYMENTS_FAILURE]
        }
    }
}

const saveMyEmploymentsApi = (body) => {
    return {
        [POST_API]: {
            endpoint: SAVE_MY_EMPLOYMENTS_API,
            types: [SAVE_MY_EMPLOYMENTS_REQUEST,
                SAVE_MY_EMPLOYMENTS_SUCCESS,
                SAVE_MY_EMPLOYMENTS_FAILURE],
            body,
            is_form_data: false
        }
    }
}

const deleteEmploymentApi = (body) => {
    return {
        [POST_API]: {
            endpoint: DELETE_EMPLOYMENT_API,
            types: [DELETE_EMPLOYMENT_REQUEST,
                DELETE_EMPLOYMENT_SUCCESS,
                DELETE_EMPLOYMENT_FAILURE],
            body,
            is_form_data: false
        }
    }
}

const updateEmploymentApi = (body) => {
    return {
        [POST_API]: {
            endpoint: UPDATE_EMPLOYMENT_API,
            types: [UPDATE_EMPLOYMENT_REQUEST,
                UPDATE_EMPLOYMENT_SUCCESS,
                UPDATE_EMPLOYMENT_FAILURE],
            body,
            is_form_data: false
        }
    }
}

const getSocialIconApi = () => {
    return {
        [GET_API]: {
            endpoint: GET_SOCIAL_ICON_API,
            types: [GET_SOCIAL_ICON_REQUEST,
                GET_SOCIAL_ICON_SUCCESS,
                GET_SOCIAL_ICON_FAILURE],
        }
    }
}
const addSocialIconApi = (body) => {
    return {
        [POST_API]: {
            endpoint: ADD_SOCIAL_ICON_API,
            types: [ADD_SOCIAL_ICON_REQUEST,
                ADD_SOCIAL_ICON_SUCCESS,
                ADD_SOCIAL_ICON_FAILURE],
            body
        }
    }
}

export {
    getProfileApi, updateAdditinalApi,
    languageListApi, skilsListApi,

    getProjectsApi, saveMyProjectsApi, deleteProjectApi, updateProjectApi,
    getEmploymentsApi, saveMyEmploymentsApi, deleteEmploymentApi, updateEmploymentApi,

    getSocialIconApi, addSocialIconApi
}
