const handleEmailValidation = (validation, emails) => {
    validation.is_valid_email.status = emails.length > 0 ? true : false;
    return validation
}
export{handleEmailValidation}