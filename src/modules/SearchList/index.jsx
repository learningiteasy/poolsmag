import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { searchListDataApi, sendRequestDataApi } from '../../library/api/SearchApiService';
import { changeSearchName } from '../../library/common/components/Toolbar/ToolbarActions';
import { IMAGE_BASE_URL } from '../../library/urls';
import { clearSearchListResponse, clearSendRequestResponse } from './SearchListAction';

const SearchList = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { addToast } = useToasts();
    const searchListState = useSelector(state => state.SearchListReducer);
    const toolbarState = useSelector(state => state.ToolbarReducer)
    const {searchNameInput : {reduxSearchName} } = toolbarState
    const { searchApi: { is_list_empty, searchListSuccess }, searchList } = searchListState
    const { sendRequestApi: { sendRequestSuccess, sendRequestMessage, sendRequestStatus } } = searchListState
    console.log(searchListState, "searchListState...")
    useEffect(() => {
        dispatch(clearSearchListResponse())
        if (!!reduxSearchName) {

            const bodyParameter = {
                search: reduxSearchName
            }
            dispatch(searchListDataApi(bodyParameter))
        }
        return () => {
            dispatch(clearSendRequestResponse())
            dispatch(changeSearchName({ onChangeSearchName: ""}))
        }
    }, [])
    useEffect(() => {
        if (!!sendRequestStatus && sendRequestStatus == "200") {
            addToast(sendRequestMessage, {
                appearance: 'success',
                autoDismiss: true,
            });
            const bodyParameter = {
                search: searchName
            }
            dispatch(searchListDataApi(bodyParameter))
            dispatch(clearSendRequestResponse())
        }
        if (sendRequestStatus == "400") {
            dispatch(clearSendRequestResponse())
            const bodyParameter = {
                search: searchName
            }
            dispatch(searchListDataApi(bodyParameter))
        }
    }, [sendRequestStatus])
    const sendRequest = (Id) => {
        const bodyParameter = {
            id: Id
        }
        dispatch(sendRequestDataApi(bodyParameter))

    }
    return (
        <>
            {!!searchList && !!searchListSuccess ?
                <section className="hero-inner py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="text-white  text-capitalize mb-0 h5">{searchList.length} Search result found</h1>
                            </div>
                        </div>
                    </div>
                </section> : ""}
            {searchList.length > 0 &&
                <section className="search-users bg-primary spacer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                {searchList.map((data) => (
                                    <div className="search-users__wrapper d-flex flex-wrap bg-white p-4 br-20 position-relative">
                                        {!!data.is_individual ?
                                            <div className="search-users__img d-flex align-items-center">

                                                <img onError={(ev) => ev.target.src = 'assets/images/defaultImage.jpg'} src={!!data ? IMAGE_BASE_URL + data.profile_image : 'assets/images/defaultImage.jpg'} alt="user"></img></div>
                                            :
                                            <div className="search-users__img d-flex align-items-center business-user">
                                                <img onError={(ev) => ev.target.src = 'assets/images/company-logo-default.svg'} src={!!data ? IMAGE_BASE_URL + data.business_image : 'assets/images/company-logo-default.svg'} alt="user"></img>
                                            </div>

                                        }
                                        <div class="search-users__detail">
                                            <Link to={`/search-profile/${data.id}?individual=${!!data.is_individual ? true : false}`} className="link-color"><h5 className="text-capitalize">{data.name}</h5></Link>
                                            {data.friends == true ?

                                                <a className="btn btn-primary view-profile frnd-btn" href="javascript:void(0)" style={{ cursor: "default" }}><i class="ri-user-follow-line"></i> </a>
                                                :
                                                (!!data.request_sent ?
                                                    <a className="btn bg-success view-profile" href="javascript:void(0)" style={{ cursor: "default" }}><i className="ri-user-follow-line" /> Request sent</a>
                                                    :
                                                    <a className="btn btn-blue view-profile" href="javascript:void(0)" onClick={() => sendRequest(data.id)}><i class="ri-user-add-line"></i> Link-Up</a>
                                                )
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>}

        </>
    )
}
export default SearchList