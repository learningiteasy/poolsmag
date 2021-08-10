import React from 'react'
import { useEffect } from 'react'
import $ from 'jquery'
import { useToasts } from 'react-toast-notifications';
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { cancelRequestDataApi, searchProfileDataApi, sendRequestDataApi, unfriendUserApi } from '../../library/api/SearchApiService'
import { IMAGE_BASE_URL } from '../../library/urls'
import { EmploymentDetail, GeneralDetail, ProjectDetail, SocialLink } from './common'
import { clearCancelRequestResponse, clearProfileResponse, clearUnfriendResponse } from './SearchProfileAction'
import { clearSendRequestResponse } from '../SearchList/SearchListAction';
import { addDefaultSrc, scroolTop } from '../../library/utilities/functions';

const SearchProfile = () => {
    const { userId } = useParams()
    const loc = useLocation();
    const is_individual = loc.search.split("=")[1];
    console.log(is_individual, "loc..")
    const dispatch = useDispatch()
    const { addToast } = useToasts();
    const searchState = useSelector(state => state.SearchProfileReducer)
    const searchListState = useSelector(state => state.SearchListReducer);
    const { sendRequestApi: { sendRequestStatus, sendRequestMessage } } = searchListState
    const { searchProfileApi: { searchProfileResponse } } = searchState
    const { profile_details } = searchProfileResponse
    const { cancleRequestApi: { cancleRequestStatus, cancleRequestMessage } } = searchState
    const { unfriendApi: { unfriendStatus, unfriendMessage } } = searchState

    console.log(searchState, "searchState..")
    console.log(profile_details, "coverimage")
    useEffect(() => {
        scroolTop()
        $(".profile-action .ri-more-2-fill").click(function () {

            $(".profile-action ul").toggleClass("profile-action-active");
        });
        const bodyParameter = {
            id: userId
        }
        dispatch(searchProfileDataApi(bodyParameter))
        return () => {
            dispatch(clearProfileResponse())
            dispatch(clearSendRequestResponse())
        }
    }, [])
    useEffect(() => {
        if (!!unfriendStatus) {
            // addToast(sendRequestMessage, {
            //     appearance: 'success',
            //     autoDismiss: true,
            // });
            const bodyParameter = {
                id: userId
            }
            dispatch(searchProfileDataApi(bodyParameter))
            dispatch(clearUnfriendResponse())
        }
    }, [unfriendStatus])
    useEffect(() => {
        if (!!sendRequestStatus) {
            addToast(sendRequestMessage, {
                appearance: 'success',
                autoDismiss: true,
            });
            const bodyParameter = {
                id: userId
            }
            dispatch(searchProfileDataApi(bodyParameter))
            dispatch(clearSendRequestResponse())
        }
    }, [sendRequestStatus])
    useEffect(() => {
        if (!!cancleRequestStatus) {
            // addToast(cancleRequestMessage, {
            //     appearance: 'success',
            //     autoDismiss: true,
            // });
            const bodyParameter = {
                id: userId
            }
            dispatch(searchProfileDataApi(bodyParameter))
            dispatch(clearCancelRequestResponse())
        }
    }, [cancleRequestStatus])
    const handleCancelRequest = () => {
        const bodyParameter = {
            id: userId
        }
        dispatch(cancelRequestDataApi(bodyParameter))
    }

    const handleSendRequest = () => {
        const bodyParameter = {
            id: userId
        }
        dispatch(sendRequestDataApi(bodyParameter))
    }
    const handleUnfriend = () => {
       const bodyParameter ={
           id : userId
       }
       dispatch(unfriendUserApi(bodyParameter))
    }
    return (
        <div>
            <section className="profile-header spacer bg-primary" style={{ backgroundImage: `url(${!!profile_details ? IMAGE_BASE_URL + profile_details.cover_image : ""})` }}>

                <div className="container profile-area">
                    <div className="row">
                        <div className="col-md-12">
                            {/* BEGIN profile-header-content */}
                            <div className="profile-header-content">
                                {/* BEGIN profile-header-img */}
                                <div className="profile-header-content__inner  d-flex align-items-center">
                                    {is_individual == "true" ? "" :
                                        <div className="business-logo">
                                            <img onError={(ev) => ev.target.src = 'assets/images/company-logo-default.svg'} src={(!!profile_details && !!profile_details.business_image) ? (IMAGE_BASE_URL + profile_details.business_image) : "/poolsMagnic/assets/images/company-logo-default.svg"} alt="logo" />
                                        </div>}
                                    <div className="profile-header-img">
                                        <img onError={(ev) => ev.target.src = '/poolsMagnic/assets/images/defaultImage.jpg'} src={(!!profile_details && !!profile_details.profile_image) ? IMAGE_BASE_URL + profile_details.profile_image : "/poolsMagnic/assets/images/defaultImage.jpg"} alt="logo" />
                                    </div>
                                    {/* END profile-header-img */}
                                    {/* BEGIN profile-header-info */}
                                    {is_individual == "true" ?
                                        <div className="profile-header-info">
                                            <h3 className>{!!profile_details ? profile_details.name : ""}</h3>
                                            <p className="m-b-10">{!!profile_details ? profile_details.work : ""}</p>
                                        </div> :
                                        <div className="profile-header-info">
                                            <h3 className="text-capitalize">{!!profile_details ? profile_details.business_name : ""}</h3>
                                            <p className="m-b-10"><span className="font-weight-bold text-capitalize">{!!profile_details ? profile_details.name : ""}</span>,
                                                <span className="font-italic">{!!profile_details ? profile_details.specialization : ""}</span></p>
                                        </div>}
                                    <div className="profile-action ml-auto">
                                        {!!profile_details && profile_details.friends == false ?
                                            (!profile_details.request_sent ?
                                                <a href="javascript:void(0)" onClick={handleSendRequest} className="btn btn-blue"><i className="ri-user-follow-line" /> Link Up</a>:
                                                <a className="btn bg-success" href="javascript:void(0)" style={{ cursor: "default" }}><i className="ri-user-follow-line" /> Request Sent</a>
                                            )
                                            :    <a className="btn btn-primary view-profile frnd-btn" href="javascript:void(0)" style={{ cursor: "default" }}><i class="ri-user-follow-line"></i> </a>}<i className="ri-more-2-fill" />

                                        <ul>{!!profile_details && profile_details.friends == false ?
                                            (!!profile_details.request_sent &&
                                                <li><a href="javascript:void(0)" onClick={handleCancelRequest}><i className="ri-close-circle-line" /> Cancel Request</a></li>
                                            )
                                            :
                                            <li><a href="javascript:void(0)" onClick={handleUnfriend}><i className="ri-user-unfollow-fill" /> Un-link</a></li>}
                                        <li><a href="javascript:void(0)" ><i class="ri-forbid-line"></i> Block</a></li>
                                        </ul>
                                    </div>
                                    {/* END profile-header-info */}
                                </div>
                            </div>
                            {/* end profile */}
                        </div>
                    </div>
                </div>
            </section>
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
                                    <GeneralDetail profile_details={searchProfileResponse.profile_details}
                                        is_individual={is_individual} />
                                    {is_individual == "true" ?
                                        <EmploymentDetail employment_details={searchProfileResponse.employment_details} /> :
                                        <ProjectDetail project_details={searchProfileResponse.project_details} />}
                                    <SocialLink social_details={searchProfileResponse.social_details} />
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
export default SearchProfile