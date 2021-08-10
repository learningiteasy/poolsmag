import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { ReactTinyLink } from 'react-tiny-link'
import { LinkPreview } from '@dhaiwat10/react-link-preview';
import { changeSharePostInput, clearPostUploadResponse } from '../HomeActions';
import { IMAGE_BASE_URL } from '../../../library/urls';
import { postUploadApi } from '../../../library/api/HomeApiService';
import { replceMultiStringWithSIngle } from '../../../library/utilities/functions';

let links = [], allBaseImages = [], files = [];
const SharePost = ({ HomeState, profileData, addToast }) => {
    const dispatch = useDispatch();
    const inputFile = useRef();
    const inputVideoFile = useRef()
    const closeEl = useRef();
    const { SharePostInput: { shareText, mediaFile, mediaUrl, fileVisibility },
        uploadPostApi: { uploadPostStatus, uploadPostLoading, uploadPostResponse },
        allPostDetail: { allPost } } = HomeState

    console.log(HomeState, "HomeStates")

    const handleChange = (e) => {
        links = []
        dispatch(changeSharePostInput({ shareText: e.target.value }))
        e.target.value.trim().replace(/\s\s+/g, ' ');
        let splStr = e.target.value.split(" ")
        //  console.log(splStr ,"splStr")
        for (let i = 0; i < splStr.length; i++) {
            if (splStr[i].match("^http(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$")) {
                links.push(splStr[i])
                console.log(splStr[i], "spltstr")
            }
        }

    }
    useEffect(() => {
        if (!!uploadPostStatus && uploadPostStatus == "200") {
            closeEl.current.click();
            if (!!uploadPostResponse) {
                allPost.unshift(uploadPostResponse);
            }
            dispatch(clearPostUploadResponse())
        }

    }, [uploadPostStatus])
    const handleFileChange = e => {
        const data = e.target.files[0];
        if (!!data) {
            const fileName = data.name.split(".");
            const imageFormat = fileName[fileName.length - 1];
            if (imageFormat === "png" || imageFormat === "jpg" || imageFormat === "jpeg" ||
                imageFormat === "PNG" || imageFormat === "JPG" || imageFormat === "JPEG") {
                files.push(...e.target.files);
                dispatch(changeSharePostInput({ mediaFile: files }))

                // Pusing inform with base64
                const reader = new FileReader();
                reader.addEventListener("load", () => {
                    allBaseImages.push(reader.result);
                    dispatch(changeSharePostInput({ mediaUrl: allBaseImages }))
                    // setbase64(allBaseImages);
                });
                reader.readAsDataURL(e.target.files[0]);
            }
            else {
                addToast("Only .png, .jpg, .jpeg image formats supported.", {
                    appearance: 'error',
                    autoDismiss: true,
                });
            }
        }
    }
    const handleVideoChange = e => {
        var data = e.target.files[0];
        if (!!data) {
            const fileName = data.name.split(".");
            const imageFormat = fileName[fileName.length - 1];
            if (imageFormat === "mp4" || imageFormat === "MP4" || imageFormat === "mov" || imageFormat === "MOV") {
                if (data.size < 5000024) {
                    files.push(...e.target.files);
                    dispatch(changeSharePostInput({ mediaFile: files }))
                    const reader = new FileReader();
                    reader.addEventListener("load", () => {
                        allBaseImages.push(reader.result);
                        dispatch(changeSharePostInput({ mediaUrl: allBaseImages }))

                    });
                    reader.readAsDataURL(e.target.files[0]);
                }
                else {
                    addToast("maximum upload video limit is 5 mb", {
                        appearance: 'error',
                        autoDismiss: true,
                    });
                }
            }
            else {
                addToast("please , Select the video", {
                    appearance: 'error',
                    autoDismiss: true,
                });
            }
        }
    }
    console.log(links, "links...")

    const openPictureFolder = () => {
        if (mediaUrl.length < 5) {
            inputFile.current.click()
        }
        else {
            addToast("you can upload maximum 5 items", {
                appearance: 'error',
                autoDismiss: true,
            });
        }
    }
    const openVideoFolder = () => {
        if (mediaUrl.length < 5) {
            inputVideoFile.current.click()
        }
        else {
            addToast("you can upload maximum 5 items", {
                appearance: 'error',
                autoDismiss: true,
            });
        }
    }
    console.log(mediaUrl, "mediaUrl..")
    const handleClose = () => {
        let clearInput = {
            shareText: "",
            mediaFile: [],
            mediaUrl: [],
        }
        dispatch(changeSharePostInput({ ...HomeState.SharePostInput, ...clearInput }))
        allBaseImages = [],
            files = [],
            links = []
    }

    const removeFile = (index) => {
        mediaUrl.splice(index, 1);
        console.log(mediaUrl, "spliceMediaUrl")
        dispatch(changeSharePostInput({ mediaUrl: mediaUrl }))
        for (let i in mediaFile) {
            if (i == index) {
                mediaFile.splice(i, 1);
                console.log(mediaFile, "mediaFile")
                dispatch(changeSharePostInput({ mediaFile: mediaFile }))
            }
        }
    }
    const handleSharePost = () => {
        if (mediaFile.length > 0 || shareText != "") {
            let picture = []
            let videos = []
            for (let i in mediaFile) {
                const fileName = mediaFile[i].name.split(".");
                const imageFormat = fileName[fileName.length - 1];
                if (imageFormat === "mp4" || imageFormat === "MP4" || imageFormat === "mov" || imageFormat === "MOV") {
                    videos.push(mediaFile[i])
                }
                else {
                    picture.push(mediaFile[i])
                }
            }
            console.log(picture, "picture...")

            const bodyParameters = new FormData();

            // console.log(picture[0], "kdjfhkrtjg")
            picture.forEach(function (image, i) {
                bodyParameters.append('image_' + i, image);
            });
            videos.forEach(function (video, i) {
                bodyParameters.append('video_' + i, video);
            });

            bodyParameters.append("videos", "" + videos.length);
            bodyParameters.append("images", "" + !!picture ? picture.length : "");

            bodyParameters.append("visibility", "" + fileVisibility);
            bodyParameters.append("text", "" + replceMultiStringWithSIngle(shareText) == "" || replceMultiStringWithSIngle(shareText) == " " ? "" : replceMultiStringWithSIngle(shareText));
            dispatch(postUploadApi(bodyParameters))
        }
    }

    return (
        <>
            {/* Modal */}
            <div className="modal fade" id="feeds-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"><img src="assets/images/icon.svg" alt="icon" className="site-icon" />Share a Post</h5>
                            <button type="button" onClick={handleClose} ref={closeEl} className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" >×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="feeds-modal__top d-flex mb-3">
                                <div className="feeds-post__user mr-3">
                                    <img onError={(ev) => ev.target.src = 'assets/images/defaultImage.jpg'} src={!!profileData ? IMAGE_BASE_URL + profileData.profile_image : "assets/images/defaultImage.jpg"} alt="user" />
                                </div>
                                <div className="feeds-post__user__heading">
                                    <h6>{!!profileData ? profileData.name : ""}</h6>
                                    <select name="visibilty" className="form-control" value={fileVisibility} onChange={(e) => changeSharePostInput({ fileVisibility: e.target.value })} >
                                        <option value={0}>Public</option>
                                    </select>
                                </div>
                                <a href="javascript:void(0)" className="btn btn-sm feed-btn ml-auto">Feed</a>
                            </div>
                            <textarea name="feeds" id="feeds-content" onChange={handleChange} value={shareText} cols={30} rows={10} placeholder="What do you want to share with your Audience?" className="form-control" />
                            <div className="grid">
                                {mediaUrl.length > 0 &&
                                    mediaUrl.map((data, index) =>
                                        <div className="media-box" id={index}>
                                            <a href="javascript:void(0)" className="rejected" onClick={() => removeFile(index)}><i class="ri-close-fill" ></i></a>
                                            {data.match("/mp4") ?
                                                <video src={data} /> :
                                                <img src={data} />
                                            }
                                        </div>
                                    )}

                            </div>
                        </div>
                        {links.map((data) => {
                            return <div>
                                <LinkPreview url={data} height='200px' showLoader={true} />
                                {/* <ReactTinyLink
                                        cardSize="small"
                                        showGraphic={true}
                                        maxLine={10}
                                        minLine={10}
                                        url={data}
                                    /> */}
                            </div>
                        })}

                        <div className="modal-footer">
                            <div className="row w-100">
                                <div className="col-md-8">
                                    <div className="feeds-post__type d-flex justify-content-start w-100">
                                        <div className="feeds-post__category"><a href="javascript:void(0)" onClick={openPictureFolder}><i className="ri-image-fill pictures-option" /> Pictures
                                            <input id="uploadfile" type="file" className="d-none" ref={inputFile} onChange={handleFileChange} multiple="true" accept=".png, .jpg, .jpeg, .PNG, .JPG, .JPEG" />
                                        </a></div>
                                        <div className="feeds-post__category"> <a href="javascript:void(0)" onClick={openVideoFolder}><i className="ri-movie-line video-option" /> Videos
                                            <input type="file" name="file" value="" ref={inputVideoFile} id="upload_fle" onChange={handleVideoChange} className="d-none" accept=" video/*" />
                                        </a></div>
                                        <div className="feeds-post__category"> <a href="javascript:void(0)"><i className="ri-links-line link-option"></i> Links</a></div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-right">
                                    <a href="javascript:void(0)" onClick={handleSharePost} className={!!uploadPostLoading ? "btn btn-primary btn-sm disabled" : "btn btn-primary btn-sm"}> Share</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default SharePost