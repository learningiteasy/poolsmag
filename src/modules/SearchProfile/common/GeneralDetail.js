import React from 'react'

const GeneralDetail = ({ profile_details, is_individual }) => {
    console.log(profile_details, "profile_details..")
    return (
        <div className="profile__box">
            <div className="profile__box__heading d-flex align-items-center justify-content-between">
                <h3 className="text-uppercase">General </h3>
            </div>

            <div className="user-info">
                <div className="user-info__blk">
                    <h5 className="user-info__heading mb-3"><i className="ri-draft-line" /> intro</h5>
                    <p>{!!profile_details ? profile_details.business_intro : ""}</p>
                </div>
                {is_individual == "true" ?
                    <div className="user-info__blk">
                        <h5 className="user-info__heading mb-3"><i className="ri-settings-line" /> work</h5>
                        <p>{!!profile_details ? profile_details.work : ""}</p>
                    </div> :
                    <div className="user-info__blk">
                        <h5 className="user-info__heading mb-3"><i className="ri-settings-line" /> Specialization</h5>
                        <p>{!!profile_details ? profile_details.specialization : ""}</p>
                    </div>}
                {is_individual == "true" ?
                    <div className="user-info__blk">
                        <h5 className="user-info__heading mb-3"><i className="ri-user-line" /> Skills</h5>
                        <p> {!!profile_details ?
                            profile_details.skills.map((data, index) => {
                                return (index != profile_details.skills.length - 1) ? data.name + ", " : data.name + ""
                            })
                            : ""}</p>
                    </div> :
                    <div className="user-info__blk">
                        <h5 className="user-info__heading mb-3"><i className="ri-user-line" /> Expertise</h5>
                        <p>{!!profile_details ? profile_details.expertise : ""}</p>
                    </div>}
                <div className="user-info__blk">
                    <h5 className="user-info__heading mb-3"><i className="ri-map-pin-line" /> Address</h5>
                    <p>{!!profile_details ? profile_details.address : ""}</p>
                </div>
                <div className="user-info__blk">
                    <h5 className="user-info__heading mb-3"><i className="ri-global-line" /> Language Spoken</h5>
                    <p> {!!profile_details ?
                        (profile_details.language.map((data, index) => {
                            return (index != profile_details.language.length - 1) ? data.Language_name + ", " : data.Language_name + ""
                        })) : ""
                    }</p>
                </div>
            </div>
        </div>
    )
}
export default GeneralDetail