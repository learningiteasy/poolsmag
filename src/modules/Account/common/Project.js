import { data } from 'jquery'
import React from 'react'

const Project = ({ AccountState, onShowHideProjects,
  changeProjectDetail, resetProject,
  createProject, onProjectsSubmit, deleteProject,
  editProjectOpen, is_edit_project }) => {
  const { getProjectsApi: { getProjectsMessage, projects, getProjectsLoading, getProjectsSucess }, my_projects } = AccountState
  console.log(getProjectsMessage, projects, getProjectsLoading, getProjectsSucess, "getProjectsMessage..")
  console.log(projects, "projects....")
  return (
    <div className="profile__box">
      <div className="profile__box__heading d-flex align-items-center justify-content-between">
        <h3 className="text-uppercase">Projects <i className="ri-edit-box-line project-setting" onClick={onShowHideProjects} /></h3>
      </div>

      <div className="project-form">
        <form onSubmit={onProjectsSubmit}>
          {
            my_projects.map((project, index) =>
              <div className="mb-4">
               <div className="row">   
                <div className="col-md-2">
                  <div className="form-group current-project">
                    {/* <label htmlFor>Current</label> */}
                    <input type="checkbox" name="current"
                      onChange={(e) => { changeProjectDetail(e, index) }} checked={project.current} className="h-auto" />
                     <span className="ml-2">Current Project</span>
                  </div>
                </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor>Project Title</label>
                      <input type="text" name="title" className="form-control"
                        onChange={(e) => { changeProjectDetail(e, index) }} value={project.title} placeholder="Name of the Project" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor>from</label>
                        <input type="text" name="from" className="form-control"
                          onChange={(e) => { changeProjectDetail(e, index) }} value={project.from} placeholder="MM/YYYY" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor>To</label>
                        <input type="text" name="to" disabled={project.current ? true : false} className="form-control"
                          onChange={(e) => { changeProjectDetail(e, index) }} value={project.to} placeholder="MM/YYYY" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor>Type of job</label>
                      <input type="text" name="type_of_job" className="form-control"
                        onChange={(e) => { changeProjectDetail(e, index) }} value={project.type_of_job} placeholder="Job done in the Project" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor>Location</label>
                      <input type="text" name="location" className="form-control"
                        onChange={(e) => { changeProjectDetail(e, index) }} value={project.location} placeholder="Location of the Project" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor>Description</label>
                      <textarea name="description" className="form-control"
                        onChange={(e) => { changeProjectDetail(e, index) }} value={project.description} placeholder="Describe your Business project" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <div className="form-group text-left mt-4 form-btn">
                        <input type="button" name="submit" value="Reset" onClick={(e) => { resetProject(index) }} className="btn btn-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
           <div class="form-group  mt-3 form-btn text-right">
          <input type="submit" name="submit" value={is_edit_project ? "Update" : "Save"} className="btn btn-primary" />
          {
            !is_edit_project &&
            <input type="button" name="submit" value="Add More" onClick={createProject} className="btn btn-primary" />
          }
          </div>
        </form>


      </div>
      <div className="projects__listing">
        <div className="row">
          <div className="col-md-12">
            {
              ((getProjectsSucess && projects.length == 0) || (!getProjectsSucess)) &&
              <div>{getProjectsMessage}</div>
            }
            {
              getProjectsSucess && projects.length > 0 &&
              projects.map((data, index) => (
                <div className="projects__listing__inner d-flex flex-wrap">
                  <span className="project-timeline position-absolute">{data.from_date} - {data.current_project == "1" ? "Present" : data.to_date}</span>
                  <div className="project__icon">
                    <i className="ri-folder-settings-line" />
                  </div>
                  <div className="project__details">
                    <h4><a href="javascript:void(0)" className="link-color text-capitalize">{data.title}</a></h4>
                    <p><span className="font-weight-bold"></span>{data.job_type} in {data.address}</p>
                    <div className="project__descp">
                      <p>{data.description}</p>
                    </div>
                    <div className="project__controls mt-4">
                      <a href="javascript:void(0)" className="link-color" onClick={() => { editProjectOpen(data) }}><i class="ri-pencil-line"></i></a>
                      <a href="javascript:void(0)" onClick={() => { deleteProject(data.id) }} className="link-color"><i class="ri-delete-bin-line"></i></a>
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
export default Project