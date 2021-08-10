import React, { useEffect } from 'react'
import { useToasts } from 'react-toast-notifications';
import { getCookie } from '../../../library/utilities/functions'
import Posts from './Posts'
import SharePost from './SharePost'
import SinglePostModel from './SinglePostModel';

const Feeds = ({ HomeState }) => {
  const profileData = !!getCookie("profile_data") ? JSON.parse(getCookie("profile_data")) : ""
  const { addToast } = useToasts();

  useEffect(() => {
    $(".users-listing").overlayScrollbars({});
  }, [])
  return (
    <>
      <div>
        {/* <section className="hero-inner py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="text-white  text-capitalize mb-0">Feeds</h1>
              </div>
            </div>
          </div>
        </section> */}
        <Posts profileData={profileData}
        HomeState={HomeState} />
      </div>

      <SharePost HomeState={HomeState}
        profileData={profileData}
        addToast={addToast} />

      <SinglePostModel HomeState={HomeState} />

      {/* LIKE MODAL */}
      {/* Modal */}
      <div className="modal fade" id="staus-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <ul className="nav nav-pills mb-3" id="pills-details" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><img src="assets/images/blue-like-button.svg" alt="like" />30k</a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false"><img src="assets/images/red-heart.svg" alt="like" />20k</a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false"><img src="assets/images/laugh.svg" alt="like" /> 100k</a>
                </li>
              </ul>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <div className="users-listing">
                    <div className="users-listing__item">
                      <img src="assets/images/Avatar.jpg" alt="user" />
                      <h6>Michael</h6>
                    </div>
                    <div className="users-listing__item">
                      <img src="assets/images/Avatar.jpg" alt="user" />
                      <h6>Michael</h6>
                    </div>
                    <div className="users-listing__item">
                      <img src="assets/images/Avatar.jpg" alt="user" />
                      <h6>Michael</h6>
                    </div>
                    <div className="users-listing__item">
                      <img src="assets/images/Avatar.jpg" alt="user" />
                      <h6>Michael</h6>
                    </div>
                    <div className="users-listing__item">
                      <img src="assets/images/Avatar.jpg" alt="user" />
                      <h6>Michael</h6>
                    </div>
                  </div>
                </div>
                {/* <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <div className="users-listing">
                    <div className="users-listing__item">
                      <img src="assets/images/Avatar.jpg" alt="user" />
                      <h6>Michael</h6>
                    </div>
                    <div className="users-listing__item">
                      <img src="assets/images/Avatar.jpg" alt="user" />
                      <h6>Michael</h6>
                    </div>
                    <div className="users-listing__item">
                      <img src="assets/images/Avatar.jpg" alt="user" />
                      <h6>Michael</h6>
                    </div>
                    <div className="users-listing__item">
                      <img src="assets/images/Avatar.jpg" alt="user" />
                      <h6>Michael</h6>
                    </div>
                    <div className="users-listing__item">
                      <img src="assets/images/Avatar.jpg" alt="user" />
                      <h6>Michael</h6>
                    </div>
                  </div>
                </div> */}
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                  <div className="users-listing">
                    <div className="users-listing__item">
                      <img src="assets/images/Avatar.jpg" alt="user" />
                      <h6>Michael</h6>
                    </div>
                    <div className="users-listing__item">
                      <img src="assets/images/Avatar.jpg" alt="user" />
                      <h6>Michael</h6>
                    </div>
                    <div className="users-listing__item">
                      <img src="assets/images/Avatar.jpg" alt="user" />
                      <h6>Michael</h6>
                    </div>
                    <div className="users-listing__item">
                      <img src="assets/images/Avatar.jpg" alt="user" />
                      <h6>Michael</h6>
                    </div>
                    <div className="users-listing__item">
                      <img src="assets/images/Avatar.jpg" alt="user" />
                      <h6>Michael</h6>
                    </div>
                    <div className="users-listing__item">
                      <img src="assets/images/Avatar.jpg" alt="user" />
                      <h6>Michael</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}
export default Feeds