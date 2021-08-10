import React, { useEffect, useState } from 'react'
import $ from 'jquery';
import moment from 'moment';
// import Carousel from 'react-bootstrap/Carousel'
import { IMAGE_BASE_URL } from '../../../library/urls'
import { useDispatch } from 'react-redux'
import { getPostApi } from '../../../library/api/HomeApiService'
import { changeActiveCarousal, changeAllPostDetail, clearGetPostDetail } from '../HomeActions'
import { addDefaultSrc, getCookie, returnDefaultImage, scroolTop } from '../../../library/utilities/functions';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useHistory, useLocation } from 'react-router-dom';

let post_page = 1
const Posts = ({ profileData, HomeState }) => {
    const { allPostDetail: { allPost, allPostPage } } = HomeState
    const profileDataCookie = !!getCookie("profile_data") ? JSON.parse(getCookie("profile_data")) : ""
    const dispatch = useDispatch();
    const history = useHistory()
    post_page = allPostPage
    useEffect(() => {
        dispatch(clearGetPostDetail());
        scroolTop();
        $("body").click(function () {
            $(".share-box").removeClass("open-share");
        });
        $("body").click(function (event) {
           // event.stopPropagation();
            $(".react-box").removeClass("open-emoji");
        });
        $(window).scroll(function () {
            if (($(window).scrollTop() + $(window).height()) >= $(document).height() - 1) {
                if (window.location.pathname == "/home") {
                    dispatch(changeAllPostDetail({ allPostPage: post_page + 1 }))
                }

            }
        });
        //  $(".post_comment").overlayScrollbars({});
        return () => {

        }
    }, [])

    useEffect(() => {
        if (!!allPostPage) {

            dispatch(getPostApi(allPostPage))
        }
    }, [allPostPage])
    useEffect(() => {
        if (!!allPost) {
            //    $(".post_comment").overlayScrollbars({});
            $(".open-comment").click(function(){
                $(this).parent(".post_comment__counter").nextAll(".post_comment__listing").toggleClass("d-flex");
                $(this).parent(".post_comment__counter").nextAll(".post_comment__listing").find(".post__comment__nested").toggleClass("d-flex");
            }); 
          
             $(".card-footer .react-icon i").click(function (event) {
                event.stopPropagation();
               $(this).parent(".feed__reaction").find(".react-box").toggleClass("open-emoji");

            });
        
            $(".post-share-link  a").click(function (event) {
                event.stopPropagation();
                $(".share-box").toggleClass("open-share");

            });
        }

    }, [allPost])

    const checkLinks = (text) => {
        let newText = "<span>";
        if (!!text) {
            let splStr = text.split(" ")
            //  console.log(splStr ,"splStr")
            for (let i = 0; i < splStr.length; i++) {
                if (splStr[i].match("^http(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$")) {
                    newText = newText + "<a href=" + splStr[i] + " target='_blank'>" + splStr[i] + "</a>" + (i !== splStr.length ? " " : "");
                }
                else {
                    newText = newText + splStr[i] + (i !== splStr.length ? " " : "")
                }
            }
            newText = newText + "</span>"
            console.log(newText, "newText")
        }
        return newText
    }
    const handleSinglePost = (data) => {
        let carousal = {
            activeCarousal: data
        }
        dispatch(changeActiveCarousal({ ...HomeState.activeCarousalDetail, ...carousal }))
    }
    const handleClickItem = (data, index, e) => {
        console.log(e.target.id, "id....")
        if (e.target.id.match("video")) {
            //   alert(12)
            console.log(e.target, "e.target...")
            e.target.pause();
        }
        let carousal = {
            activeCarousal: data,
            activeIndex: index
        }
        // alert(index)
        console.log(data, "data....")
        dispatch(changeActiveCarousal({ ...HomeState.activeCarousalDetail, ...carousal }))
    }
    const handleOnChange = () => {
        var videos = document.querySelectorAll("video");
        videos.forEach(function (video) {
            console.log(video.id, "video")
            video.pause()
        })
    }
    const handlePlay = (e) => {
        console.log(e.currentTarget.id, "currentTarget")
        var videos = document.querySelectorAll("video");
        videos.forEach(function (video) {
            console.log(video.id, "video")
            if (e.currentTarget.id == video.id) {
                video.play()
            }
            else {
                video.pause()
            }
        })

    }
    const handleOpenReact = (index ) => {
        // $(".open-react" + index).toggleClass("open-emoji");
    }
    const handleOpenProfile = (data) => {
        if(profileDataCookie.id == data.user_id){
           history.push("/account")
        }
        else{
            history.push(`/search-profile/${data.user_id}?individual=${!!data.id_individual ? true : false}`)
        }
    }
    const handleOpenComment = (index) => {
            // $(`.comment_post${index}`).toggleClass("d-flex"); 
    }
    return (
        <section className="feeds bg-primary spacer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3" />
                    <div className="col-md-6 mx-auto">
                        <div className="feeds-post bg-white p-3 br-20">
                            <div className="feeds-post__header d-flex flex-wrap align-items-center">
                                <div className="feeds-post__user">
                                    <img onError={(ev) => ev.target.src = 'assets/images/defaultImage.jpg'} src={!!profileData ? IMAGE_BASE_URL + profileData.profile_image : "assets/images/defaultImage.jpg"} alt="user" />
                                </div>
                                <input type="text" name="post" className="form-control" placeholder="What do you want to share with your Audience?" data-toggle="modal" data-target="#feeds-modal" readOnly />
                            </div>
                            <div className="feeds-post__type mt-4 d-flex justify-content-between feed_main">
                                <div className="feeds-post__category"><a href="javascript:void(0)" data-toggle="modal" data-target="#feeds-modal"><i className="ri-image-fill pictures-option" /> Pictures</a></div>
                                <div className="feeds-post__category"><a href="javascript:void(0)" data-toggle="modal" data-target="#feeds-modal"><i className="ri-movie-line video-option" /> Videos</a></div>
                                <div className="feeds-post__category"><a href="javascript:void(0)" data-toggle="modal" data-target="#feeds-modal"><i class="ri-links-line link-option"></i> Links</a></div>
                            </div>
                        </div>
                        {!!allPost &&
                            allPost.map((data, index) => {
                                return <div className="card my-4">
                                    <div className="card-header d-flex align-items-center">
                                        <div className="feeds-post__user mr-3">
                                            {!!data.id_individual ?
                                                <img style={{cursor: 'pointer'}} onClick={() => handleOpenProfile(data)} onError={(ev) => ev.target.src = 'assets/images/defaultImage.jpg'} src={!!data ? IMAGE_BASE_URL + data.user_profile : "assets/images/defaultImage.jpg"} alt="user" />
                                                :
                                                <div className="business-pofile-lead">
                                                <img style={{cursor: 'pointer'}} onClick={() => handleOpenProfile(data)} onError={(ev) => ev.target.src = 'assets/images/company-logo-default.svg'} src={!!data ? (IMAGE_BASE_URL + data.business_image) : "/poolsMagnic/assets/images/company-logo-default.svg"} alt="logo" />
                                                </div>}
                                        </div>
                                        <div className="card-header__timeline">
                                            <h6 className="mb-0 text-capitalize" style={{cursor: 'pointer'}} onClick={() => handleOpenProfile(data)}>{data.user_name}</h6>
                                            {!!data.id_individual ?
                                                <span className="small text-capitalize">{!!data.work ? data.work : ""}</span> :
                                                <span className="small text-capitalize">{!!data.specialization ? data.specialization : ""}</span>}
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        {
                                            (data.post_text !== " " && data.post_text !== "")  &&
                                        
                                        <div className="card-text mb-4"

                                            dangerouslySetInnerHTML={{ __html: checkLinks(data.post_text) }
                                            }>
                                                
                                            </div>
                            }
                                        {data.post_data.length > 1 ?
                                            <Carousel showStatus={false} onChange={handleOnChange} showArrows={false} infiniteLoop={true} showThumbs={false} autoPlay={false}>
                                                {data.post_data.map((datas, i) => {
                                                    return <div onClick={(e) => handleClickItem(data.post_data, i, e)}>
                                                        {datas.extension == "mp4" ?
                                                            <video onPlay={(e) => handlePlay(e)} id={"videoPause" + index + i} src={IMAGE_BASE_URL + datas.file_name} controls data-toggle="modal" data-target="#post-modal" />
                                                            :
                                                            <div data-toggle="modal" data-target="#post-modal" >
                                                                <img onError={(ev) => addDefaultSrc(ev)} className="d-block w-100" src={!!datas.file_name ? IMAGE_BASE_URL + datas.file_name : returnDefaultImage()} alt="First slide" data-toggle="modal" data-target="#post-modal" />
                                                            </div>
                                                        }
                                                    </div>
                                                })}
                                            </Carousel>
                                            :
                                            data.post_data.map((image) => {
                                                return <div onClick={() => handleSinglePost(data.post_data)}> {image.extension == "mp4" ?
                                                    <video onPlay={(e) => handlePlay(e)} id={"videoPause" + index} controls src={IMAGE_BASE_URL + image.file_name} data-toggle="modal" data-target="#post-modal" ></video>
                                                    :
                                                    <img src={IMAGE_BASE_URL + image.file_name} data-toggle="modal" data-target="#post-modal" />}
                                                </div>
                                            })
                                        }
                                    </div>
                                    <div className="card-footer">
                                        <div className="post-status d-flex align-items-center justify-content-between">
                                            {/* <div className="post-status__counter">
                                                <span className="love-counter" data-toggle="modal" data-target="#staus-modal"><img src="assets/images/red-heart.svg" alt="like" />{data.post_heart}</span>
                                                <span className="like-counter" data-toggle="modal" data-target="#staus-modal"><img src="assets/images/blue-like-button.svg" alt="like" />{data.post_like}</span>
                                                <span className="like-counter" data-toggle="modal" data-target="#staus-modal"><img src="assets/images/laugh.svg" alt="like" />{data.post_react}</span>
                                            </div> */}
                                            <div className="post__action d-flex align-items-center">
                                                <div className="post__action__inner d-flex justify-content-between">
                                                    <div className="feed__reaction react-icon" >
                                                    <i className="ri-emotion-line" />  <a href="javascript:void(0)" data-toggle="modal" data-target="#staus-modal" > 23k</a>
                                                        <div className="react-box">
                                                            <a  href="javascript:void(0)"><img src="assets/images/heart.gif" alt="angry" /><span>heart</span></a>
                                                            <a href="javascript:void(0)"><img src="assets/images/love.gif" alt="angry" /><span>love</span></a>
                                                            <a href="javascript:void(0)"><img src="assets/images/sunglasses-2.gif" alt="angry" /><span>cool</span></a>
                                                            <a href="javascript:void(0)"><img src="assets/images/sign.gif" alt="angry" /><span>yoo</span></a>
                                                            <a href="javascript:void(0)"><img src="assets/images/angry.gif" alt="angry" /><span>angry</span></a>
                                                        </div>
                                                    </div>
                                                    <div className="feed__like"><i class="ri-thumb-up-line"></i><a href="javascript:void(0)" data-toggle="modal" data-target="#staus-modal"> 1.6k</a></div>
                                                </div>
                                                <div className="post-share-link">
                                                    <a href="javascript:void(0)" className="btn-sm ml-auto link-txt"><i class="ri-share-forward-line"></i> Share
                                                    </a>
                                                    <div className="share-box">
                                                        <ul className="list-unstyled mb-0">
                                                            <li><a href="javascript:void(0)" className="link-color"><i className="ri-file-list-3-line" /> Share In feed</a></li>
                                                            <li><a href="javascript:void(0)" className="link-color"><i className="ri-chat-1-line" /> Send in PoolsChat</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="post-status__comments">
                                                <span>{data.comment_count} Views</span>
                                                <span>{data.share_count} Share</span>
                                            </div>

                                        </div>

                                        <div className="post_comment" id="post_comments">
                                            <div className="post_comment__counter d-flex my-3 justify-content-between align-items-center">
                                                <span>Comments 20</span>
                                                <span className="open-comment" ><i class="ri-arrow-down-s-line"></i><i class="ri-arrow-down-s-line"></i></span>
                                            </div>


                                            <div className={`post_comment__listing  my-3 comment_post${index}`}>
                                                <div className="post_comment__listing__user">
                                                    <img src="assets/images/Avatar.jpg" alt="username" />
                                                </div>
                                                <div className="post_comment__listing__review">
                                                    <div className="comment-bg">
                                                        <p className="mb-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                                    </div>
                                                    <span><i className="ri-reply-line" /> Reply</span>
                                                </div>
                                            </div> 
                                            <div className={`post_comment__listing  my-3 comment_post${index}`}>
                                                <div className="post_comment__listing__user">
                                                    <img src="assets/images/Avatar.jpg" alt="username" />
                                                </div>
                                                <div className="post_comment__listing__review">
                                                    <div className="comment-bg">
                                                        <p className="mb-1">Lorem Ipsum is simply dummy</p>
                                                    </div>
                                                    <span><i className="ri-reply-line" /> Reply</span>
                                                    <div className="post_comment__listing post__comment__nested">
                                                        <div className="post_comment__listing__user">
                                                            <img src="assets/images/Avatar.jpg" alt="username" />
                                                        </div>
                                                        <div className="post_comment__listing__commentbox">
                                                            <div className="comment-bg">
                                                                <p>Lorem Ipsum is simply dummy</p>
                                                            </div>
                                                            <span><i className="ri-reply-line" /> Reply</span>
                                                        </div>
                                                    </div>
                                                    <div className="post_comment__listing post__comment__nested">
                                                        <div className="post_comment__listing__user">
                                                            <img src="assets/images/Avatar.jpg" alt="username" />
                                                        </div>
                                                        <div className="post_comment__listing__commentbox">
                                                            <input type="text" name="post" className="form-control" placeholder="Write a comment" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="post__commtent__user">
                                                <div className="feeds-post__header d-flex flex-wrap align-items-center">
                                                    <div className="feeds-post__user">
                                                        <img src="assets/images/Avatar.jpg" alt="username" />
                                                    </div>
                                                    <input type="text" name="post" className="form-control" placeholder="Write a comment" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                  
                    </div>
                    <div className="col-md-3" />
                </div>
            </div>
        </section>
    )
}
export default Posts