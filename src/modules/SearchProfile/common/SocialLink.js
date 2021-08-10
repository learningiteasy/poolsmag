import React from 'react';

const SocialLink = ({social_details}) => {
    return (
        <div className="profile__box">
            <div className="profile__box__heading d-flex align-items-center justify-content-between">
                <h3 className="text-uppercase">Social media Links </h3>
            </div>
            <div className="social-media-icons">
            {
              (!!social_details && social_details.youtube == "" && social_details.twitter=="" &&social_details.facebook==""
              && social_details.linkedIn =="")  &&
              <div>No social links found</div>
            }
            {!!social_details &&!!social_details.youtube ? <a href={social_details.youtube} target="_blank"><i className="ri-youtube-line youtube-outline" /></a> : ""}
                {!!social_details &&!!social_details.twitter ? <a href={social_details.twitter} target="_blank"><i className="ri-twitter-line twitter-outline" /></a> : ""}
                {!!social_details&&!!social_details.facebook ? <a href={social_details.facebook} target="_blank"><i className="ri-facebook-line facebook-outline" /></a> : ""}
                {!!social_details&&!!social_details.linkedIn ? <a href={social_details.linkedIn} target="_blank"><i className="ri-linkedin-line linkedin-outline" /></a> : ""}
            </div>

        </div>
    )
}
export default SocialLink