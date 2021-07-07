import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearCookies, getCookie } from '../../../utilities/functions';
import { changeIsAuth } from '../../actions/AuthActions';

const Toolbar = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const handleLogout = () =>{
        clearCookies();
        dispatch(changeIsAuth({is_auth: false}))
          history.push("/main")
    }
    const profileData = JSON.parse(getCookie("profile_data"))
    console.log(profileData)
    return(
        <header>
        <div className="container h-100">
          <div className="row h-100 h-100">
            <div className="col-md-12 h-100">
              <div className="header-inner d-flex align-items-center h-100">
                <a href="javascript:void(0)"><img src="/assets/images/image.png" alt="logo" className="logo" /></a>
                <form action method="post" className="search-form">
                  <div className="form-group mb-0">
                    <input type="text" name="search" className="form-control"  placeholder="Search PoolsMagnic" />
                  </div>
                </form>
                <div className="topbar__right ml-auto d-flex h-100">
                  <ul className="list-unstyled header-links d-flex align-items-center mb-0">
                    <li><a href="javascript:void(0)"><i className="ri-notification-line" /></a></li>
                    <li><a href="javascript:void(0)"><i className="ri-file-list-3-line" /></a></li>
                    <li><a href="javascript:void(0)"><i className="ri-global-line" /></a></li>
                    <li><a href="javascript:void(0)"><i className="ri-chat-1-line" /></a></li>
                  </ul>
                  <div className="logged-user  d-flex align-items-center">
                    <img src="/assets/images/Avatar.jpg" alt="user" />
                    <div className="logged-user__name"><span>{profileData.name}</span> <i className="ri-arrow-down-s-line" /></div>
                    <div className="profile-dropdown">
                      <ul className="list-unstyled">
                        <li><a href="my-profile.html" className="link-color">My Profile</a></li>
                        <li><a href="login.html" className="link-color" onClick={handleLogout}>Logout</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}
export default Toolbar