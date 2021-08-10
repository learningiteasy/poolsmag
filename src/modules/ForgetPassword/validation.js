const forgetValidation =(validation , forgetProps) => {
    validation.is_valid_email.status = forgetProps.email.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$") ? true : false;
    return validation
}

export{forgetValidation}