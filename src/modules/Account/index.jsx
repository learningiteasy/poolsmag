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
    updateEmploymentApi, languageListApi, skilsListApi, updateAdditinalApi
} from '../../library/api/AccountApiService';
import { addDefaultSrc, getCookie, returnDefaultImage } from '../../library/utilities/functions';
import {
    changeBasicInfoInput,
    clearProfileData, clearUpdateProfileRespons,
    addNewProject, changeMyProjectDetailInfo, clearSaveMyProjectsResponse,
    clearDeleteProjectResponse, changeEditProject, clearUpdateProjectResponse,

    addNewEmployment, changeMyEmploymentDetailInfo, clearSaveMyEmploymentsResponse,
    clearDeleteEmploymentResponse, changeEditEmployment, clearUpdateEmploymentResponse, clearSocialIconResponse
} from './AccountAction';

import { useRef } from 'react';

let edit_project = false, edit_employment = false;

const Account = () => {
    const { latitude, longitude, error } = usePosition();
    const dispatch = useDispatch();
    const { addToast } = useToasts();
    const check_individual = getCookie("individual")
    const AccountState = useSelector(state => state.AccountReducer);
    const { basicInfo: { profileImgData, coverImgData, businessImgData, businessName, name,
        profileImage, coverImage, businessImage }, my_projects, my_employments } = AccountState
    const { GeneralInput: { intro, specialization, expertise, address, language, work, skills },
        is_edit_project, is_edit_employment } = AccountState
    const { updateAdditionApi: { updateAdditionSucess, updateAdditionMessage },
        saveMyProjectsApi: { saveMyProjectsSucess, saveMyProjectsMessage },
        deleteProjectApi: { deleteProjectSucess, deleteProjectMessage },
        updateProjectApi: { updateProjectSucess, updateProjectMessage },

        saveMyEmploymentsApi: { saveMyEmploymentsSucess, saveMyEmploymentsMessage },
        deleteEmploymentApi: { deleteEmploymentSucess, deleteEmploymentMessage },
        updateEmploymentApi: { updateEmploymentSucess, updateEmploymentMessage } } = AccountState
    const { addSocialIconApi: { addSocialSucess, addSocialMessage } } = AccountState
    edit_project = is_edit_project;
    edit_employment = is_edit_employment;

    useEffect(() => {
        if (!!updateAdditionSucess) {
            addToast(updateAdditionMessage, {
                appearance: 'success',
                autoDismiss: true,
            });
            dispatch(getProfileApi())
            dispatch(clearUpdateProfileRespons());
        }
    }, [updateAdditionSucess])

    useEffect(() => {
        if (updateProjectSucess !== "") {
            if (!!updateProjectSucess) {
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
            }
            else {
                addToast(updateProjectMessage, {
                    appearance: 'error',
                    autoDismiss: true,
                });
            }
            // clear api response...
            dispatch(clearUpdateProjectResponse());
        }
    }, [updateProjectSucess])

    useEffect(() => {
        if (saveMyProjectsSucess !== "") {
            if (!!saveMyProjectsSucess) {
                // get api
                if (getCookie("individual") == "true") {

                }
                else {
                    dispatch(getProjectsApi());
                }
                // close the dialog...
                const showProjectsDialog = document.querySelector(".project-setting");
                showProjectsDialog.click();
                addToast(saveMyProjectsMessage, {
                    appearance: 'success',
                    autoDismiss: true,
                });
            }
            else {
                addToast(saveMyProjectsMessage, {
                    appearance: 'error',
                    autoDismiss: true,
                });
            }
            // clear api response...
            dispatch(clearSaveMyProjectsResponse());
        }
    }, [saveMyProjectsSucess])

    useEffect(() => {
        if (deleteProjectSucess !== "") {
            if (!!deleteProjectSucess) {
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
            }
            else {
                addToast(deleteProjectMessage, {
                    appearance: 'error',
                    autoDismiss: true,
                });
            }
            // clear api response...
            dispatch(clearDeleteProjectResponse());
        }
    }, [deleteProjectSucess])


    /**
     * employment
     */

    useEffect(() => {
        if (updateEmploymentSucess !== "") {
            if (!!updateEmploymentSucess) {
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
            }
            else {
                addToast(updateEmploymentMessage, {
                    appearance: 'error',
                    autoDismiss: true,
                });
            }
            // clear api response...
            dispatch(clearUpdateEmploymentResponse());
        }
    }, [updateEmploymentSucess])

    useEffect(() => {
        if (saveMyEmploymentsSucess !== "") {
            if (!!saveMyEmploymentsSucess) {
                // get api
                if (getCookie("individual") == "true") {
                    dispatch(getEmploymentsApi());
                }
                else {

                }
                // close the dialog...
                const showEmploymentsDialog = document.querySelector(".project-setting");
                showEmploymentsDialog.click();
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
    }, [saveMyEmploymentsSucess])

    useEffect(() => {
        if (deleteEmploymentSucess !== "") {
            if (!!deleteEmploymentSucess) {
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
            }
            else {
                addToast(deleteEmploymentMessage, {
                    appearance: 'error',
                    autoDismiss: true,
                });
            }
            // clear api response...
            dispatch(clearDeleteEmploymentResponse());
        }
    }, [deleteEmploymentSucess])


    useEffect(() => {
        dispatch(getProfileApi())
        dispatch(languageListApi());
        dispatch(skilsListApi());
        dispatch(getSocialIconApi());
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
    };

    const onShowHideProjects = () => {
        window.setTimeout(() => {
            const showProjectsDialog = document.querySelector(".project-show");
            if (!!showProjectsDialog) {
                if (!edit_project)
                    dispatch(addNewProject())
            }
            else {
                // alert("close")
                dispatch(changeEditProject(false))
                const default_project = [{
                    current: true,
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

    const resetProject = (index) => {
        let projects = my_projects;
        const default_project = {
            current: true,
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
        let projects = my_projects;
        const default_project = {
            current: true,
            title: "",
            from: "",
            to: "",
            type_of_job: "",
            location: "",
            description: ""
        }
        projects.push(default_project)
        dispatch(changeMyProjectDetailInfo(projects))
    }

    const onProjectsSubmit = (e) => {
        e.preventDefault();
        let projects = my_projects;
        console.log(projects, "projectssdgdfh")
        let sendProjects = [];

        // hit api to send the details to the server...
        for (let i in projects) {
            sendProjects.push({
                project_id: projects[i].project_id,
                current_project: !!projects[i].current ? 1 : 0,
                title: projects[i].title,
                from_date: projects[i].from,
                to_date: projects[i].to,
                job_type: projects[i].type_of_job,
                address: projects[i].location,
                description: projects[i].description,
                latitude: longitude,
                longitude: latitude
            })
        }
        if (is_edit_project) {
            console.log(sendProjects[0], "testttttttt")
            dispatch(updateProjectApi(sendProjects[0]));
        }
        else {
            dispatch(saveMyProjectsApi({ projects: sendProjects }));
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
            from: project.raw_from_date,
            to: !!project.raw_to_date ? project.raw_to_date : "",
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
            const showEmploymentsDialog = document.querySelector(".project-show");
            if (!!showEmploymentsDialog) {
                if (!edit_employment)
                    dispatch(addNewEmployment())
            }
            else {
                // alert("close")
                dispatch(changeEditEmployment(false))
                const default_employment = [{
                    current: true,
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

    const resetEmployment = (index) => {
        let employments = my_employments;
        const default_employment = {
            current: true,
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
        let employments = my_employments;
        const default_employment = {
            current: true,
            title: "",
            from: "",
            to: "",
            type_of_job: "",
            location: "",
            description: ""
        }
        employments.push(default_employment)
        dispatch(changeMyEmploymentDetailInfo(employments))
    }

    const onEmploymentsSubmit = (e) => {
        e.preventDefault();
        let employments = my_employments;
        console.log(employments, "employmentssdgdfh")
        let sendEmployments = [];

        // hit api to send the details to the server...
        for (let i in employments) {
            sendEmployments.push({
                emp_id: employments[i].employment_id,
                current_job: !!employments[i].current ? 1 : 0,
                company_name: employments[i].title,
                from_date: employments[i].from,
                to_date: employments[i].to,
                position: employments[i].type_of_job,
                address: employments[i].location,
                latitude: latitude,
                longitude: longitude,
                description: employments[i].description
            })
        }
        if (is_edit_employment) {
            console.log(sendEmployments[0], "testttttttt")
            dispatch(updateEmploymentApi(sendEmployments[0]));
        }
        else {
            console.log(sendEmployments, "sendEmployments,.....fgf")
            dispatch(saveMyEmploymentsApi({ employments: sendEmployments }));
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
            from: employment.raw_from_date,
            to: !!employment.raw_to_date ? employment.raw_to_date : "",
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
                                            <Employment AccountState={AccountState}
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

                                            <Project AccountState={AccountState}
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