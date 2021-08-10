import { replceMultiStringWithSIngle } from "../../library/utilities/functions";

const loginFormValidation = (validation, loginProps) => {
    const { name, password} =loginProps
    let Name = replceMultiStringWithSIngle(name);
    validation.is_valid_name.status = (Name != "" && Name != " " )? true : false;
    validation.is_valid_password.status = password!="" ? true : false;
    return validation
}
export{  loginFormValidation}