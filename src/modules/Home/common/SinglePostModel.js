import React, { useEffect } from 'react'
// import Carousel from 'react-bootstrap/Carousel'
import { IMAGE_BASE_URL } from '../../../library/urls'
import { addDefaultSrc, returnDefaultImage } from '../../../library/utilities/functions'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { changeActiveCarousal } from '../HomeActions';
import { useDispatch } from 'react-redux';

const SinglePostModel = ({ HomeState }) => {
    const dispatch = useDispatch();
    const { activeCarousalDetail: { activeCarousal, activeIndex } } = HomeState
    useEffect(() => {
        if(activeCarousal.length>0){
       $(".post_comment").overlayScrollbars({});
        }
    }, [activeCarousal])
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
    const handleOnChange = () => {
        var videos = document.querySelectorAll("video");
        videos.forEach(function (video) {
            console.log(video.id, "video")
                video.pause()
        })
    }
    const handleClose = () => {
        let carousal = {
            activeCarousal: [],
            activeIndex: ""
        }
        dispatch(changeActiveCarousal({ ...HomeState.activeCarousalDetail, ...carousal }))
        var videos = document.querySelectorAll("video");
        videos.forEach(function (video) {
            video.pause();

        })
    }
    let data = ["assets/images/freestocks-YYsvB-xlOVI-unsplash.jpg", "assets/images/guilherme-stecanella-smCn7Cbhk_c-unsplash.jpg",
        "assets/images/freestocks-YYsvB-xlOVI-unsplash.jpg"]
    return (
        <>
            {/* POST MODAL */}
            {/* Modal */}
            <div className="modal fade" id="post-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                        <button onClick={handleClose} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            {activeCarousal.length>1 ?
                             <Carousel onChange={handleOnChange} showIndicators={false} swipeable={true} selectedItem={activeIndex} showStatus={false} infiniteLoop={true} showThumbs={false} autoPlay={false} >
                                {activeCarousal.map((data, i) => {
                                    return <div className="carousel-inner">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="large-img">
                                                    {data.extension == "mp4" ?
                                                        <video onPlay={(e) => handlePlay(e)} id={"videoStop" + i} src={IMAGE_BASE_URL + data.file_name} controls />
                                                        :
                                                        <img onError={(ev) => addDefaultSrc(ev)} className="d-block w-100" src={!!data.file_name ? IMAGE_BASE_URL + data.file_name : returnDefaultImage()} alt="First slide" />
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <h3 className="text-left">Michel</h3>
                                                <span className="small text-left d-block mb-4">40 Mins ago</span>
                                                <div className="post-status d-flex align-items-center justify-content-between">
                                                <div className="post__action d-flex align-items-center">
                                                <div className="post__action__inner d-flex justify-content-between">
                                                    <div className="feed__reaction react-icon" >
                                                        <a href="javascript:void(0)" ><i className="ri-emotion-line" /> 23k</a>
                                                        <div className="react-box" >
                                                            <a href="javascript:void(0)"><img src="assets/images/angry.gif" alt="angry" /><span>angry</span></a>
                                                            <a href="javascript:void(0)"><img src="assets/images/angry.gif" alt="angry" /><span>angry</span></a>
                                                            <a href="javascript:void(0)"><img src="assets/images/angry.gif" alt="angry" /><span>angry</span></a>
                                                            <a href="javascript:void(0)"><img src="assets/images/angry.gif" alt="angry" /><span>angry</span></a>
                                                            <a href="javascript:void(0)"><img src="assets/images/angry.gif" alt="angry" /><span>angry</span></a>
                                                        </div>
                                                    </div>
                                                    <div className="feed__like"><a href="javascript:void(0)"><i class="ri-thumb-up-fill"></i> 1.6k</a></div>
                                    






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
                                                        <span>0 Comments</span>
                                                        <span>0 Share</span>
                                                    </div>
                                                </div>
                                                <div className="post_comment">

                                                    <div className="post_comment__listing  my-4">
                                                        <div className="post_comment__listing__user">
                                                            <img src="assets/images/Avatar.jpg" alt="username" />
                                                        </div>
                                                        <div className="post_comment__listing__review">
                                                            <div className="comment-bg">
                                                                <p className="mb-1">Lorem Ipsum is simply dummy text of the printing and  Lorem Ipsum is simply dummy text of the printing and </p>
                                                            </div>
                                                            <span><i class="ri-reply-line"></i> Reply</span>
                                                        </div>
                                                    </div>
                                                    <div className="post_comment__listing  my-4">
                                                        <div className="post_comment__listing__user">
                                                            <img src="assets/images/Avatar.jpg" alt="username" />
                                                        </div>
                                                        <div className="post_comment__listing__review">
                                                            <div className="comment-bg">
                                                                <p className="mb-1">Lorem Ipsum is simply dummy</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                <div className="post__commtent__user">
                                                    <div className="feeds-post__header d-flex flex-wrap align-items-center">
                                                        <div className="feeds-post__user">
                                                            <img src="assets/images/Avatar.jpg" alt="username" />
                                                        </div>
                                                        <div className="feeds-post__comment">
                                                            <input type="text" name="post" className="form-control" placeholder="Write a comment" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </Carousel> 
                            :   
                            activeCarousal.map((data, i) => {
                                return <div className="carousel-inner">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="large-img">
                                                {data.extension == "mp4" ?
                                                    <video onPlay={(e) => handlePlay(e)} id={"videoStop" + i} src={IMAGE_BASE_URL + data.file_name} controls />
                                                    :
                                                    <img onError={(ev) => addDefaultSrc(ev)} className="d-block w-100" src={!!data.file_name ? IMAGE_BASE_URL + data.file_name : returnDefaultImage()} alt="First slide" />
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                                <h3 className="text-left">Michel</h3>
                                                <span className="small text-left d-block mb-4">40 Mins ago</span>
                                                <div className="post-status d-flex align-items-center justify-content-between">
                                                <div className="post__action d-flex align-items-center">
                                                <div className="post__action__inner d-flex justify-content-between">
                                                    <div className="feed__reaction react-icon" >
                                                        <a href="javascript:void(0)" ><i className="ri-emotion-line" /> 23k</a>
                                                        <div className="react-box" >
                                                            <a href="javascript:void(0)"><img src="assets/images/angry.gif" alt="angry" /><span>angry</span></a>
                                                            <a href="javascript:void(0)"><img src="assets/images/angry.gif" alt="angry" /><span>angry</span></a>
                                                            <a href="javascript:void(0)"><img src="assets/images/angry.gif" alt="angry" /><span>angry</span></a>
                                                            <a href="javascript:void(0)"><img src="assets/images/angry.gif" alt="angry" /><span>angry</span></a>
                                                            <a href="javascript:void(0)"><img src="assets/images/angry.gif" alt="angry" /><span>angry</span></a>
                                                        </div>
                                                    </div>
                                                    <div className="feed__like"><a href="javascript:void(0)"><i class="ri-thumb-up-fill"></i> 1.6k</a></div>
                                    






                                                </div>
                                                {/* <div className="post-share-link">
                                                    <a href="javascript:void(0)" className="btn-sm ml-auto link-txt"><i class="ri-share-forward-line"></i> Share
                                                    </a>
                                                    <div className="share-box">
                                                        <ul className="list-unstyled mb-0">
                                                            <li><a href="javascript:void(0)" className="link-color"><i className="ri-file-list-3-line" /> Share In feed</a></li>
                                                            <li><a href="javascript:void(0)" className="link-color"><i className="ri-chat-1-line" /> Send in PoolsChat</a></li>
                                                        </ul>
                                                    </div>
                                                </div> */}
                                            </div>
                                                    <div className="post-status__comments">
                                                        <span>0 Comments</span>
                                                        <span>0 Share</span>
                                                    </div>
                                                </div>
                                                <div className="post_comment">

                                                    <div className="post_comment__listing  my-4">
                                                        <div className="post_comment__listing__user">
                                                            <img src="assets/images/Avatar.jpg" alt="username" />
                                                        </div>
                                                        <div className="post_comment__listing__review">
                                                            <div className="comment-bg">
                                                                <p className="mb-1">Lorem Ipsum is simply dummy text of the printing and  Lorem Ipsum is simply dummy text of the printing and </p>
                                                            </div>
                                                            <span><i class="ri-reply-line"></i> Reply</span>
                                                        </div>
                                                    </div>
                                                    <div className="post_comment__listing  my-4">
                                                        <div className="post_comment__listing__user">
                                                            <img src="assets/images/Avatar.jpg" alt="username" />
                                                        </div>
                                                        <div className="post_comment__listing__review">
                                                            <div className="comment-bg">
                                                                <p className="mb-1">Lorem Ipsum is simply dummy</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post__commtent__user">
                                                    <div className="feeds-post__header d-flex flex-wrap align-items-center">
                                                        <div className="feeds-post__user">
                                                            <img src="assets/images/Avatar.jpg" alt="username" />
                                                        </div>
                                                        <div className="feeds-post__comment">
                                                            <input type="text" name="post" className="form-control" placeholder="Write a comment" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                </div>
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SinglePostModel