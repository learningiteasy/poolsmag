import React from 'react'

const SocialIcon = () => {
    return (
        <div className="profile__box">
            <div className="profile__box__heading d-flex align-items-center justify-content-between">
                <h3 className="text-uppercase">Socail media Links <i className="ri-edit-box-line socail-media-setting" /></h3>
            </div>
            <div className="social-media-icons">
                <a href="javascript:void(0)"><i className="ri-youtube-line youtube-outline" /></a>
                <a href="javascript:void(0)"><i className="ri-twitter-line twitter-outline" /></a>
                <a href="javascript:void(0)"><i className="ri-facebook-line facebook-outline" /></a>
            </div>
            <div className="socail-media-form">
                <form action method="post">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor>You tube </label>
                                <div className="social-media-field">
                                    <i className="ri-youtube-line" />
                                    <input type="text" name="project-title" className="form-control" placeholder="Name of the project" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor>Twitter </label>
                                <div className="social-media-field"><input type="text" name="project-title" className="form-control" placeholder="Name of the project" /><i className="ri-twitter-line" /></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor>Linkdein </label>
                                <div className="social-media-field">
                                    <i className="ri-linkedin-line" />
                                    <input type="text" name="project-title" className="form-control" placeholder="Name of the project" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor>Facebook</label>
                                <div className="social-media-field">
                                    <i className="ri-facebook-line" />
                                    <input type="text" name="project-title" className="form-control" placeholder="Name of the project" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <div className="form-group text-center mt-4 form-btn">
                                    <input type="submit" name="submit" defaultValue="Save" className="btn btn-primary" />
                                    <input type="submit" name="submit" defaultValue="Save and More" className="btn btn-primary" />
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