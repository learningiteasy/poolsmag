import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { acceptRequestApi, allNotificationsApi, declineRequestApi } from '../../library/api/NotificationApiService';
import { IMAGE_BASE_URL } from '../../library/urls';
import { scroolTop } from '../../library/utilities/functions';
import { changeNotificationPage, clearAcceptRequestResponse, clearAllNotificationResponse, clearDeclineRequestResponse } from './NotificationAction';

let new_page = 1
const AllNotification = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const notificationState = useSelector(state => state.NotificationReducer)
    const { allNotificationApi: { allNotificationResponse, allNotificationSuccess }, notificationPage } = notificationState
    const { acceptRequestApi: { acceptRequestStatus } } = notificationState
    const { declineRequestApi: { declineRequestStatus } } = notificationState
    console.log(notificationState, "notificationState..")
    new_page = notificationPage
    useEffect(() => {
        scroolTop()
        dispatch(clearAllNotificationResponse());
        $(window).scroll(function () {
            if (($(window).scrollTop() + $(window).height()) >= $(document).height() - 1) {
                if(window.location.pathname=="/all-notification"){
                dispatch(changeNotificationPage({ notificationPage: new_page + 1 }))
                }
            }
        });

        return () => {
            // dispatch(clearAllNotificationResponse());
        }
    }, [])

    useEffect(() => {
        if (!!declineRequestStatus) {
            dispatch(clearAllNotificationResponse());
            scroolTop()
            // dispatch(allNotificationsApi(notificationPage))
            dispatch(clearDeclineRequestResponse());
        }
    }, [declineRequestStatus])

    useEffect(() => {
        if (!!acceptRequestStatus) {
            dispatch(clearAllNotificationResponse());
            scroolTop()
            // dispatch(allNotificationsApi(notificationPage))
            dispatch(clearAcceptRequestResponse());
        }
    }, [acceptRequestStatus])
    useEffect(() => {

        dispatch(allNotificationsApi(notificationPage))
    }, [notificationPage])

    const handleAccept = (Id) => {
        const bodyParameter = {
            id: Id
        }
        dispatch(acceptRequestApi(bodyParameter))
    }
    const handleDecline = (Id) => {
        const bodyParameter = {
            id: Id
        }
        dispatch(declineRequestApi(bodyParameter))
    }
    return (
        <>
            <section className="search-users bg-primary spacer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            {allNotificationResponse.map((data) => {
                                return <div className="search-users__wrapper d-flex flex-wrap bg-white p-4 br-20 position-relative">
                                    <div className="search-users__img d-flex align-items-center">
                                        {!!data.is_individual ?
                                            <div className="search-users__img d-flex align-items-center">
                                                <img style={{cursor:"pointer"}} onClick={()=> history.push(`/search-profile/${data.sender_id}?individual=${!!data.is_individual ? true : false}`)} onError={(ev) => ev.target.src = 'assets/images/defaultImage.jpg'} src={!!data ? IMAGE_BASE_URL + data.profile_image : 'assets/images/defaultImage.jpg'} alt="user"></img>
                                            </div>
                                            :
                                            <div className="search-users__img d-flex align-items-center business-user">
                                                <img style={{cursor:"pointer"}} onError={(ev) => ev.target.src = 'assets/images/company-logo-default.svg'} src={!!data ? IMAGE_BASE_URL + data.business_image : 'assets/images/company-logo-default.svg'} alt="user"></img>
                                            </div>}

                                    </div>
                                    <div className="search-users__detail notifications-actions">
                                       <h5 className="ml-2">{data.description}</h5>
                                        {data.title == "New Friend Request!" ?
                                            <div className="request-user ml-auto">
                                                <a href="javascript:void(0)" onClick={() => handleAccept(data.sender_id)} className="accepted" >  <i className="ri-check-line" /></a>
                                                <a href="javascript:void(0)" onClick={() => handleDecline(data.sender_id)} className="rejected"> <i className="ri-close-fill" /></a>
                                            </div> : ""}
                                    </div>



                                </div>
                            })}
                            {allNotificationResponse.length == 0 && !!allNotificationSuccess ?
                                <div> No notifications found</div> : ""}

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AllNotification