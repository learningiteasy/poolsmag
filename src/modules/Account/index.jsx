import React from 'react';
import { usePosition } from 'use-position';
import { useEffect } from 'react';
import $ from 'jquery';
import { useToasts } from 'react-toast-notifications';
import { Basicinfo, ProfileBox, Project, Employment, SocialIcon } from './common';
import { useDispatch, useSelector } from 'react-redux';
import {
    getProfileApi, deleteProjectApi, getSocialIconApi, getProjectsApi, saveMyProjectsApi,
    updateProjectApi, deleteEmploymentApi, getEmploymentsApi, saveMyEmploymentsApi,
    updateEmploymentApi, languageListApi, skilsListApi, updateAdditinalApi, specializationListApi
} from '../../library/api/AccountApiService';
import { addDefaultSrc, addValidation, getCookie, removeValidation, returnDefaultImage, setCookie } from '../../library/utilities/functions';
import {
    changeBasicInfoInput,
    clearProfileData, clearUpdateProfileRespons,
    addNewProject, changeMyProjectDetailInfo, clearSaveMyProjectsResponse,
    clearDeleteProjectResponse, changeEditProject, clearUpdateProjectResponse,

    addNewEmployment, changeMyEmploymentDetailInfo, clearSaveMyEmploymentsResponse,
    clearDeleteEmploymentResponse, changeEditEmployment, clearUpdateEmploymentResponse, clearSocialIconResponse, clearUpdateProfileResponse
} from './AccountAction';

import { useRef } from 'react';
import moment from 'moment';
import { employmentFormValidation, projectFormValidation } from './validations';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

let edit_project = false, edit_employment = false, add_more = false;

const Account = () => {
    const project_title_validation = useRef(null);
    const project_job_type_validation = useRef(null);
    const project_address_validation = useRef(null);
    const project_description_validation = useRef(null);

    const employment_title_validation = useRef(null);
    const employment_job_type_validation = useRef(null);
    const employment_address_validation = useRef(null);
    const employment_description_validation = useRef(null);

    const [is_valid_from_date, update_is_valid_from_date] = useState(true);
    const [is_valid_to_date, update_is_valid_to_date] = useState(true);
    const { latitude, longitude, error } = usePosition();
    const dispatch = useDispatch();
    const { addToast } = useToasts();
    const check_individual = getCookie("individual")
    const AccountState = useSelector(state => state.AccountReducer);
    const { basicInfo: { profileImgData, coverImgData, businessImgData, businessName, name,
        profileImage, coverImage, businessImage }, my_projects, my_employments } = AccountState
    const { GeneralInput: { intro, specialization, expertise, address, language, work, skills },
        is_edit_project, is_edit_employment } = AccountState
    const { updateAdditionApi: { updateAdditionStatus, updateAdditionMessage },
        getProfileApi: { getProfileResponse, getProfileStatus },
        saveMyProjectsApi: { saveMyProjectsStatus, saveMyProjectsMessage },
        deleteProjectApi: { deleteProjectStatus, deleteProjectMessage },
        updateProjectApi: { updateProjectStatus, updateProjectMessage },

        saveMyEmploymentsApi: { saveMyEmploymentsStatus, saveMyEmploymentsMessage },
        deleteEmploymentApi: { deleteEmploymentStatus, deleteEmploymentMessage },
        updateEmploymentApi: { updateEmploymentStatus, updateEmploymentMessage } } = AccountState
    const { addSocialIconApi: { addSocialSucess, addSocialMessage } } = AccountState
    edit_project = is_edit_project;
    edit_employment = is_edit_employment;

    useEffect(() => {
        if (!!updateAdditionStatus && updateAdditionStatus == "200") {
            dispatch(clearProfileData())
            // console.log(getProfileResponse ,"getProfileResponse...")
            dispatch(getProfileApi())
            addToast(updateAdditionMessage, {
                appearance: 'success',
                autoDismiss: true,
            });
            dispatch(clearUpdateProfileResponse());
        }
    }, [updateAdditionStatus])
    useEffect(() => {
        if (!!getProfileStatus) {
            setCookie("profile_data", JSON.stringify(getProfileResponse), 1);
        }
    }, [getProfileStatus])

    useEffect(() => {
        if (!!updateProjectStatus && updateProjectStatus == "200") {
            // get api
            if (getCookie("individual") == "true") {

            }
            else {
                dispatch(getProjectsApi());
            }
            // close the dialog...
            const showProjectsDialog = document.querySelector(".project-setting");
            showProjectsDialog.click();
            addToast(updateProjectMessage, {
                appearance: 'success',
                autoDismiss: true,
            });
            dispatch(clearUpdateProjectResponse());
        }
        if (updateProjectStatus == "400") {
            addToast(updateProjectMessage, {
                appearance: 'error',
                autoDismiss: true,
            });
            dispatch(clearUpdateProjectResponse());
        }
        // clear api response...

    }, [updateProjectStatus])

    useEffect(() => {

        if (!!saveMyProjectsStatus && saveMyProjectsStatus == "200") {
            // get api
            if (getCookie("individual") == "true") {

            }
            else {
                dispatch(getProjectsApi());
            }
            if (!add_more) {
                // close the dialog...
                const showProjectsDialog = document.querySelector(".project-setting");
                showProjectsDialog.click();
            }
            else {
                // reset project....
                resetProject(0, true);
            }
            addToast(saveMyProjectsMessage, {
                appearance: 'success',
                autoDismiss: true,
            });
            dispatch(clearSaveMyProjectsResponse());
        }
        if (saveMyProjectsStatus == "400") {
            addToast(saveMyProjectsMessage, {
                appearance: 'error',
                autoDismiss: true,
            });
            dispatch(clearSaveMyProjectsResponse());
        }
        // clear api response...

    }, [saveMyProjectsStatus])

    useEffect(() => {

        if (!!deleteProjectStatus && deleteProjectStatus == "200") {
            // get api
            if (getCookie("individual") == "true") {

            }
            else {
                dispatch(getProjectsApi());
            }
            addToast(deleteProjectMessage, {
                appearance: 'success',
                autoDismiss: true,
            });
            dispatch(clearDeleteProjectResponse());
        }
        if (deleteProjectStatus == "400") {
            addToast(deleteProjectMessage, {
                appearance: 'error',
                autoDismiss: true,
            });
            dispatch(clearDeleteProjectResponse());
        }
        // clear api response...

    }, [deleteProjectStatus])


    /**
     * employment
     */

    useEffect(() => {
        if (!!updateEmploymentStatus && updateEmploymentStatus == "200") {
            // get api
            if (getCookie("individual") == "true") {
                dispatch(getEmploymentsApi());
            }
            else {

            }
            // close the dialog...
            const showEmploymentsDialog = document.querySelector(".project-setting");
            showEmploymentsDialog.click();
            addToast(updateEmploymentMessage, {
                appearance: 'success',
                autoDismiss: true,
            });
            dispatch(clearUpdateEmploymentResponse());
        }

        // clear api response...
        if (updateEmploymentStatus == "400") {
            addToast(updateEmploymentMessage, {
                appearance: 'error',
                autoDismiss: true,
            });
            dispatch(clearUpdateEmploymentResponse());
        }
    }, [updateEmploymentStatus])

    useEffect(() => {
        if (saveMyEmploymentsStatus !== "") {
            if (!!saveMyEmploymentsStatus) {
                // get api
                if (getCookie("individual") == "true") {
                    dispatch(getEmploymentsApi());
                }
                else {

                }

                if (!add_more) {
                    // close the dialog...
                    const showEmploymentsDialog = document.querySelector(".project-setting");
                    showEmploymentsDialog.click();
                }
                else {
                    // reset project....
                    resetEmployment(0, true);
                }

                addToast(saveMyEmploymentsMessage, {
                    appearance: 'success',
                    autoDismiss: true,
                });
            }
            else {
                addToast(saveMyEmploymentsMessage, {
                    appearance: 'error',
                    autoDismiss: true,
                });
            }
            // clear api response...
            dispatch(clearSaveMyEmploymentsResponse());
        }
    }, [saveMyEmploymentsStatus])

    useEffect(() => {

        if (!!deleteEmploymentStatus && deleteEmploymentStatus == "200") {
            // get api
            if (getCookie("individual") == "true") {
                dispatch(getEmploymentsApi());
            }
            else {

            }
            addToast(deleteEmploymentMessage, {
                appearance: 'success',
                autoDismiss: true,
            });
            dispatch(clearDeleteEmploymentResponse());
        }
        if (deleteEmploymentStatus == "400") {
            addToast(deleteEmploymentMessage, {
                appearance: 'error',
                autoDismiss: true,
            });
            dispatch(clearDeleteEmploymentResponse());
        }
        // clear api response...


    }, [deleteEmploymentStatus])


    useEffect(() => {
        dispatch(getProfileApi())
        dispatch(languageListApi());
        dispatch(skilsListApi());
        dispatch(getSocialIconApi());
        dispatch(specializationListApi());
        if (getCookie("individual") == "true") {
            dispatch(getEmploymentsApi())
        }
        else {
            dispatch(getProjectsApi());
        }
        $(".general-edit").click(function () {
            $(".edit-general").toggleClass('show-general');
            $(".user-info").toggleClass('hide-info');
            $(".general-setting").toggleClass('general-setting-show');
        });

        $(".project-setting").click(function () {
            $(".project-form").toggleClass("project-show");
            $(".projects__listing").toggleClass("project-hide");

        });

        $(".socail-media-setting").click(function () {
            $(".socail-media-form").toggleClass("socail-show");
            $(".social-media-icons").toggleClass("project-hide");

        });
    }, [])
    useEffect(() => {
        return () => { dispatch(clearProfileData()) }
    }, [])
    const handleFileChange = e => {
        var data = e.target.files[0];
        if(!!data){
        const fileName = data.name.split(".");
        const imageFormat = fileName[fileName.length - 1];
        if (e.target.files[0]) {
            if (imageFormat === "png" || imageFormat === "jpg" || imageFormat === "jpeg" ||
                imageFormat === "SVG" || imageFormat === "svg" || imageFormat === "PNG" || imageFormat === "JPG" || imageFormat === "JPEG") {
                dispatch(changeBasicInfoInput({ [e.target.name]: e.target.files[0] }))
                // setPicture(e.target.files[0]);
                const reader = new FileReader();
                reader.addEventListener("load", () => {
                    dispatch(changeBasicInfoInput({ [e.target.id]: reader.result }))
                    // setImgData(reader.result);  
                });
                reader.readAsDataURL(e.target.files[0]);
                const bodyParameters = new FormData();
                bodyParameters.append("specialization", specialization);
                bodyParameters.append("business_intro", intro);
                bodyParameters.append("expertise", expertise);
                bodyParameters.append("work", "" + work);
                bodyParameters.append("address", "" + address);
                bodyParameters.append("latitude", "" + "");
                bodyParameters.append("longitude", "" + "");
                bodyParameters.append("profile_image", e.target.name == "profileImage" ? e.target.files[0] : profileImage);
                bodyParameters.append("business_image", e.target.name == "businessImage" ? e.target.files[0] : businessImage);
                bodyParameters.append("cover_image", e.target.name == "coverImage" ? e.target.files[0] : coverImage);

                dispatch(updateAdditinalApi(bodyParameters))
            }
            else {
                addToast("Only .png, .jpg, .jpeg image formats supported.", {
                    appearance: 'error',
                    autoDismiss: true,
                });
            }
        }
    }
    };

    const removeProjectValidation = () => {
        window.setTimeout(() => {
            update_is_valid_from_date(true);
            update_is_valid_to_date(true);
            let validation = {
                is_valid_title: { status: false, validation: project_title_validation },
                is_valid_job_type: { status: false, validation: project_job_type_validation },
                is_valid_address: { status: false, validation: project_address_validation },
                is_valid_description: { status: false, validation: project_description_validation }
            }
            removeValidation(validation);
        }, 0)
    }

    const removeEmploymentValidation = () => {
        window.setTimeout(() => {
            update_is_valid_from_date(true);
            update_is_valid_to_date(true);
            let validation = {
                is_valid_title: { status: false, validation: employment_title_validation },
                is_valid_job_type: { status: false, validation: employment_job_type_validation },
                is_valid_address: { status: false, validation: employment_address_validation },
                is_valid_description: { status: false, validation: employment_description_validation }
            }
            removeValidation(validation);
        }, 0)
    }


    const onShowHideProjects = () => {
        window.setTimeout(() => {
            add_more = false;
            console.log(project_title_validation, project_job_type_validation, project_address_validation, project_description_validation, "dffhgdgh")
            removeProjectValidation();
            const showProjectsDialog = document.querySelector(".project-show");
            if (!!showProjectsDialog) {
                if (!edit_project)
                    dispatch(addNewProject())
            }
            else {
                // alert("close")
                dispatch(changeEditProject(false))
                const default_project = [{
                    current: false,
                    title: "",
                    from: "",
                    to: "",
                    type_of_job: "",
                    location: "",
                    description: ""
                }]
                dispatch(changeMyProjectDetailInfo(default_project))
            }
        }, 0)
    }

    const changeProjectDetail = (e, index) => {
        let target = e.target;
        let projects = my_projects;
        for (let i in projects) {
            if (i == index) {
                projects[i] = { ...projects[i], ...{ [target.name]: target.type == "checkbox" ? target.checked : target.value } }
            }
        }
        dispatch(changeMyProjectDetailInfo(projects))
    }

    const resetProject = (index, add_more_project) => {
        add_more = !!add_more_project ? true : false;
        removeProjectValidation();
        let projects = my_projects;
        const default_project = {
            current: false,
            title: "",
            from: "",
            to: "",
            type_of_job: "",
            location: "",
            description: ""
        }
        for (let i in projects) {
            if (i == index) {
                projects[i] = default_project
            }
        }
        console.log(projects, "projects.....")
        dispatch(changeMyProjectDetailInfo(projects))
    }

    const createProject = () => {
        // let projects = my_projects;
        // const default_project = {
        //     current: false,
        //     title: "",
        //     from: "",
        //     to: "",
        //     type_of_job: "",
        //     location: "",
        //     description: ""
        // }
        // projects.push(default_project)
        // dispatch(changeMyProjectDetailInfo(projects))
        // add_more = true;
        // onProjectsSubmit();
    }

    const onProjectsSubmit = (e) => {
        if (!!e) { e.preventDefault(); add_more = false } else { add_more = true }
        let projects = my_projects;
        console.log(projects, "projectssdgdfh")
        let sendProjects = [];

        // hit api to send the details to the server...
        for (let i in projects) {
            sendProjects.push({
                project_id: projects[i].project_id,
                current_project: !!projects[i].current ? 1 : 0,
                title: projects[i].title,
                raw_from_date: (projects[i].from).toString(),
                raw_to_date: !projects[i].current ? (projects[i].to).toString() : null,
                from_date: moment(projects[i].from).format('MM/YYYY'),
                to_date: !projects[i].current ? moment(projects[i].to).format('MM/YYYY') : null,
                job_type: projects[i].type_of_job,
                address: projects[i].location,
                description: projects[i].description,
                latitude: longitude,
                longitude: latitude
            })
        }
        console.log(sendProjects[0], "testttttttt")
        // alert(sendProjects[0].from_date)

        console.log(project_title_validation, "project_title_validation....")
        let validation = {
            is_valid_title: { status: false, validation: project_title_validation },
            is_valid_job_type: { status: false, validation: project_job_type_validation },
            is_valid_address: { status: false, validation: project_address_validation },
            is_valid_description: { status: false, validation: project_description_validation }
        }
        validation = projectFormValidation(validation, sendProjects[0]);
        let { is_valid_title, is_valid_job_type, is_valid_address, is_valid_description } = validation
        addValidation(validation);
        const current_project = sendProjects[0].current_project;
        const from_date = sendProjects[0].from_date;
        const to_date = sendProjects[0].to_date;
        let is_valid_from = false, is_valid_to = false;
        if (!!from_date && from_date != "Invalid date") {
            // success
            is_valid_from = true;
            update_is_valid_from_date(true);
        }
        else {
            // error
            is_valid_from = false;
            update_is_valid_from_date(false);
        }
        if (!current_project) {
            if (!!to_date && to_date != "Invalid date") {
                is_valid_to = true;
                update_is_valid_to_date(true);
            }
            else {
                is_valid_to = false;
                update_is_valid_to_date(false);
            }
        }
        else {
            is_valid_to = true;
            update_is_valid_to_date(true);
        }

        if (is_valid_title.status &&
            is_valid_job_type.status &&
            is_valid_address.status &&
            is_valid_description.status &&
            is_valid_from && is_valid_to
        ) {
            if (is_edit_project) {

                dispatch(updateProjectApi(sendProjects[0]));
            }
            else {
                dispatch(saveMyProjectsApi(sendProjects[0]));
            }
        }
    }

    const deleteProject = (project_id) => {
        dispatch(deleteProjectApi({ project_id }));
    }

    const editProjectOpen = (project) => {
        dispatch(changeEditProject(true))
        const edit_project = [{
            project_id: project.id,
            current: !!project.current_project ? true : false,
            title: project.title,
            from: !!project.raw_from_date ?new Date(project.raw_from_date) : "",
            to: !!project.raw_to_date ? new Date(project.raw_to_date) : "",
            type_of_job: project.job_type,
            location: project.address,
            description: project.description
        }]
        console.log(edit_project, "edit_project.....")
        dispatch(changeMyProjectDetailInfo(edit_project))
        const showProjectsDialog = document.querySelector(".project-setting");
        showProjectsDialog.click();
    }

    /**
     * employment
     */

    const onShowHideEmployments = () => {
        window.setTimeout(() => {
            add_more = false;
            console.log(employment_title_validation, employment_job_type_validation, employment_address_validation, employment_description_validation, "dffhgdgh")
            removeEmploymentValidation();
            const showEmploymentsDialog = document.querySelector(".project-show");
            if (!!showEmploymentsDialog) {
                if (!edit_employment)
                    dispatch(addNewEmployment())
            }
            else {
                // alert("close")
                dispatch(changeEditEmployment(false))
                const default_employment = [{
                    current: false,
                    title: "",
                    from: "",
                    to: "",
                    type_of_job: "",
                    location: "",
                    description: ""
                }]
                dispatch(changeMyEmploymentDetailInfo(default_employment))
            }
        }, 0)
    }

    const changeEmploymentDetail = (e, index) => {
        let target = e.target;
        let employments = my_employments;
        for (let i in employments) {
            if (i == index) {
                employments[i] = { ...employments[i], ...{ [target.name]: target.type == "checkbox" ? target.checked : target.value } }
            }
        }
        dispatch(changeMyEmploymentDetailInfo(employments))
    }

    const resetEmployment = (index, add_more_employment) => {
        add_more = !!add_more_employment ? true : false;
        removeEmploymentValidation();
        let employments = my_employments;
        const default_employment = {
            current: false,
            title: "",
            from: "",
            to: "",
            type_of_job: "",
            location: "",
            description: ""
        }
        for (let i in employments) {
            if (i == index) {
                employments[i] = default_employment
            }
        }
        console.log(employments, "employments.....")
        dispatch(changeMyEmploymentDetailInfo(employments))
    }

    const createEmployment = () => {
        // let employments = my_employments;
        // const default_employment = {
        //     current: true,
        //     title: "",
        //     from: "",
        //     to: "",
        //     type_of_job: "",
        //     location: "",
        //     description: ""
        // }
        // employments.push(default_employment)
        // dispatch(changeMyEmploymentDetailInfo(employments))
    }

    const onEmploymentsSubmit = (e) => {
        if (!!e) { e.preventDefault(); add_more = false } else { add_more = true }
        let employments = my_employments;
        console.log(employments, "employmentssdgdfh")
        let sendEmployments = [];

        // hit api to send the details to the server...
        for (let i in employments) {
            sendEmployments.push({
                emp_id: employments[i].employment_id,
                current_job: !!employments[i].current ? 1 : 0,
                company_name: employments[i].title,
                from_date: moment(employments[i].from).format('MM/YYYY'),
                to_date: !employments[i].current ? moment(employments[i].to).format('MM/YYYY') : null,
                raw_from_date: (employments[i].from).toString(),
                raw_to_date: !employments[i].current ? (employments[i].to).toString() : null,
                position: employments[i].type_of_job,
                address: employments[i].location,
                latitude: latitude,
                longitude: longitude,
                description: employments[i].description
            })
        }
        console.log(employment_title_validation, "employment_title_validation....")
        let validation = {
            is_valid_company_name: { status: false, validation: employment_title_validation },
            is_valid_position: { status: false, validation: employment_job_type_validation },
            is_valid_address: { status: false, validation: employment_address_validation },
            is_valid_description: { status: false, validation: employment_description_validation }
        }
        console.log(sendEmployments[0], "sendEmployments[0]")
        validation = employmentFormValidation(validation, sendEmployments[0]);
        let { is_valid_company_name, is_valid_position, is_valid_address, is_valid_description } = validation
        addValidation(validation);
        const current_employment = sendEmployments[0].current_job;
        const from_date = sendEmployments[0].from_date;
        const to_date = sendEmployments[0].to_date;
        let is_valid_from = false, is_valid_to = false;
        if (!!from_date && from_date != "Invalid date") {
            // success
            is_valid_from = true;
            update_is_valid_from_date(true);
        }
        else {
            // error
            is_valid_from = false;
            update_is_valid_from_date(false);
        }
        if (!current_employment) {
            if (!!to_date && to_date != "Invalid date") {
                is_valid_to = true;
                update_is_valid_to_date(true);
            }
            else {
                is_valid_to = false;
                update_is_valid_to_date(false);
            }
        }
        else {
            is_valid_to = true;
            update_is_valid_to_date(true);
        }

        if (is_valid_company_name.status &&
            is_valid_position.status &&
            is_valid_address.status &&
            is_valid_description.status &&
            is_valid_from && is_valid_to
        ) {
            if (is_edit_employment) {
                dispatch(updateEmploymentApi(sendEmployments[0]));
            }
            else {
                dispatch(saveMyEmploymentsApi(sendEmployments[0]));
            }
        }
    }

    const deleteEmployment = (employment_id) => {
        dispatch(deleteEmploymentApi({ emp_id: employment_id }));
    }

    const editEmploymentOpen = (employment) => {
        dispatch(changeEditEmployment(true))
        const edit_employment = [{
            employment_id: employment.id,
            current: !!employment.current_job ? true : false,
            title: employment.company_name,
            from: !!employment.raw_from_date ? new Date(employment.raw_from_date):"",
            to: !!employment.raw_to_date ? new Date(employment.raw_to_date) : "",
            type_of_job: employment.position,
            location: employment.address,
            description: employment.description
        }]
        console.log(edit_employment, "edit_employment.....")
        dispatch(changeMyEmploymentDetailInfo(edit_employment))
        const showEmploymentsDialog = document.querySelector(".project-setting");
        showEmploymentsDialog.click();
    }

    return (
        <>
            <div>
                <Basicinfo AccountState={AccountState}
                    check_individual={check_individual}
                    handleFileChange={handleFileChange}
                />
                <section className="profile-tabs">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="nav nav-pills my-2" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">About</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Posts</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">gallery</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="profile-tab-content spacer bg-primary">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                        <ProfileBox AccountState={AccountState} dispatch={dispatch} check_individual={check_individual} />
                                        {
                                            check_individual == "true" &&
                                            <Employment
                                                allref={{
                                                    employment_title_validation, employment_job_type_validation,
                                                    employment_address_validation, employment_description_validation
                                                }}
                                                is_valid_from_date={is_valid_from_date}
                                                is_valid_to_date={is_valid_to_date}
                                                AccountState={AccountState}
                                                onShowHideEmployments={onShowHideEmployments}
                                                changeEmploymentDetail={changeEmploymentDetail}
                                                resetEmployment={resetEmployment}
                                                onEmploymentsSubmit={onEmploymentsSubmit}
                                                createEmployment={createEmployment}
                                                deleteEmployment={deleteEmployment}
                                                editEmploymentOpen={editEmploymentOpen}
                                                is_edit_employment={is_edit_employment} />

                                        }
                                        {

                                            check_individual != "true" &&
                                            <Project
                                                allref={{
                                                    project_title_validation, project_job_type_validation,
                                                    project_address_validation, project_description_validation
                                                }}
                                                is_valid_from_date={is_valid_from_date}
                                                is_valid_to_date={is_valid_to_date}
                                                AccountState={AccountState}
                                                onShowHideProjects={onShowHideProjects}
                                                changeProjectDetail={changeProjectDetail}
                                                resetProject={resetProject}
                                                onProjectsSubmit={onProjectsSubmit}
                                                createProject={createProject}
                                                deleteProject={deleteProject}
                                                editProjectOpen={editProjectOpen}
                                                is_edit_project={is_edit_project} />
                                        }
                                        <SocialIcon AccountState={AccountState} />

                                    </div>
                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}
export default Account