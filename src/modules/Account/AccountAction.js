import { CHANGE_BASIC_INFO_INPUT, CHANGE_GENERAL_INFO_INPUT, 
    CLEAR_UPDATE_INFO_RESPONSE, CLEAR_PROFILE_RESPONSE,
    ADD_NEW_PROJECT, CHANGE_MY_PROJECT_DETAIL_INFO, CLEAR_SAVE_MY_PROJECTS_RESPONSE, CLEAR_DELETE_PROJECT_RESPONSE, CHANGE_EDIT_PROJECT, CLEAR_UPDATE_PROJECT_RESPONSE,
    ADD_NEW_EMPLOYMENT, CHANGE_MY_EMPLOYMENT_DETAIL_INFO, CLEAR_SAVE_MY_EMPLOYMENTS_RESPONSE, CLEAR_DELETE_EMPLOYMENT_RESPONSE, CHANGE_EDIT_EMPLOYMENT, CLEAR_UPDATE_EMPLOYMENT_RESPONSE,
    CHANGE_SOCIAL_ICON_INPUT, CLEAR_ADD_SOCIAL_RESPONSE } from "./AccountConstant"


const changeGeneralInfoInput = (newState) => {
    return { type: CHANGE_GENERAL_INFO_INPUT, newState }
}
const changeBasicInfoInput = (newState) => {
    return { type: CHANGE_BASIC_INFO_INPUT, newState }
}
const clearProfileData = (newState) => {
    return { type: CLEAR_PROFILE_RESPONSE, newState }
}

const clearUpdateProfileRespons = (newState) => {
    return{ type:CLEAR_UPDATE_INFO_RESPONSE , newState}
}

/**
 * project actions...
 */
const addNewProject = () => {
    return { type: ADD_NEW_PROJECT }
}
const changeMyProjectDetailInfo = (newState) => {
    return { type: CHANGE_MY_PROJECT_DETAIL_INFO, newState }
}

const clearSaveMyProjectsResponse = () => {
    return{ type:CLEAR_SAVE_MY_PROJECTS_RESPONSE }
}

const clearDeleteProjectResponse = () => {
    return{ type:CLEAR_DELETE_PROJECT_RESPONSE }
}

const changeEditProject = (status) => {
    return { type: CHANGE_EDIT_PROJECT, status }
}

const clearUpdateProjectResponse = () => {
    return{ type: CLEAR_UPDATE_PROJECT_RESPONSE }                           
}

/**
 * employment actions..
 */

 const addNewEmployment = () => {
    return { type: ADD_NEW_EMPLOYMENT }
}
const changeMyEmploymentDetailInfo = (newState) => {
    return { type: CHANGE_MY_EMPLOYMENT_DETAIL_INFO, newState }
}

const clearSaveMyEmploymentsResponse = () => {
    return{ type:CLEAR_SAVE_MY_EMPLOYMENTS_RESPONSE }
}

const clearDeleteEmploymentResponse = () => {
    return{ type:CLEAR_DELETE_EMPLOYMENT_RESPONSE }
}

const changeEditEmployment = (status) => {
    return { type: CHANGE_EDIT_EMPLOYMENT, status }
}

const clearUpdateEmploymentResponse = () => {
    return{ type: CLEAR_UPDATE_EMPLOYMENT_RESPONSE }                           
}
const changeSocialIconInput = (newState) => {
    return{type:CHANGE_SOCIAL_ICON_INPUT ,newState}
}
const clearSocialIconResponse = (newState) => {
    return{type : CLEAR_ADD_SOCIAL_RESPONSE , newState}
}
export { changeBasicInfoInput ,clearUpdateProfileRespons,
    changeGeneralInfoInput, clearProfileData,
    addNewProject, changeMyProjectDetailInfo,
    clearSaveMyProjectsResponse, clearDeleteProjectResponse,
    changeEditProject, clearUpdateProjectResponse,

    addNewEmployment, changeMyEmploymentDetailInfo, clearSaveMyEmploymentsResponse,
    clearDeleteEmploymentResponse, changeEditEmployment, clearUpdateEmploymentResponse,

    changeSocialIconInput, clearSocialIconResponse
}
