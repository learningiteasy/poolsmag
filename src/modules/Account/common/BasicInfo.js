import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addDefaultSrc, getCookie, returnDefaultImage, setCookie } from '../../../library/utilities/functions';

const Basicinfo = ({ AccountState, check_individual, handleFileChange }) => {
    const history = useHistory();
    const openProfileEl = useRef(null);
    const openBusinessEl = useRef(null);
    const openCoverEl = useRef(null);
    const LoginModel = useSelector(state => state.LoginReducer)
    const { loginApiResponse: { loginDataResponse } } = LoginModel
    const { basicInfo: { profileImgData, coverImgData, businessImgData, businessName, name } } = AccountState
    const { GeneralInput: { specialization, work } } = AccountState
    let firstTimeLogin = !!getCookie("firstTimeLogin")? getCookie("firstTimeLogin"): ""
   const handleNext = () => {
    setCookie("firstTimeLogin" ,false ,1)
    history.push("/home")
   }
    return (
        <>
            {!!firstTimeLogin  ?
                <section className="welcome py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="welcome__content">
                                    <h1 className="font-weight-bold">Welcome to poolsMagnic!</h1>
                                    <p>Build and customise your Business Profile.<br /> So, it helps you grow your Network and found by others </p>
                                </div>
                                <a href="javascript:void(0)" className="btn btn-secondary back-btn" onClick={() => history.push("/home")}><i class="ri-arrow-left-s-line"></i> Back</a>
                                <a href="javascript:void(0)" onClick={handleNext} className="btn next-btn btn-blue"> Next <i class="ri-arrow-right-s-line"></i></a>

                            </div>
                        </div>
                    </div>
                </section>
                : ""}
            <section className="profile-header spacer bg-primary" style={{ backgroundImage: `url(${coverImgData})` }}>
                <div className="container">
                    <div className="col-md-12">
                       
                            <a href="javascript:void(0)" className="cover-edit btn" onClick={() => openCoverEl.current.click()}><i className="ri-pencil-line" /> update Cover picture</a>
                     
                        <input type="file" id="coverImgData" ref={openCoverEl} onChange={handleFileChange} name="coverImage" className="d-none" accept="image/*" />
                    </div>
                </div>
                <div className="container profile-area">
                    <div className="row">
                        <div className="col-md-12">
                            {/* BEGIN profile-header-content */}
                            <div className="profile-header-content">
                                {/* BEGIN profile-header-img */}
                                <div className="profile-header-content__inner  d-flex align-items-center">
                                    {check_individual === "true" ?
                                        "" :
                                        <div className="business-logo position-relative">
                                            
                                                <a href="javascript:void(0)" onClick={() => openBusinessEl.current.click()}>
                                                    <i className="ri-pencil-line" />
                                                </a>
                                            <img onError={(ev) => ev.target.src = 'assets/images/company-logo-default.svg'} src={!!businessImgData ? businessImgData : "assets/images/company-logo-default.svg"} alt="" />
                                            <input type="file" id="businessImgData" ref={openBusinessEl} onChange={handleFileChange} name="businessImage" className="d-none" accept="image/*" />
                                        </div>}
                                    <div className="profile-header-img">
                                        <img onError={(ev) => ev.target.src = 'assets/images/defaultImage.jpg'} src={!!profileImgData ? profileImgData : "assets/images/defaultImage.jpg"} alt="" />
                                       
                                            <a href="javascript:void(0)" onClick={() => openProfileEl.current.click()}><i className="ri-pencil-line" /></a>
                                    
                                        <input type="file" id="profileImgData" ref={openProfileEl} onChange={handleFileChange} name="profileImage" className="d-none" accept="image/*" />
                                    </div>
                                    {/* END profile-header-img */}
                                    {/* BEGIN profile-header-info */}
                                    {check_individual === "true" ?
                                        <div className="profile-header-info">
                                            <h3 className>{name}</h3>
                                            <p className="m-b-10">{work}</p>
                                        </div>
                                        :
                                        <div className="profile-header-info">
                                            <h3 className="text-capitalize">{businessName}</h3>
                                            <p className="m-b-10"><span className="font-weight-bold text-capitalize">{name}</span><span className="font-italic">{!!specialization ? "," : ""} {specialization}</span></p>
                                        </div>
                                    }

                                    {/* END profile-header-info */}
                                </div>
                            </div>
                            {/* end profile */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Basicinfo