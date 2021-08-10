import { replceMultiStringWithSIngle } from "../../library/utilities/functions";

const SocialIconValidation = (validation, soacialIcon) => {
    const { youtube, twitter, linkedin, facebook } = soacialIcon
    console.log(soacialIcon, "facebook..")
    validation.is_valid_youtube.status = (youtube == "" || youtube.match("^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$")) ? true : false;
    validation.is_valid_twiter.status = (twitter == "" || twitter.match("(https:\/\/twitter.com\/(?![a-zA-Z0-9_]+\/)([a-zA-Z0-9_]+))")) ? true : false;
    validation.is_valid_linkedin.status = (linkedin == "" || linkedin.match("https?:\\/\\/(www.)?linkedin.com\\/(mwlite\\/|m\\/)?in\\/[a-zA-Z0-9_.-]+\\/?")) ? true : false;
    validation.is_valid_facebook.status = (facebook == "" || facebook.match("(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/?")) ? true : false;
    return validation
}

const projectFormValidation = (validation, projectProps) => {
    const { title, job_type, address, description } = projectProps;
    let Title = replceMultiStringWithSIngle(title);
    let JobType = replceMultiStringWithSIngle(job_type);
    let Address = replceMultiStringWithSIngle(address);
    let Description = replceMultiStringWithSIngle(description);

    validation.is_valid_title.status = (Title != "" && Title != " ") ? true : false;
    validation.is_valid_job_type.status = (JobType != "" && JobType != " ") ? true : false;
    validation.is_valid_address.status = (Address != "" && Address != " ") ? true : false;
    validation.is_valid_description.status = (Description != "" && Description != " ") ? true : false;
    return validation
}

const employmentFormValidation = (validation, employmentProps) => {
    const { company_name, position, address, description } = employmentProps;
    console.log(company_name, position, address, description, "company_name, position, address, description")
    let Title = replceMultiStringWithSIngle(company_name);
    let JobType = replceMultiStringWithSIngle(position);
    let Address = replceMultiStringWithSIngle(address);
    let Description = replceMultiStringWithSIngle(description);

    validation.is_valid_company_name.status = (Title != "" && Title != " ") ? true : false;
    validation.is_valid_position.status = (JobType != "" && JobType != " ") ? true : false;
    validation.is_valid_address.status = (Address != "" && Address != " ") ? true : false;
    validation.is_valid_description.status = (Description != "" && Description != " ") ? true : false;
    return validation
}


export { SocialIconValidation, projectFormValidation, employmentFormValidation }