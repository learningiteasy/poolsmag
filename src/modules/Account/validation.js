import { replceMultiStringWithSIngle } from "../../library/utilities/functions";

const SocialIconValidation = (validation, soacialIcon) => {
    const { youtube, twitter, linkedin,facebook} =soacialIcon
    console.log(soacialIcon ,"facebook..")
    validation.is_valid_youtube.status =(youtube == "" || youtube.match("^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$"))? true : false;
    validation.is_valid_twiter.status = (twitter =="" || twitter.match("(https:\/\/twitter.com\/(?![a-zA-Z0-9_]+\/)([a-zA-Z0-9_]+))"))? true : false;
    validation.is_valid_linkedin.status = (linkedin=="" || linkedin.match("https?:\\/\\/(www.)?linkedin.com\\/(mwlite\\/|m\\/)?in\\/[a-zA-Z0-9_.-]+\\/?")) ? true : false;
    validation.is_valid_facebook.status = (facebook=="" || facebook.match("(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/?")) ? true : false;
    return validation
}
export{SocialIconValidation}