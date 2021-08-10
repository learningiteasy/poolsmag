import React from 'react'

const EmploymentDetail = ({employment_details}) => {
    return(
        <div className="profile__box">
        <div className="profile__box__heading d-flex align-items-center justify-content-between">
            <h3 className="text-uppercase">Employments </h3>
        </div>

        <div className="projects__listing">
            <div className="row">
                <div className="col-md-12">
                {
              (!!employment_details && employment_details.length == 0)  &&
              <div>No empolyment found</div>
            }
                    {!!employment_details  &&
                    employment_details.map((data) => {
                        return  <div className="projects__listing__inner d-flex flex-wrap">
                        <span className="project-timeline position-absolute">{data.from_date} - {!!data.current_job == "1" ? "Present" : data.to_date}</span>
                        <div className="project__icon">
                          <i className="ri-folder-settings-line" />
                        </div>
                        <div className="project__details">
                          <h4><a href="javascript:void(0)" className="link-color text-capitalize">{data.company_name}</a></h4>
                          <p><span className="font-weight-bold"></span>{data.position} in {data.address}</p>
                          <div className="project__descp">
                            <p>{data.description}</p>
                          </div>
                          
                        </div>
                      </div>
                    })}
                </div>
            </div>
        </div>
    </div>
    )
}
export default EmploymentDetail