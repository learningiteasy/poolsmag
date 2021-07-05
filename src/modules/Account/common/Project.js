import React from 'react'

const Project = () => {
    return(
        <div className="profile__box">
        <div className="profile__box__heading d-flex align-items-center justify-content-between">
          <h3 className="text-uppercase">Projects <i className="ri-edit-box-line project-setting" /></h3>
        </div>
        <div className="project-form">
          <form action method="post">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor>Project Title</label>
                  <input type="text" name="project-title" className="form-control" placeholder="Name of the project" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor>from</label>
                    <input type="text" name="project-title" className="form-control" placeholder="Name of the project" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor>To</label>
                    <input type="text" name="project-title" className="form-control" placeholder="Name of the project" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor>Type of job</label>
                  <input type="text" name="project-title" className="form-control" placeholder="Name of the project" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor>Location</label>
                  <input type="text" name="project-title" className="form-control" placeholder="Name of the project" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor>Description</label>
                  <textarea name="Description" className="form-control" defaultValue={""} />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <div className="form-group text-center mt-4 form-btn">
                    <input type="submit" name="submit" defaultValue="Save" className="btn btn-primary" />
                    <input type="submit" name="submit" defaultValue="Save and More" className="btn btn-primary" />
                    <input type="button" name="submit" defaultValue="Reset" className="btn btn-primary" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="projects__listing">
          <div className="row">
            <div className="col-md-12">
              <div className="projects__listing__inner d-flex flex-wrap">
                <span className="project-timeline position-absolute">Feb 2019 - Aug 2021</span>
                <div className="project__icon">
                  <i className="ri-folder-settings-line" />
                </div>
                <div className="project__details">
                  <h4><a href="javascript:void(0)" className="link-color">What is Lorem Ipsum?</a></h4>
                  <p><span className="font-weight-bold">Construction</span> in San jose, CA</p>
                  <div className="project__descp">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi velit, repellendus tempora, asperiores, veritatis sunt aliquid deserunt qui laboriosam id sapiente vitae sit eos, provident impedit quo enim dolor facere.</p>
                  </div>
                  <div className="project__controls">
                    <a href="javascript:void(0)" className="link-color mr-2">Edit</a>
                    <a href="javascript:void(0)" className="link-color">Delete</a>
                  </div>
                </div>
              </div>
              <div className="projects__listing__inner d-flex flex-wrap">
                <span className="project-timeline position-absolute">Feb 2019 - Aug 2021</span>
                <div className="project__icon">
                  <i className="ri-folder-settings-line" />
                </div>
                <div className="project__details">
                  <h4><a href="javascript:void(0)" className="link-color">What is Lorem Ipsum?</a></h4>
                  <p><span className="font-weight-bold">Construction</span> in San jose, CA</p>
                  <div className="project__descp">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi velit, repellendus tempora, asperiores, veritatis sunt aliquid deserunt qui laboriosam id sapiente vitae sit eos, provident impedit quo enim dolor facere.</p>
                  </div>
                  <div className="project__controls">
                    <a href="javascript:void(0)" className="link-color mr-2">Edit</a>
                    <a href="javascript:void(0)" className="link-color">Delete</a>
                  </div>
                </div>
              </div>
              <div className="projects__listing__inner d-flex flex-wrap">
                <span className="project-timeline position-absolute">Feb 2019 - Aug 2021</span>
                <div className="project__icon">
                  <i className="ri-folder-settings-line" />
                </div>
                <div className="project__details">
                  <h4><a href="javascript:void(0)" className="link-color">What is Lorem Ipsum?</a></h4>
                  <p><span className="font-weight-bold">Construction</span> in San jose, CA</p>
                  <div className="project__descp">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi velit, repellendus tempora, asperiores, veritatis sunt aliquid deserunt qui laboriosam id sapiente vitae sit eos, provident impedit quo enim dolor facere.</p>
                  </div>
                  <div className="project__controls">
                    <a href="javascript:void(0)" className="link-color mr-2">Edit</a>
                    <a href="javascript:void(0)" className="link-color">Delete</a>
                  </div>
                </div>
              </div>
              <div className="projects__listing__inner d-flex flex-wrap">
                <span className="project-timeline position-absolute">Feb 2019 - Aug 2021</span>
                <div className="project__icon">
                  <i className="ri-folder-settings-line" />
                </div>
                <div className="project__details">
                  <h4><a href="javascript:void(0)" className="link-color">What is Lorem Ipsum?</a></h4>
                  <p><span className="font-weight-bold">Construction</span> in San jose, CA</p>
                  <div className="project__descp">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi velit, repellendus tempora, asperiores, veritatis sunt aliquid deserunt qui laboriosam id sapiente vitae sit eos, provident impedit quo enim dolor facere.</p>
                  </div>
                  <div className="project__controls">
                    <a href="javascript:void(0)" className="link-color mr-2">Edit</a>
                    <a href="javascript:void(0)" className="link-color">Delete</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Project