import React, { useRef } from 'react'
import { addDefaultSrc, returnDefaultImage } from '../../../library/utilities/functions';

const Basicinfo = ({ AccountState, check_individual, handleFileChange }) => {
    const openProfileEl = useRef(null);
    const openBusinessEl = useRef(null);
    const openCoverEl = useRef(null);
    const { basicInfo: { profileImgData, coverImgData, businessImgData, businessName, name } } = AccountState
    const { GeneralInput: { specialization, work } } = AccountState

    return (
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
                                        <img onError={(e) => addDefaultSrc(e)} src={!!businessImgData ? businessImgData : "assets/images/company-logo-default.svg" } alt="" />
                                        <input type="file" id="businessImgData" ref={openBusinessEl} onChange={handleFileChange} name="businessImage" className="d-none" accept="image/*" />
                                    </div>}
                                <div className="profile-header-img">
                                    <img onError={(e) => addDefaultSrc(e)} src={!!profileImgData ? profileImgData : "assets/images/defaultImage.jpg"} alt="" />
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
                                        <p className="m-b-10">{name}{!!specialization ? "," : ""} {specialization}</p>
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
    )
}
export default Basicinfo