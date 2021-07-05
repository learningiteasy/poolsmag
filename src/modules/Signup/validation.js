import { replceMultiStringWithSIngle } from "../../library/utilities/functions";

const signUpIndividualValidation = (validation, signupProps) => {
    let Name = replceMultiStringWithSIngle(signupProps.individualName);
    validation.is_valid_name.status = (Name != "" && Name != " ") ? true : false;
    validation.is_valid_email.status = signupProps.email.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$") ? true : false;
    validation.is_valid_phone.status = signupProps.phoneNo != "" && signupProps.phoneNo.match("^(\\+\\d{1,3}( )?)?((\\(\\d{1,3}\\))|\\d{1,3})[- .]?\\d{3,4}[- .]?\\d{4}$") ? true : false;
    return validation
}
const signUpBusinessValidation = (validation, signupProps) => {
    validation.is_valid_password.status = signupProps.password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})") ? true : false;
    validation.is_valid_confirmPassword.status = signupProps.password === signupProps.verifyPassword && signupProps.verifyPassword.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})") ? true : false;
    return validation
}
export { signUpIndividualValidation, signUpBusinessValidation }