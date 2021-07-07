import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addSocialIconApi, getSocialIconApi } from '../../../library/api/AccountApiService'
import { useToasts } from 'react-toast-notifications';
import { Input } from '../../../library/common/components'
import { addValidation } from '../../../library/utilities/functions'
import { changeGeneralInfoInput, changeSocialIconInput, clearSocialIconResponse } from '../AccountAction'
import { SocialIconValidation } from '../validation'

const SocialIcon = ({ AccountState }) => {
    const dispatch = useDispatch();
    const { addToast } = useToasts();
    const youtubeEl = useRef();
    const twitterEl = useRef();
    const linkedinEl = useRef();
    const facebookEl = useRef();
    const openIconForm = useRef();
    const [message, setMessage] = useState("")
    const { socialIconInput: { youtube, twitter, linkedin, facebook } } = AccountState
    const { getSocialIcon: { SocialIconResponse } } = AccountState
    const { addSocialIconApi: { addSocialSucess, addSocialMessage } } = AccountState

    useEffect(() => {
        if (!!addSocialSucess) {
            addToast(addSocialMessage, {
                appearance: 'success',
                autoDismiss: true,
            });
            dispatch(getSocialIconApi());
            dispatch(clearSocialIconResponse());
            openIconForm.current.click();
        }
    }, [addSocialSucess])
    useEffect(() => {
        if (!!SocialIconResponse) {
            if (SocialIconResponse.youtube == "" && SocialIconResponse.twitter == ""
                && SocialIconResponse.linkedIn == "" && SocialIconResponse.facebook == "") {
                setMessage("No social media links found")
            }
            else {
                setMessage("")
            }
        }
    }, [SocialIconResponse])
    const handleAddIcon = () => {
        let validation = {
            is_valid_youtube: { status: false, validation: youtubeEl },
            is_valid_twiter: { status: false, validation: twitterEl },
            is_valid_linkedin: { status: false, validation: linkedinEl },
            is_valid_facebook: { status: false, validation: facebookEl }
        }
        validation = SocialIconValidation(validation, AccountState.socialIconInput)
        let { is_valid_youtube, is_valid_twiter, is_valid_linkedin, is_valid_facebook } = validation
        addValidation(validation)
        if (is_valid_youtube.status && is_valid_twiter.status &&
            is_valid_linkedin.status && is_valid_facebook.status) {
            const bodyParameter = {
                facebook: facebook,
                twitter: twitter,
                youtube: youtube,
                linkedIn: linkedin
            }
            dispatch(addSocialIconApi(bodyParameter))
        }

    }
    const handleChange = (e) => {
        dispatch(changeSocialIconInput({ [e.target.name]: e.target.value }))
    }
    const showIconForm = () => {
        window.setTimeout(() => {
            const showProjectDialog = document.querySelector(".socail-show");
            if (!!showProjectDialog) {
                let Icondata = {
                    youtube: SocialIconResponse.youtube,
                    twitter: SocialIconResponse.twitter,
                    linkedin: SocialIconResponse.linkedIn,
                    facebook: SocialIconResponse.facebook,
                }
                dispatch(changeSocialIconInput({ ...AccountState.socialIconInput, ...Icondata }))
            }
            else {

            }
        }, 250)
    }

    return (
        <div className="profile__box">
            <div className="profile__box__heading d-flex align-items-center justify-content-between">
                <h3 className="text-uppercase">Socail media Links <i className="ri-edit-box-line socail-media-setting" ref={openIconForm} onClick={showIconForm} /></h3>
            </div>
            <div className="social-media-icons">
                {!!SocialIconResponse.youtube ? <a href={SocialIconResponse.youtube} target="_blank"><i className="ri-youtube-line youtube-outline" /></a> : ""}
                {!!SocialIconResponse.twitter ? <a href={SocialIconResponse.twitter} target="_blank"><i className="ri-twitter-line twitter-outline" /></a> : ""}
                {!!SocialIconResponse.facebook ? <a href={SocialIconResponse.facebook} target="_blank"><i className="ri-facebook-line facebook-outline" /></a> : ""}
                {!!SocialIconResponse.linkedIn ? <a href={SocialIconResponse.linkedIn} target="_blank"><i className="ri-linkedin-line linkedin-outline" /></a> : ""}
                {!!message ?
                    <p>{message}</p> : ""}
            </div>
            <div className="socail-media-form">
                <form action method="post">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor>You tube </label>
                                <div className="social-media-field">
                                    <i className="ri-youtube-line" />
                                    <Input type="text" name="youtube" class="form-control" value={youtube} placeholder="Name of the project" onChange={handleChange} />
                                </div>
                                <p style={{ display: "none" }} ref={youtubeEl} className="error-message">Please enter valid youtube </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor>Twitter </label>
                                <div className="social-media-field">
                                    <Input type="text" name="twitter" class="form-control" value={twitter} placeholder="Name of the project" onChange={handleChange} /><i className="ri-twitter-line" /></div>
                                <p style={{ display: "none" }} ref={twitterEl} className="error-message">Please enter valid twitter </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor>Linkdein </label>
                                <div className="social-media-field">
                                    <i className="ri-linkedin-line" />
                                    <Input type="text" name="linkedin" class="form-control" value={linkedin} placeholder="Name of the project" onChange={handleChange} />
                                </div>
                                <p style={{ display: "none" }} ref={linkedinEl} className="error-message">Please enter valid linkedin </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor>Facebook</label>
                                <div className="social-media-field">
                                    <i className="ri-facebook-line" />
                                    <Input type="text" name="facebook" class="form-control" value={facebook} placeholder="Name of the project" onChange={handleChange} />
                                </div>
                                <p style={{ display: "none" }} ref={facebookEl} className="error-message">Please enter valid facebook </p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <div className="form-group mt-4 form-btn">
                                    <Input type="button" name="Save" value="Save" class="btn btn-primary" onClick={handleAddIcon} />
                                    {/* <input type="submit" name="submit" defaultValue="Save and More" className="btn btn-primary" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SocialIcon