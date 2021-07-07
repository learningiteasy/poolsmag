import { data } from 'jquery'
import React from 'react'

const Employment = ({ AccountState, onShowHideEmployments,
  changeEmploymentDetail, resetEmployment,
  createEmployment, onEmploymentsSubmit, deleteEmployment,
  editEmploymentOpen, is_edit_employment }) => {
  const { getEmploymentsApi: { getEmploymentsMessage, employments, getEmploymentsLoading, getEmploymentsSucess }, my_employments } = AccountState
  console.log(getEmploymentsMessage, employments, getEmploymentsLoading, getEmploymentsSucess, "getEmploymentsMessage..")
  return (
    <div className="profile__box">
      <div className="profile__box__heading d-flex align-items-center justify-content-between">
        <h3 className="text-uppercase">Employments <i className="ri-edit-box-line project-setting" onClick={onShowHideEmployments} /></h3>
      </div>

      <div className="project-form">
        <form onSubmit={onEmploymentsSubmit}>
          {
            my_employments.map((employment, index) =>
              <>
              <div className="row">
                <div className="col-md-2">
                  <div className="form-group current-project">
                    {/* <label htmlFor>Current</label> */}
                    <input type="checkbox" name="current"
                      onChange={(e) => { changeEmploymentDetail(e, index) }} checked={employment.current} className="h-auto" />
                      <span className="ml-2">Current Job</span>
                  </div>
                </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor>Company Name</label>
                      <input type="text" name="title" className="form-control"
                        onChange={(e) => { changeEmploymentDetail(e, index) }} value={employment.title} placeholder="Name of the Company" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor>from</label>
                        <input type="text" name="from" className="form-control"
                          onChange={(e) => { changeEmploymentDetail(e, index) }} value={employment.from} placeholder="MM/YYYY" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor>To</label>
                        <input type="text" name="to" disabled={employment.current ? true : false} className="form-control"
                          onChange={(e) => { changeEmploymentDetail(e, index) }} value={employment.to} placeholder="MM/YYYY" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor>Position Title</label>
                      <input type="text" name="type_of_job" className="form-control"
                        onChange={(e) => { changeEmploymentDetail(e, index) }} value={employment.type_of_job} placeholder="Your role" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor>Location</label>
                      <input type="text" name="location" className="form-control"
                        onChange={(e) => { changeEmploymentDetail(e, index) }} value={employment.location} placeholder="State, Country" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor>Description</label>
                      <textarea name="description" className="form-control"
                        onChange={(e) => { changeEmploymentDetail(e, index) }} value={employment.description} placeholder="Job description of assignments, operations and duties" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <div className="form-group text-left mt-4 form-btn">
                        <input type="button" name="submit" value="Reset" onClick={(e) => { resetEmployment(index) }} className="btn btn-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          }
          <div class="form-group  mt-3 form-btn text-right">
          <input type="submit" name="submit" value={is_edit_employment ? "Update" : "Save"} className="btn btn-primary" />
          {
            !is_edit_employment &&
            <input type="button" name="submit" value="Add More" onClick={createEmployment} className="btn btn-primary" />
          }
          </div>
        </form>


      </div>
      <div className="projects__listing">
        <div className="row">
          <div className="col-md-12">
            {
              ((getEmploymentsSucess && employments.length == 0) || (!getEmploymentsSucess)) &&
              <div>{getEmploymentsMessage}</div>
            }
            {
              getEmploymentsSucess && employments.length > 0 &&
              employments.map((data, index) => (
                <div className="projects__listing__inner d-flex flex-wrap">
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
                    <div className="project__controls mt-4">
                      <a href="javascript:void(0)" className="link-color" onClick={() => { editEmploymentOpen(data) }}><i class="ri-pencil-line"></i></a>
                      <a href="javascript:void(0)" onClick={() => { deleteEmployment(data.id) }} className="link-color"><i class="ri-delete-bin-line"></i></a>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export default Employment