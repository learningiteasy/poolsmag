const resetPasswordValidation = (validation, resetProps) => {
    validation.is_valid_password.status = resetProps.password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})") ? true : false;
    validation.is_valid_confirmPassword.status = resetProps.password === resetProps.verifyPassword && resetProps.verifyPassword.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})") ? true : false;
    return validation
}

export{resetPasswordValidation}