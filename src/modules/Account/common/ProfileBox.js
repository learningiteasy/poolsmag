import React, { useEffect, useRef } from 'react';
import Select from 'react-select';
import { getProfileApi, updateAdditinalApi } from '../../../library/api/AccountApiService';
import { Input } from '../../../library/common/components';
import { replceMultiStringWithSIngle } from '../../../library/utilities/functions';
import { changeGeneralInfoInput } from '../AccountAction';


const ProfileBox = ({ AccountState, dispatch, check_individual }) => {
    const hideGeneralEl = useRef(null)
    const { basicInfo: { profileImgData, coverImgData, businessImgData, businessName, name,
        profileImage, coverImage, businessImage } } = AccountState
    const { GeneralInput: { intro, specialization, expertise, address, language, work, skills } } = AccountState
    const { getProfileApi: { getProfileResponse } } = AccountState
    console.log(AccountState, "profileState...")

    const handleChange = (e) => {
        dispatch(changeGeneralInfoInput({ [e.target.name]: e.target.value }))
    }
    const handleUpdate = () => {
        const languages = language.map((data) => data.value)
        const skill = skills.map((data) => data.value)
        const bodyParameters = new FormData();
        bodyParameters.append("specialization", specialization);
        bodyParameters.append("business_intro", replceMultiStringWithSIngle(intro) == "" || replceMultiStringWithSIngle(intro) == " " ? "" : replceMultiStringWithSIngle(intro));
        bodyParameters.append("expertise", replceMultiStringWithSIngle(expertise) == "" || replceMultiStringWithSIngle(expertise) == " " ? "" : replceMultiStringWithSIngle(expertise));
        bodyParameters.append("work", "" + replceMultiStringWithSIngle(work) == "" || replceMultiStringWithSIngle(work) == " " ? "" : replceMultiStringWithSIngle(work));
        bodyParameters.append("address", "" + replceMultiStringWithSIngle(address) == "" || replceMultiStringWithSIngle(address) == " " ? "" : replceMultiStringWithSIngle(address));
        bodyParameters.append("language", "" + languages.join(","));
        bodyParameters.append("skill", "" + skill.join(","));
        bodyParameters.append("latitude", "" + "");
        bodyParameters.append("longitude", "" + "");
        bodyParameters.append("profile_image", profileImage);
        bodyParameters.append("business_image", businessImage);
        bodyParameters.append("cover_image", coverImage);

        dispatch(updateAdditinalApi(bodyParameters))
        hideGeneralEl.current.click()
    }
    const showGeneralModel = () => {
        window.setTimeout(() => {
            const showProjectsDialog = document.querySelector(".show-general");
            if (!!showProjectsDialog) {
                let generaldata = {
                    intro: getProfileResponse.business_intro,
                    specialization: getProfileResponse.specialization,
                    expertise: getProfileResponse.expertise,
                    address: getProfileResponse.address,
                    work: getProfileResponse.work,
                    skills: getProfileResponse.skills.map((data) => { return { value: data.id, label: data.name } }),
                    language: getProfileResponse.language.map((data) => { return { value: data.id, label: data.Language_name } })
                }
                dispatch(changeGeneralInfoInput({ ...AccountState.GeneralInput, ...generaldata }))
            }
            else {
                // alert("close")
            }
        }, 0)
    }
    console.log(typeof check_individual, "check_individual..sf")
    return (
        <div className="profile__box">
            <div className="profile__box__heading d-flex align-items-center justify-content-between">
                <h3 className="text-uppercase">General <i className="ri-edit-box-line general-edit" ref={hideGeneralEl} onClick={showGeneralModel} /></h3>
                <Input type="button" name="save" class="btn btn-primary general-setting" value="Save" onClick={handleUpdate} />
            </div>
            <div className="edit-general">
                <div className="profile__box__options">
                    {/* Repo Tabs -*/}
                    <ul className="nav nav-tabs py-3 mb-4" id="repoTabs">
                        <li><a href="#intro" data-toggle="tab"><i className="ri-draft-line" />intro</a></li>
                        {check_individual == "true" ?
                            <li><a href="#work" data-toggle="tab"><i className="ri-settings-line" />Work</a></li> :
                            <li><a href="#specialization" data-toggle="tab"><i className="ri-settings-line" />Specialization</a></li>
                        }
                        {check_individual == "true" ?
                            <li><a href="#Skills" data-toggle="tab"><i className="ri-user-line" />Skills</a></li> :
                            <li><a href="#Expertise" data-toggle="tab"><i className="ri-user-line" />Expertise</a></li>
                        }
                        <li><a href="#Address" data-toggle="tab"><i className="ri-map-pin-line" />Address</a></li>
                        <li><a href="#Language" data-toggle="tab"><i className="ri-global-line" />Language Spoken</a></li>
                    </ul>
                </div>
                {/* Repo Tabs */}
                <div className="tab-content">
                    <div className="tab-pane active" id="intro">
                        <h6 className="text-uppercase mb-3">Enter the information</h6>
                        <textarea name="intro" id className="form-control" value={intro} onChange={handleChange} />
                    </div>
                    {!!check_individual && check_individual == "true" ?
                        <div className="tab-pane" id="work">
                            <h6 className="text-uppercase mb-3">Enter the Work</h6>
                            <Input type="text" name="work" class="form-control" value={work} onChange={handleChange} />
                        </div> :
                        <div className="tab-pane" id="specialization">
                            <h6 className="text-uppercase mb-3">Enter the Specialization</h6>
                            <Input type="text" name="specialization" class="form-control" value={specialization} onChange={handleChange} />
                        </div>}
                    {!!check_individual && check_individual == "true" ?
                        <div className="tab-pane" id="Skills">
                            <h6 className="text-uppercase mb-3">Enter the Skills</h6>
                            <Select
                                value={skills}
                                options={AccountState.skillList.map((data) => { return { value: data.id, label: data.name } })}
                                isMulti={true}
                                onChange={(data) => dispatch(changeGeneralInfoInput({ skills: data }))} />
                        </div> :
                        <div className="tab-pane" id="Expertise">
                            <h6 className="text-uppercase mb-3">Enter the Expertise</h6>
                            <Input type="text" name="expertise" class="form-control" value={expertise} onChange={handleChange} />
                        </div>}
                    <div className="tab-pane" id="Address">
                        <h6 className="text-uppercase mb-3">Enter the Address</h6>
                        <Input type="text" name="address" class="form-control" value={address} onChange={handleChange} />
                    </div>
                    <div className="tab-pane" id="Language">
                        <h6 className="text-uppercase mb-3">Enter the Languages</h6>
                        <Select
                            value={language}
                            options={AccountState.languageList.map((data) => { return { value: data.id, label: data.name } })}
                            isMulti={true}
                            onChange={(data) => dispatch(changeGeneralInfoInput({ language: data }))} />
                        {/* <Input type="text" name="language" class="form-control" /> */}
                    </div>
                </div>
            </div>
            <div className="user-info">
                <div className="user-info__blk">
                    <h5 className="user-info__heading mb-3"><i className="ri-draft-line" /> intro</h5>
                    <p>{!!getProfileResponse.business_intro ? getProfileResponse.business_intro : ""}</p>
                </div>
                {!!check_individual && check_individual == "true" ?
                    <div className="user-info__blk">
                        <h5 className="user-info__heading mb-3"><i className="ri-settings-line" /> Work</h5>
                        <p>{!!getProfileResponse.work ? getProfileResponse.work : ""}</p>
                    </div> :
                    <div className="user-info__blk">
                        <h5 className="user-info__heading mb-3"><i className="ri-settings-line" /> Specialization</h5>
                        <p>{!!getProfileResponse.specialization ? getProfileResponse.specialization : ""}</p>
                    </div>
                }
                {!!check_individual && check_individual == "true" ?
                    <div className="user-info__blk">
                        <h5 className="user-info__heading mb-3"><i className="ri-user-line" /> Skills</h5>
                        {!!getProfileResponse.skills ?
                            getProfileResponse.skills.map((data, index) => {
                                return (index != getProfileResponse.skills.length - 1) ? data.name + ", " : data.name + ""
                            })
                            : ""}
                    </div> :
                    <div className="user-info__blk">
                        <h5 className="user-info__heading mb-3"><i className="ri-user-line" /> Expertise</h5>
                        <p>{!!getProfileResponse.expertise ? getProfileResponse.expertise : ""}</p>
                    </div>}
                <div className="user-info__blk">
                    <h5 className="user-info__heading mb-3"><i className="ri-map-pin-line" /> Address</h5>
                    <p>{!!getProfileResponse.address ? getProfileResponse.address : ""}</p>
                </div>
                <div className="user-info__blk">
                    <h5 className="user-info__heading mb-3"><i className="ri-global-line" /> Language Spoken</h5>
                    <p>{!!getProfileResponse.language ?
                        getProfileResponse.language.map((data, index) => {
                            return (index != getProfileResponse.language.length - 1) ? data.Language_name + ", " : data.Language_name + ""
                        })
                        : ""}</p>
                </div>
            </div>
        </div>
    )
}
export default ProfileBox