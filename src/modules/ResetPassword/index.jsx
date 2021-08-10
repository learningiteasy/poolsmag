import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router';
import { css } from "@emotion/react";
import { useToasts } from 'react-toast-notifications';
import ClipLoader from "react-spinners/ClipLoader";
import { resetPasswordDataApi } from '../../library/api/ResetPasswordApiServices';
import { Input } from '../../library/common/components';
import { addDocumentTitle, addValidation } from '../../library/utilities/functions';
import { changeResetPasswordInput, clearResetApiResponse, clearResetPasswordInput } from './ResetPasswordAction';
import { resetPasswordValidation } from './Validation';

const override = css`   
    width: 40px;
    height: 40px;
    position: absolute;
    top: 84%;
    right: 47%;
`;
const ResetPassword = () => {
    const loc = useLocation();
    const token = loc.search.split("=")[1];
    const dispatch = useDispatch();
    const history = useHistory();
    const passwordEl= useRef(null)
    const { addToast } = useToasts();
    const passwordElValidation = useRef(null);
    const confirmPasswordValidation = useRef(null);
    const resetPasswordState = useSelector(state => state.ResetPasswordReducer)
    const { resetPasswordInput: { password, verifyPassword } } = resetPasswordState
    const { resetApiResponse: { resetApiLoading, resetApiSuccess ,resetMessage ,resetApiStatus } } = resetPasswordState
    console.log(resetPasswordState, "resetPasswordState")
    useEffect(() => {
        if (!!resetApiStatus && resetApiStatus=="200") {
            addToast(resetMessage, {
                appearance: 'success',
                autoDismiss: true,
            });
            history.push("/login")
        }

        if (resetApiStatus =="400") {
            addToast(resetMessage, {
                appearance: 'error',
                autoDismiss: true,
            });
            dispatch(clearResetApiResponse());
        }

    }, [resetApiStatus])
    useEffect(() => {
        addDocumentTitle("Reset Password")
        passwordEl.current.focus();
        return () => {
            dispatch(clearResetPasswordInput());
            dispatch(clearResetApiResponse());
        }
    }, [])
    const handleChange = (e) => {
        const target = e.target;
        dispatch(changeResetPasswordInput({ [target.name]: target.value }));
    }
    const handleSumbit = () => {
        let validation = {
            is_valid_password: { status: false, validation: passwordElValidation },
            is_valid_confirmPassword: { status: false, validation: confirmPasswordValidation }
        }
        validation = resetPasswordValidation(validation, resetPasswordState.resetPasswordInput)
        let { is_valid_password, is_valid_confirmPassword } = validation
        addValidation(validation)
        if (is_valid_password.status && is_valid_confirmPassword.status &&
            password == verifyPassword) {
                let bodyParameter ={
                    token: token ,
                    password:password
                }
            dispatch(resetPasswordDataApi(bodyParameter));
        }
    }
    return (
        <div className="form mt-4">
            <div className="form__header d-flex align-items-center mb-4">
                <img src="/poolsMagnic/assets/images/icon.svg" alt="icon" className="site-icon" />
                <h1 className="font-weight-bold mb-0 h4">Reset Password</h1>
            </div>
            <form >
                <div className="form-group">
                    <Input type="password" name="password" ref={passwordEl} value={password} onChange={handleChange} class="form-control" placeholder="Password" />
                    <p style={{ display: "none" }} ref={passwordElValidation} className="error-message">Password must contain at least 8 characters, including upper/lowercase, number and special character </p>
                </div>
                <div className="form-group">
                    <Input type="password" name="verifyPassword" value={verifyPassword} onChange={handleChange} class="form-control" placeholder="Verify Password" />
                    <p style={{ display: "none" }} ref={confirmPasswordValidation} className="error-message">The passwords don't match. Please try again.</p>
                </div>
                <div className="form-group mb-0">
                    <div className="login-option d-flex flex-column mt-4">
                        <a href="javascript:void(0)" onClick={handleSumbit} className={!!resetApiLoading ?"btn btn-secondary disabled": "btn btn-secondary"}>Reset</a>
                        <ClipLoader color={"#fff"} loading={!!resetApiLoading ?true : false} css={override} />
                    </div>
                </div>
            </form>
        </div>
    )
}
export default ResetPassword