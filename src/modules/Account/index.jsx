import React from 'react';
import { useEffect } from 'react';
import $ from 'jquery';
import { ProfileBox, Project } from './common';
import SocialIcon from './common/SocialIcon';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileApi } from '../../library/api/AccountApiService';
import { getCookie } from '../../library/utilities/functions';

const Account = () => {
    const dispatch = useDispatch();
    const AccountState = useSelector(state => state.AccountReducer)
    console.log(AccountState ,"AccountState...")
    useEffect(() => {
        // dispatch(getProfileApi(getCookie("token_id")))
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
    return (
        <>
            <div>
                <section className="profile-header spacer bg-primary">
                    <div className="container">
                        <div className="col-md-12">
                            <a href="javascript:void(0)" className="cover-edit btn"><i className="ri-pencil-line" /> update Cover picture</a>
                        </div>
                    </div>
                    <div className="container profile-area">
                        <div className="row">
                            <div className="col-md-12">
                                {/* BEGIN profile-header-content */}
                                <div className="profile-header-content">
                                    {/* BEGIN profile-header-img */}
                                    <div className="profile-header-content__inner  d-flex align-items-center">
                                        <div className="business-logo">
                                            <img src="/images/business-logo.jpg" alt="business-logo" />
                                        </div>
                                        <div className="profile-header-img">
                                            <img src="/images/Avatar.jpg" alt="" />
                                            <a href="javascript:void(0)"><i className="ri-pencil-line" /></a>
                                        </div>
                                        {/* END profile-header-img */}
                                        {/* BEGIN profile-header-info */}
                                        <div className="profile-header-info">
                                            <h3 className>Business Name</h3>
                                            <p className="m-b-10">username, Specialization</p>
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
                                        <ProfileBox AccountState={AccountState} />
                                        <Project />
                                        <SocialIcon />
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