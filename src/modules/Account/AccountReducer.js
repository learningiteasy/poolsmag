import { IMAGE_BASE_URL } from "../../library/urls"
import {
    CHANGE_BASIC_INFO_INPUT, CHANGE_GENERAL_INFO_INPUT, CLEAR_PROFILE_RESPONSE,
    CLEAR_UPDATE_INFO_RESPONSE, GET_PROFILE_FAILURE, GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS, LANGUAGE_LIST_FAILURE, LANGUAGE_LIST_REQUEST,
    LANGUAGE_LIST_SUCCESS, SKILLS_LIST_FAILURE, SKILLS_LIST_REQUEST,
    SKILLS_LIST_SUCCESS, UPDATE_ADDITIONAL_INFO_FAILURE, UPDATE_ADDITIONAL_INFO_REQUEST,
    UPDATE_ADDITIONAL_INFO_SUCCESS,

    ADD_NEW_PROJECT,
    CHANGE_MY_PROJECT_DETAIL_INFO,
    GET_PROJECTS_FAILURE, GET_PROJECTS_REQUEST, GET_PROJECTS_SUCCESS,
    SAVE_MY_PROJECTS_FAILURE,
    SAVE_MY_PROJECTS_SUCCESS,
    SAVE_MY_PROJECTS_REQUEST,
    CLEAR_SAVE_MY_PROJECTS_RESPONSE,
    DELETE_PROJECT_REQUEST,
    DELETE_PROJECT_SUCCESS,
    DELETE_PROJECT_FAILURE,
    CLEAR_DELETE_PROJECT_RESPONSE,
    CHANGE_EDIT_PROJECT,
    CLEAR_UPDATE_PROJECT_RESPONSE,
    UPDATE_PROJECT_FAILURE,
    UPDATE_PROJECT_SUCCESS,
    UPDATE_PROJECT_REQUEST,

    ADD_NEW_EMPLOYMENT,
    CHANGE_MY_EMPLOYMENT_DETAIL_INFO,
    GET_EMPLOYMENTS_FAILURE, GET_EMPLOYMENTS_REQUEST, GET_EMPLOYMENTS_SUCCESS,
    SAVE_MY_EMPLOYMENTS_FAILURE,
    SAVE_MY_EMPLOYMENTS_SUCCESS,
    SAVE_MY_EMPLOYMENTS_REQUEST,
    CLEAR_SAVE_MY_EMPLOYMENTS_RESPONSE,
    DELETE_EMPLOYMENT_REQUEST,
    DELETE_EMPLOYMENT_SUCCESS,
    DELETE_EMPLOYMENT_FAILURE,
    CLEAR_DELETE_EMPLOYMENT_RESPONSE,
    CHANGE_EDIT_EMPLOYMENT,
    CLEAR_UPDATE_EMPLOYMENT_RESPONSE,
    UPDATE_EMPLOYMENT_FAILURE,
    UPDATE_EMPLOYMENT_SUCCESS,
    UPDATE_EMPLOYMENT_REQUEST,
    CHANGE_SOCIAL_ICON_INPUT,
    ADD_SOCIAL_ICON_REQUEST,
    ADD_SOCIAL_ICON_SUCCESS,
    ADD_SOCIAL_ICON_FAILURE,
    CLEAR_ADD_SOCIAL_RESPONSE,
    GET_SOCIAL_ICON_REQUEST,
    GET_SOCIAL_ICON_SUCCESS,
    GET_SOCIAL_ICON_FAILURE,
    SPECIALIZATION_LIST_REQUEST,
    SPECIALIZATION_LIST_SUCCESS,
    SPECIALIZATION_LIST_FAILURE,
    CLEAR_PROFILE_RESPONSE_STATUS
} from "./AccountConstant"


const initialState = {
    GeneralInput: {
        intro: "",
        specialization: "",
        expertise: "",
        address: "",
        language: [],
        work: "",
        skills: []
    },
    basicInfo: {
        profileImage: "",
        profileImgData: "",
        coverImage: "",
        coverImgData: "",
        businessImage: "",
        businessImgData: "",
        businessName: "",
        name: "",

    },
    getProfileApi: {
        getPrifileLoading: false,
        getProfileStatus: "",
        getProfileSucess: "",
        getProfileResponse: ""
    },
    updateAdditionApi: {
        updateAdditionLoading: false,
        updateAdditionStatus: "",
        updateAdditionSucess: "",
        updateAdditionMessage: ""
    },
    languageList: [],
    languageListApi: {
        languageListLoading: false,
        languageListStatus: "",
        languageListSucess: "",
    },
    skillList: [],
    skillsListApi: {
        skillsListLoading: false,
        skillsListStatus: "",
        skillsListSucess: "",
    },
    specializationList:[],
    specializationListApi :{
        specializationListLoading: false ,
        specializationListStatus:"",
        specializationListSucess :""
    },
    my_projects: [],
    getProjectsApi: {
        getProjectsLoading: false,
        getProjectsStatus: "",
        getProjectsSucess: "",
        getProjectsMessage: "",
        projects: []
    },
    saveMyProjectsApi: {
        saveMyProjectsLoading: false,
        saveMyProjectsStatus: "",
        saveMyProjectsSucess: "",
        saveMyProjectsMessage: ""
    },
    deleteProjectApi: {
        deleteProjectLoading: false,
        deleteProjectStatus: "",
        deleteProjectSucess: "",
        deleteProjectMessage: ""
    },

    is_edit_project: false,

    updateProjectApi: {
        updateProjectLoading: false,
        updateProjectStatus: "",
        updateProjectSucess: "",
        updateProjectMessage: "",
    },


    my_employments: [],
getEmploymentsApi: {
    getEmploymentsLoading: false,
    getEmploymentsStatus: "",
    getEmploymentsSucess: "",
    getEmploymentsMessage: "",
    employments: []
},
saveMyEmploymentsApi: {
    saveMyEmploymentsLoading: false,
    saveMyEmploymentsStatus: "",
    saveMyEmploymentsSucess: "",
    saveMyEmploymentsMessage: ""
},
deleteEmploymentApi: {
    deleteEmploymentLoading: false,
    deleteEmploymentStatus: "",
    deleteEmploymentSucess: "",
    deleteEmploymentMessage: ""
},

is_edit_employment: false,

updateEmploymentApi: {
    updateEmploymentLoading: false,
    updateEmploymentStatus: "",
    updateEmploymentSucess: "",
    updateEmploymentMessage: ""
},
    socialIconInput: {
        youtube: "",
        twitter: "",
        linkedin: "",
        facebook: ""
    },
    addSocialIconApi: {
        addSocialLoading: false,
        addSocialStatus: "",
        addSocialSucess: "",
        addSocialMessage: "",
    },
    getSocialIcon: {
        SocialIconLoading: false,
        SocialIconStatus: "",
        SocialIconSucess: "",
        SocialIconResponse:""
    }
}

export const AccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_GENERAL_INFO_INPUT:
            return {
                ...state,
                ...{ GeneralInput: { ...state.GeneralInput, ...action.newState } }
            }
        /**
         *  profile section api response management
         */
        case GET_PROFILE_REQUEST:
            return {
                ...state,
                ...{ getProfileApi: { ...state.getProfileApi, ...{ getPrifileLoading: true } } }
            }
        case GET_PROFILE_SUCCESS:
            console.log(action, "action...");
            const { response: { data: { success, message, data , status } } } = action;
            let profileApiSucess = {
                getPrifileLoading: false,
                getProfileStatus: status,
                getProfileResponse: data,
            }
            let basicData = {
                profileImage: !!data.profile_image ? data.profile_image: "",
                profileImgData: !!data.profile_image ?IMAGE_BASE_URL + data.profile_image: "",
                coverImage: data.cover_image,
                coverImgData: IMAGE_BASE_URL + data.cover_image,
                businessImage: data.cover_image,
                businessImgData: IMAGE_BASE_URL + data.business_image,
                businessName: data.business_name,
                name: data.name,
            }
            let generalInfo = {
                intro: data.business_intro,
                specialization: data.specialization,
                expertise: !!data.expertise ?data.expertise:"" ,
                address: data.address,
                language: data.language,
                work: !!data.work ?data.work:"",
                skills: data.skills
            }
            return {
                ...state,
                ...{
                    getProfileApi: { ...state.getProfileApi, ...profileApiSucess },
                    basicInfo: { ...state.basicInfo, ...basicData },
                    GeneralInput: { ...state.GeneralInput, ...generalInfo }
                }
            }
        case GET_PROFILE_FAILURE:
            console.log(action, "action...");
            // const { response: { data: { message }, status } } = action;
            let profileApiFailure = {
                getPrifileLoading: false,
                getProfileStatus: action.status,
                getProfileResponse: "",
    
            }
            let FailBasicData = {
                profileImgData: "",
                coverImgData: "",
                businessImgData: "",
                businessName: "",
                name: "",
                specialization: "",
            }
            let FailgeneralInfo = {
                intro: "",
                specialization: "",
                expertise: "",
                address: "",
                language: "",
                work: "",
                skills: ""
            }
            return {
                ...state,
                ...{
                    getProfileApi: { ...state.getProfileApi, ...profileApiFailure },
                    basicInfo: { ...state.basicInfo, ...FailBasicData },
                    GeneralInput: { ...state.GeneralInput, ...FailgeneralInfo }
                }
            }
        case CLEAR_PROFILE_RESPONSE:
            let clearProfileApi = {
                getPrifileLoading: false,
                getProfileStatus: "",
                getProfileResponse: "",
            }
            let clearBasicData = {
                profileImage: "",
                profileImgData: "",
                coverImage: "",
                coverImgData: "",
                businessImage: "",
                businessImgData: "",
                businessName: "",
                name: "",
            }
            let cleargeneralInfo = {
                intro: "",
                specialization: "",
                expertise: "",
                address: "",
                language: "",
                work: "",
                skills: ""
            }
            return {
                ...state,
                ...{
                    getProfileApi: { ...state.getProfileApi, ...clearProfileApi },
                    basicInfo: { ...state.basicInfo, ...clearBasicData },
                    GeneralInput: { ...state.GeneralInput, ...cleargeneralInfo }
                }
            }
        case CHANGE_BASIC_INFO_INPUT:
            return {
                ...state,
                ...{ basicInfo: { ...state.basicInfo, ...action.newState } }
            }
    
        case UPDATE_ADDITIONAL_INFO_REQUEST:
            return {
                ...state,
                ...{ updateAdditionApi: { ...state.updateAdditionApi, ...{ updateAdditionLoading: true } } }
            }
        case UPDATE_ADDITIONAL_INFO_SUCCESS:
            console.log(action, "action...");
            // const { response: { data: { success, message } } } = action;
            let updateSuccess = {
                updateAdditionLoading: false,
                updateAdditionStatus: action.response.data.status,
                updateAdditionMessage: action.response.data.message,
            }

            return {
                ...state,
                ...{
                    updateAdditionApi: { ...state.updateAdditionApi, ...updateSuccess }
                }
            }

        case UPDATE_ADDITIONAL_INFO_FAILURE:
            console.log(action, "action...");
            // const forgetApiError = { response: { data: {  message }, status } } = action;
            let updateFailure = {
                updateAdditionLoading: false,
                updateAdditionStatus: action.status,
                updateAdditionMessage: action.response.data.message,
                updateAdditionSucess: false,
            }
            return {
                ...state,
                ...{
                    updateAdditionApi: { ...state.updateAdditionApi, ...updateFailure }
                }
            }

        case CLEAR_UPDATE_INFO_RESPONSE:
            let clearResponse = {
                updateAdditionStatus: "",
                updateAdditionMessage: "",
            }
            return {
                ...state,
                ...{
                    updateAdditionApi: { ...state.updateAdditionApi, ...clearResponse }
                }
            }
        case LANGUAGE_LIST_REQUEST:
            return {
                ...state,
                ...{ languageListApi: { ...state.languageListApi, ...{ languageListLoading: true } } }
            }
        case LANGUAGE_LIST_SUCCESS:
            console.log(action, "action...");
            // const { response: { data: { success, message } } } = action;
            let languageSuccess = {
                languageListLoading: false,
                languageListStatus: 200,
                languageListSucess: action.response.data.success
            }
            return {
                ...state,
                ...{
                    languageListApi: { ...state.languageListApi, ...languageSuccess },
                    languageList: !!action.response.data.data ? action.response.data.data : []
                }
            }
        case LANGUAGE_LIST_FAILURE:
            console.log(action, "action...");
            // const forgetApiError = { response: { data: {  message }, status } } = action;
            let languageFailure = {
                languageListLoading: false,
                languageListStatus: action.status,
                languageListSucess: false
            }
            return {
                ...state,
                ...{
                    languageListApi: { ...state.languageListApi, ...languageFailure },
                    languageList: []
                }
            }
        case SKILLS_LIST_REQUEST:
            return {
                ...state,
                ...{ skillsListApi: { ...state.skillsListApi, ...{ skillsListLoading: true } } }
            }
        case SKILLS_LIST_SUCCESS:
            console.log(action, "action...");
            // const { response: { data: { success, message } } } = action;
            let skillsSuccess = {
                skillsListLoading: false,
                skillsListStatus: 200,
                skillsListSucess: action.response.data.success
            }
            return {
                ...state,
                ...{
                    skillsListApi: { ...state.skillsListApi, ...skillsSuccess },
                    skillList: !!action.response.data.data ? action.response.data.data : []
                }
            }
        case SKILLS_LIST_FAILURE:
            console.log(action, "action...");
            let skillsFailure = {
                skillsListLoading: false,
                skillsListStatus: action.status,
                skillsListSucess: false
            }
            return {
                ...state,
                ...{
                    skillsListApi: { ...state.skillsListApi, ...skillsFailure },
                    skillList: []
                }
            }
            case SPECIALIZATION_LIST_REQUEST:
                return {
                    ...state,
                    ...{ specializationListApi: { ...state.specializationListApi, ...{ specializationListLoading: true } } }
                }
            case SPECIALIZATION_LIST_SUCCESS:
                console.log(action, "action...");
                let specializationSuccess = {
                    specializationListLoading: false,
                    specializationListStatus: 200,
                    specializationListSucess: action.response.data.success
                }
                return {
                    ...state,
                    ...{
                        specializationListApi: { ...state.specializationListApi, ...specializationSuccess },
                        specializationList: !!action.response.data.data ? action.response.data.data : []
                    }
                }
            case SPECIALIZATION_LIST_FAILURE:
                console.log(action, "action...");
                let specializationFailure = {
                    specializationListLoading: false,
                    specializationListStatus: action.status,
                    specializationListSucess: false
                }
                return {
                    ...state,
                    ...{
                        specializationListApi: { ...state.specializationListApi, ...specializationFailure },
                        specializationList: []
                    }
                }

                /**
         *  Business projects api response management
         */

        case GET_PROJECTS_REQUEST:
            return {
                ...state,
                ...{ getProjectsApi: { ...state.getProjectsApi, ...{ getProjectsLoading: true } } }
            }
        case GET_PROJECTS_SUCCESS:
            console.log(action, "action...");
            let projectsApiSucess = {
                getProjectsLoading: false,
                getProjectsStatus: 200,
                getProjectsSucess: action.response.data.success,
                getProjectsMessage: action.response.data.message,
                projects: action.response.data.success ? action.response.data.data : []
            }
            return {
                ...state,
                ...{
                    getProjectsApi: { ...state.getProjectsApi, ...projectsApiSucess }
                }
            }
        case GET_PROJECTS_FAILURE:
            console.log(action, "action...");
            let projectsApiFailure = {
                getProjectsLoading: false,
                getProjectsStatus: action.status,
                getProjectsSucess: false,
                getProjectsMessage: action.response.data.message,
                projects: []
            }
            return {
                ...state,
                ...{
                    getProjectsApi: { ...state.getProjectsApi, ...projectsApiFailure }
                }
            }

            case ADD_NEW_PROJECT:
                const my_projects = [{
                    current: false,
                    title: "",
                    from: "",
                    to: "",
                    type_of_job: "",
                    location: "",
                    description: ""
                }];
                return {
                    ...state,
                    ...{
                        my_projects
                    }
                }
            case CHANGE_MY_PROJECT_DETAIL_INFO:
                return {
                    ...state,
                    ...{
                        my_projects: action.newState
                    }
                }
            

        /**
         *  save my projects api integration....
         */
        case SAVE_MY_PROJECTS_REQUEST:
            return {
                ...state,
                ...{ saveMyProjectsApi: { ...state.saveMyProjectsApi, ...{ saveMyProjectsLoading: true } } }
            }
        case SAVE_MY_PROJECTS_SUCCESS:
            let saveMyProjectsSuccess = {
                saveMyProjectsLoading: false,
                saveMyProjectsStatus: action.response.data.status,
                saveMyProjectsMessage: action.response.data.message,   
            }

            return {
                ...state,
                ...{
                    saveMyProjectsApi: { ...state.saveMyProjectsApi, ...saveMyProjectsSuccess }
                }
            }

        case SAVE_MY_PROJECTS_FAILURE:
            console.log(action, "action...");
            // const forgetApiError = { response: { data: {  message }, status } } = action;
            let saveMyProjectsFailure = {
                saveMyProjectsLoading: false,
                saveMyProjectsStatus: action.status,
                saveMyProjectsMessage: action.response.data.message,
            }
            return {
                ...state,
                ...{
                    saveMyProjectsApi: { ...state.saveMyProjectsApi, ...saveMyProjectsFailure }
                }
            }

        case CLEAR_SAVE_MY_PROJECTS_RESPONSE:
            let saveMyProjectsResp = {
                saveMyProjectsStatus: "",
                saveMyProjectsMessage: "",
                saveMyProjectsSucess: ""
            }
            return {
                ...state,
                ...{
                    saveMyProjectsApi: { ...state.saveMyProjectsApi, ...saveMyProjectsResp }
                }
            }

        /**
         *  delete project api integration....
         */
        case DELETE_PROJECT_REQUEST:
            return {
                ...state,
                ...{ deleteProjectApi: { ...state.deleteProjectApi, ...{ deleteProjectLoading: true } } }
            }
        case DELETE_PROJECT_SUCCESS:
            let deleteProjectSuccess = {
                deleteProjectLoading: false,
                deleteProjectStatus: action.response.data.status,
                deleteProjectMessage: action.response.data.message,
                deleteProjectSucess: action.response.data.success
            }

            return {
                ...state,
                ...{
                    deleteProjectApi: { ...state.deleteProjectApi, ...deleteProjectSuccess }
                }
            }

        case DELETE_PROJECT_FAILURE:
            console.log(action, "action...");
            let deleteProjectFailure = {
                deleteProjectLoading: false,
                deleteProjectStatus: action.status,
                deleteProjectMessage: action.response.data.message,
                deleteProjectSucess: false
            }
            return {
                ...state,
                ...{
                    deleteProjectApi: { ...state.deleteProjectApi, ...deleteProjectFailure }
                }
            }

        case CLEAR_DELETE_PROJECT_RESPONSE:
            let deleteProjectResp = {
                deleteProjectStatus: "",
                deleteProjectMessage: "",
                deleteProjectSucess: ""
            }
            return {
                ...state,
                ...{
                    deleteProjectApi: { ...state.deleteProjectApi, ...deleteProjectResp }
                }
            }

        case CHANGE_EDIT_PROJECT:
            return {
                ...state,
                ...{ is_edit_project: action.status }
            }

        /**
     *  update project api integration....
     */
        case UPDATE_PROJECT_REQUEST:
            return {
                ...state,
                ...{ updateProjectApi: { ...state.updateProjectApi, ...{ updateProjectLoading: true } } }
            }
        case UPDATE_PROJECT_SUCCESS:
            let updateProjectSuccess = {
                updateProjectLoading: false,
                updateProjectStatus: action.response.data.status,
                updateProjectMessage: action.response.data.message,
                updateProjectSucess: action.response.data.success
            }

            return {
                ...state,
                ...{
                    updateProjectApi: { ...state.updateProjectApi, ...updateProjectSuccess }
                }
            }

        case UPDATE_PROJECT_FAILURE:
            console.log(action, "action...");
            let updateProjectFailure = {
                updateProjectLoading: false,
                updateProjectStatus: action.status,
                updateProjectMessage: action.response.data.message,
                updateProjectSucess: false
            }
            return {
                ...state,
                ...{
                    updateProjectApi: { ...state.updateProjectApi, ...updateProjectFailure }
                }
            }

        case CLEAR_UPDATE_PROJECT_RESPONSE:
            let updateProjectResp = {
                updateProjectStatus: "",
                updateProjectMessage: "",
                updateProjectSucess: ""
            }
            return {
                ...state,
                ...{
                    updateProjectApi: { ...state.updateProjectApi, ...updateProjectResp }
                }
            }


            /**
             * employment
             */

            
                /**
         *  Business employments api response management
         */

                 case GET_EMPLOYMENTS_REQUEST:
                    return {
                        ...state,
                        ...{ getEmploymentsApi: { ...state.getEmploymentsApi, ...{ getEmploymentsLoading: true } } }
                    }
                case GET_EMPLOYMENTS_SUCCESS:
                    console.log(action, "action...");
                    let employmentsApiSucess = {
                        getEmploymentsLoading: false,
                        getEmploymentsStatus: action.response.data.status,
                        getEmploymentsSucess: action.response.data.success,
                        getEmploymentsMessage: action.response.data.message,
                        employments: action.response.data.success ? action.response.data.data : []
                    }
                    return {
                        ...state,
                        ...{
                            getEmploymentsApi: { ...state.getEmploymentsApi, ...employmentsApiSucess }
                        }
                    }
        
                case GET_EMPLOYMENTS_FAILURE:
                    console.log(action, "action...");
                    let employmentsApiFailure = {
                        getEmploymentsLoading: false,
                        getEmploymentsStatus: action.status,
                        getEmploymentsSucess: false,
                        getEmploymentsMessage: action.response.data.message,
                        employments: []
                    }
                    return {
                        ...state,
                        ...{
                            getEmploymentsApi: { ...state.getEmploymentsApi, ...employmentsApiFailure }
                        }
                    }
        
                    case ADD_NEW_EMPLOYMENT:
                        const my_employments = [{
                            current: false,
                            title: "",
                            from: "",
                            to: "",
                            type_of_job: "",
                            location: "",
                            description: ""
                        }];
                        return {
                            ...state,
                            ...{
                                my_employments
                            }
                        }
                    case CHANGE_MY_EMPLOYMENT_DETAIL_INFO:
                        return {
                            ...state,
                            ...{
                                my_employments: action.newState
                            }
                        }
        
                /**
                 *  save my employments api integration....
                 */
                case SAVE_MY_EMPLOYMENTS_REQUEST:
                    return {
                        ...state,
                        ...{ saveMyEmploymentsApi: { ...state.saveMyEmploymentsApi, ...{ saveMyEmploymentsLoading: true } } }
                    }
                case SAVE_MY_EMPLOYMENTS_SUCCESS:
                    let saveMyEmploymentsSuccess = {
                        saveMyEmploymentsLoading: false,
                        saveMyEmploymentsStatus: action.response.data.status,
                        saveMyEmploymentsMessage: action.response.data.message,
                        saveMyEmploymentsSucess: action.response.data.success
                    }
        
                    return {
                        ...state,
                        ...{
                            saveMyEmploymentsApi: { ...state.saveMyEmploymentsApi, ...saveMyEmploymentsSuccess }
                        }
                    }
        
                case SAVE_MY_EMPLOYMENTS_FAILURE:
                    console.log(action, "action...");
                    // const forgetApiError = { response: { data: {  message }, status } } = action;
                    let saveMyEmploymentsFailure = {
                        saveMyEmploymentsLoading: false,
                        saveMyEmploymentsStatus: action.status,
                        saveMyEmploymentsMessage: action.response.data.message,
                        saveMyEmploymentsSucess: false
                    }
                    return {
                        ...state,
                        ...{
                            saveMyEmploymentsApi: { ...state.saveMyEmploymentsApi, ...saveMyEmploymentsFailure }
                        }
                    }
        
                case CLEAR_SAVE_MY_EMPLOYMENTS_RESPONSE:
                    let saveMyEmploymentsResp = {
                        saveMyEmploymentsStatus: "",
                        saveMyEmploymentsMessage: "",
                        saveMyEmploymentsSucess: ""
                    }
                    return {
                        ...state,
                        ...{
                            saveMyEmploymentsApi: { ...state.saveMyEmploymentsApi, ...saveMyEmploymentsResp }
                        }
                    }
        
                /**
                 *  delete employment api integration....
                 */
                case DELETE_EMPLOYMENT_REQUEST:
                    return {
                        ...state,
                        ...{ deleteEmploymentApi: { ...state.deleteEmploymentApi, ...{ deleteEmploymentLoading: true } } }
                    }
                case DELETE_EMPLOYMENT_SUCCESS:
                    let deleteEmploymentSuccess = {
                        deleteEmploymentLoading: false,
                        deleteEmploymentStatus: action.response.data.status,
                        deleteEmploymentMessage: action.response.data.message,
                        deleteEmploymentSucess: action.response.data.success
                    }
        
                    return {
                        ...state,
                        ...{
                            deleteEmploymentApi: { ...state.deleteEmploymentApi, ...deleteEmploymentSuccess }
                        }
                    }
        
                case DELETE_EMPLOYMENT_FAILURE:
                    console.log(action, "action...");
                    let deleteEmploymentFailure = {
                        deleteEmploymentLoading: false,
                        deleteEmploymentStatus: action.status,
                        deleteEmploymentMessage: action.response.data.message,
                        deleteEmploymentSucess: false
                    }
                    return {
                        ...state,
                        ...{
                            deleteEmploymentApi: { ...state.deleteEmploymentApi, ...deleteEmploymentFailure }
                        }
                    }
        
                case CLEAR_DELETE_EMPLOYMENT_RESPONSE:
                    let deleteEmploymentResp = {
                        deleteEmploymentStatus: "",
                        deleteEmploymentMessage: "",
                        deleteEmploymentSucess: ""
                    }
                    return {
                        ...state,
                        ...{
                            deleteEmploymentApi: { ...state.deleteEmploymentApi, ...deleteEmploymentResp }
                        }
                    }
        
                case CHANGE_EDIT_EMPLOYMENT:
                    return {
                        ...state,
                        ...{ is_edit_employment: action.status }
                    }
        
                /**
             *  update employment api integration....
             */
                case UPDATE_EMPLOYMENT_REQUEST:
                    return {
                        ...state,
                        ...{ updateEmploymentApi: { ...state.updateEmploymentApi, ...{ updateEmploymentLoading: true } } }
                    }
                case UPDATE_EMPLOYMENT_SUCCESS:
                    let updateEmploymentSuccess = {
                        updateEmploymentLoading: false,
                        updateEmploymentStatus: action.response.data.status,
                        updateEmploymentMessage: action.response.data.message,
                        updateEmploymentSucess: action.response.data.success
                    }
        
                    return {
                        ...state,
                        ...{
                            updateEmploymentApi: { ...state.updateEmploymentApi, ...updateEmploymentSuccess }
                        }
                    }
        
                case UPDATE_EMPLOYMENT_FAILURE:
                    console.log(action, "action...");
                    let updateEmploymentFailure = {
                        updateEmploymentLoading: false,
                        updateEmploymentStatus: action.status,
                        updateEmploymentMessage: action.response.data.message,
                        updateEmploymentSucess: false
                    }
                    return {
                        ...state,
                        ...{
                            updateEmploymentApi: { ...state.updateEmploymentApi, ...updateEmploymentFailure }
                        }
                    }
        
                case CLEAR_UPDATE_EMPLOYMENT_RESPONSE:
                    let updateEmploymentResp = {
                        updateEmploymentStatus: "",
                        updateEmploymentMessage: "",
                        updateEmploymentSucess: ""
                    }
                    return {
                        ...state,
                        ...{
                            updateEmploymentApi: { ...state.updateEmploymentApi, ...updateEmploymentResp }
                        }
                    }

                    case CHANGE_SOCIAL_ICON_INPUT:
            return {
                ...state,
                ...{ socialIconInput: { ...state.socialIconInput, ...action.newState } }
            }
        case ADD_SOCIAL_ICON_REQUEST:
            return {
                ...state,
                ...{ addSocialIconApi: { ...state.addSocialIconApi, ...{ addSocialLoading: true } } }
            }
        case ADD_SOCIAL_ICON_SUCCESS:
            console.log(action, "action...");
            // const { response: { data: { success, message } } } = action;
            let addIconSuccess = {
                addSocialLoading: false,
                addSocialStatus: action.response.status,
                addSocialMessage: action.response.data.message
            }
            return {
                ...state,
                ...{
                    addSocialIconApi: { ...state.addSocialIconApi, ...addIconSuccess },
                }
            }
        case ADD_SOCIAL_ICON_FAILURE:
            console.log(action, "action...");
            // const forgetApiError = { response: { data: {  message }, status } } = action;
            let addIconFailure = {
                addSocialLoading: false,
                addSocialStatus: action.status,
                addSocialMessage: ""
            }
            return {
                ...state,
                ...{
                    addSocialIconApi: { ...state.addSocialIconApi, ...addIconFailure },
                }
            }
        case CLEAR_ADD_SOCIAL_RESPONSE:
            let clearIconResponse = {
                addSocialStatus: "",
                addSocialSucess: "",
                addSocialMessage: ""
            }
            return {
                ...state,
                ...{
                    addSocialIconApi: { ...state.addSocialIconApi, ...clearIconResponse },
                }
            }
            case GET_SOCIAL_ICON_REQUEST:
                return {
                    ...state,
                    ...{ getSocialIcon: { ...state.getSocialIcon, ...{ SocialIconLoading: true } } }
                }
            case GET_SOCIAL_ICON_SUCCESS:
                console.log(action, "action...");
                // const { response: { data: { success, message } } } = action;
                let getIconSuccess = {
                    SocialIconLoading: false,
                    SocialIconStatus: action.response.data.status,
                    SocialIconSucess: action.response.data.success,
                    SocialIconResponse : action.response.data.data
                }
                   let socialIcon = {
                    youtube: action.response.data.data.youtube,
                    twitter: action.response.data.data.twitter,
                    linkedin: action.response.data.data.linkedIn,
                    facebook: action.response.data.data.facebook,
                 }
                return {
                    ...state,
                    ...{
                        getSocialIcon: { ...state.getSocialIcon, ...getIconSuccess },
                        socialIconInput: { ...state.socialIconInput, ...socialIcon },
                    }
                }
            case GET_SOCIAL_ICON_FAILURE:
                console.log(action, "action...");
                // const forgetApiError = { response: { data: {  message }, status } } = action;
                let getIconFailure = {
                    SocialIconLoading: false,
                    SocialIconStatus: action.status,
                    SocialIconSucess: "",
                    SocialIconResponse: ""
                }
                return {
                    ...state,
                    ...{
                        getSocialIcon: { ...state.getSocialIcon, ...getIconFailure },
                    }
                }

        default:
            return state
    }
}