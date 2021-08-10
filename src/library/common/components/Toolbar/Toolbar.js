import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { clearAcceptRequestResponse, clearAllNotificationResponse, clearDeclineRequestResponse } from '../../../../modules/Allnotifications/NotificationAction';
import { clearSearchListResponse } from '../../../../modules/SearchList/SearchListAction';
import { acceptRequestApi, allNotificationsApi, declineRequestApi, onScreenNotificationsApi, readAllNotificationsApi } from '../../../api/NotificationApiService';
import { searchListDataApi } from '../../../api/SearchApiService';
import { IMAGE_BASE_URL } from '../../../urls';
import { clearCookies, getCookie, replceMultiStringWithSIngle } from '../../../utilities/functions';
import { changeIsAuth } from '../../actions/AuthActions';
import Input from '../Input/Input';
import { changeSearchName } from './ToolbarActions';

let page = 1;
const Toolbar = () => {
  let { pathname } = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const profileData = !!getCookie("profile_data") ? JSON.parse(getCookie("profile_data")) : ""
  const toolbarState = useSelector(state => state.ToolbarReducer)
  const notificationState = useSelector(state => state.NotificationReducer)
  const AccountState = useSelector(state => state.AccountReducer);
  const { onScreenNotificationApi: { onScreenNotification, allNotificationCount } } = toolbarState
  const { NotificationCount } = notificationState
  const { acceptRequestApi: { acceptRequestSuccess, acceptRequestStatus } } = notificationState
  const { declineRequestApi: { declineRequestSuccess, declineRequestStatus } } = notificationState
  const { basicInfo: { profileImgData } } = AccountState
  const {searchNameInput: {onChangeSearchName ,reduxSearchName}} = toolbarState
  console.log(toolbarState, "toolbarState...")
  useEffect(() => {
    let test = document.getElementById("notification");
    test.addEventListener("mouseenter", function (event) {
      // highlight the mouseenter target
      dispatch(onScreenNotificationsApi())
    })

    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
    $(".notiifcation").click(function () {

      $(this).toggleClass("show");
    });
    return () => {
      dispatch(clearAcceptRequestResponse())
      dispatch(clearDeclineRequestResponse())
    }
  }, [])
  const handleLogout = () => {
    clearCookies();
    dispatch(changeSearchName({ reduxSearchName: "" }))
    dispatch(changeIsAuth({ is_auth: false }))
    history.push("/")
  }
  useEffect(() => {
    if (!!pathname)
      dispatch(onScreenNotificationsApi())
  }, [pathname])
  useEffect(() => {
    if (!!acceptRequestStatus) {
      // const notificationClick = !!localStorage.getItem("notification-click") ? localStorage.getItem("notification-click") : "";
      // const notificationIndex = !!localStorage.getItem("notification-index") ? Number(localStorage.getItem("notification-index")) : 0;
      // if (!!notificationClick && notificationIndex != null && notificationIndex != undefined) {
      //   if (notificationClick == "toolbar") {
      //     document.querySelectorAll("#notification-toolbar-" + notificationIndex)[0].style.visibility = "hidden";
      //     document.querySelectorAll("#notification-toolbar-" + notificationIndex)[1].style.visibility = "hidden";
      //   }
      // }
      dispatch(onScreenNotificationsApi())
      dispatch(clearAcceptRequestResponse())
    }
  }, [acceptRequestStatus])
  useEffect(() => {
    if (!!declineRequestStatus) {
      dispatch(clearDeclineRequestResponse())
      dispatch(onScreenNotificationsApi())
    }
  }, [declineRequestStatus])
  console.log(profileData)
  const handleSumbit = (e) => {
    e.preventDefault()

    let Name = replceMultiStringWithSIngle(reduxSearchName);
    if (Name != "") {
      if (!window.location.pathname.match("/search-list")) {
        history.push("/search-list")
      }
      else {
        const bodyParameter = {
          search: !!reduxSearchName ? replceMultiStringWithSIngle(reduxSearchName) :""
        }
        dispatch(searchListDataApi(bodyParameter))
      }
    }
  }
  const goToNotification = () => {
    dispatch(readAllNotificationsApi())
    history.push("/all-notification")
  }
  const handleAccept = (Id) => {
    // localStorage.setItem("notification-click", "toolbar");
    // localStorage.setItem("notification-index", index);
    const bodyParameter = {
      id: Id
    }
    dispatch(acceptRequestApi(bodyParameter))
  }
  const handleDecline = (Id) => {
    // localStorage.setItem("notification-click", "toolbar");
    // localStorage.setItem("notification-index", index);
    const bodyParameter = {
      id: Id
    }
    dispatch(declineRequestApi(bodyParameter))
  }
  const openNotification = () => {
    dispatch(onScreenNotificationsApi())
  }
const handleChange = (e)=> {
     let searchDetails ={
      reduxSearchName :e.target.value,
      onChangeSearchName: e.target.value
    }
  dispatch(changeSearchName({ ...toolbarState.searchNameInput , ...searchDetails }))
}
  return (
    <header>
      <div className="container h-100">
        <div className="row h-100 h-100">
          <div className="col-md-12 h-100">
            <div className="header-inner d-flex align-items-center h-100">
              <Link to="/home"><img src="/poolsMagnic/assets/images/image.png" alt="logo" className="logo" /></Link>
              <form onSubmit={handleSumbit} className="search-form" autocomplete="off" >
                <div className="form-group mb-0">
                  <Input type="text" name="searchName" class="form-control" value={onChangeSearchName} onChange={(e) => handleChange(e)} placeholder="Search PoolsMagnic" />
                </div>
              </form>
              <div className="topbar__right ml-auto d-flex h-100">
                <ul className="list-unstyled header-links d-flex align-items-center mb-0">
                  <li className="notiifcation"><a id="notification" onClick={openNotification} href="javascript:void(0)" data-toggle="tooltip" data-placement={!allNotificationCount ? "left" : "left"} title="Notification"><i className="ri-notification-line" />
                    {!!onScreenNotification && onScreenNotification.length > 0 ?
                      <span className="notification-active">{onScreenNotification.length}</span> : ""}
                  </a>
                    {!!allNotificationCount ?
                      <div className="notifications__box">
                        {onScreenNotification.map((data, index) => (
                          <div className="notification__listing">
                            <div className="notification__listing__item">
                              {!!data.is_individual ?
                                <div className="notification-user">
                                  <img onError={(ev) => ev.target.src = 'assets/images/defaultImage.jpg'} src={!!data ? IMAGE_BASE_URL + data.profile_image : 'assets/images/defaultImage.jpg'} alt="user"></img></div>
                                :
                                <div className="notification-user notification-business">
                                  <img onError={(ev) => ev.target.src = 'assets/images/company-logo-default.svg'} src={!!data ? IMAGE_BASE_URL + data.business_image : 'assets/images/company-logo-default.svg'} alt="user"></img></div>}
                              <span>{data.description}</span>
                            </div>
                            {data.title == "New Friend Request!" ?
                              <div className="notification__action">
                                <a href="javascript:void(0)" className="accepted"
                                  onClick={() => handleAccept(data.sender_id)}><i className="ri-check-line" /></a>
                                <a href="javascript:void(0)" className="rejected"
                                  onClick={() => handleDecline(data.sender_id)}><i className="ri-close-fill" /></a>
                              </div> : ""}
                          </div>
                        ))}

                        <div className="notification__listing">
                          {!!allNotificationCount ?
                            <a href="javascript:void(0)" className="link-color small" onClick={goToNotification} >See All</a> : ""}
                        </div>
                      </div> : ""}
                  </li>
                  <li><a href="javascript:void(0)" onClick={() => history.push("/home")} data-toggle="tooltip" data-placement="top" title="Newsfeed"><i className="ri-file-list-3-line" /></a></li>
                  <li><a href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Network"><i className="ri-global-line" /></a></li>
                  <li><a href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Poolschat"><i className="ri-chat-1-line" /></a></li>
                </ul>
                <div className="logged-user  d-flex align-items-center">
                  <img onError={(ev) => ev.target.src = 'assets/images/defaultImage.jpg'} src={!!profileImgData ? profileImgData : IMAGE_BASE_URL + profileData.profile_image} alt="user" />
                  <div className="logged-user__name"><span>{profileData.name}</span> <i className="ri-arrow-down-s-line" /></div>
                  <div className="profile-dropdown">
                    <ul className="list-unstyled">
                      <li><a href="javascript:void(0)" className="link-color" onClick={() => history.push("/account")}>My Profile</a></li>
                      <li><a href="javascript:void(0)" className="link-color" onClick={handleLogout}>Logout</a></li>
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