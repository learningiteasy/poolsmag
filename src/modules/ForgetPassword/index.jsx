import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useToasts } from 'react-toast-notifications';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { forgetPasswordDataApi } from '../../library/api/ForgetPasswordApiService';
import { Input } from '../../library/common/components';
import { addDocumentTitle, addValidation } from '../../library/utilities/functions';
import { changeForgetPasswordInput, clearForgetApiResponse, clearForgetPasswordInput } from './ForgetPasswordActions';
import { forgetValidation } from './validation';

const override = css`   
    width: 40px;
    height: 40px;
    position: absolute;
    top: 82%;
    right: 47%;
`;
const ForgetPassword = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { addToast } = useToasts();
    const emailEl= useRef(null);
    const emailElValidation = useRef(null)
    const forgetPasswordState = useSelector(state => state.ForgetPasswordReducer)
    const { forgetPasswordInput: { email } } = forgetPasswordState
    const { forgetApiResponse: { forgetApiSuccess, forgetApiStatus, forgetMessage, forgetApiLoading } } = forgetPasswordState
    console.log(forgetPasswordState);

    useEffect(() => {
        if (!!forgetApiSuccess) {
            addToast(forgetMessage, {
                appearance: 'success',
                autoDismiss: true,
            });
            dispatch(clearForgetApiResponse());
        }
        if (!forgetApiSuccess && !!forgetApiStatus) {
            addToast(forgetMessage, {
                appearance: 'error',
                autoDismiss: true,
            });
            dispatch(clearForgetApiResponse());
        }
    }, [forgetApiSuccess])

    useEffect(() => {
        addDocumentTitle("Forget Password")
        emailEl.current.focus();
        return () => {
            dispatch(clearForgetApiResponse())
            dispatch(clearForgetPasswordInput())
        }
    }, [])
    const handleChange = (e) => {
        const target = e.target;
        dispatch(changeForgetPasswordInput({ [target.name]: target.value }));
    }
    const handleSumbit = () => {
        let validation = {
            is_valid_email: { status: false, validation: emailElValidation }
        }
        validation = forgetValidation(validation, forgetPasswordState.forgetPasswordInput)
        let { is_valid_email } = validation
        addValidation(validation)
        if (is_valid_email.status) {
            const bodyParameter = {
                email: email
            }
            dispatch(forgetPasswordDataApi(bodyParameter))
        }
    }
    return (
        <div className="form mt-4">
            <div className="form__header d-flex align-items-center mb-4">
                <img src="/poolsMagnic/assets/images/icon.svg" alt="icon" className="site-icon" />
                <h1 className="font-weight-bold mb-0 h4">Forget Password</h1>
            </div>
            <form >
                <div className="form-group">
                    <Input type="text" name="email" ref={emailEl} class="form-control" value={email} onChange={handleChange} placeholder="Email" />
                    <p style={{ display: "none" }} ref={emailElValidation} className="error-message">Please enter valid Email </p>
                </div>
                <div className="form-group mb-0">
                    <div className="login-option d-flex flex-column mt-4">
                        <a href="javascript:void(0)" onClick={handleSumbit} className={!!forgetApiLoading ? "btn btn-secondary disabled" : "btn btn-secondary"}>Next</a>
                        <ClipLoader color={"#fff"} loading={!!forgetApiLoading ? true : false} css={override} />
                    </div>
                </div>
            </form>
        </div>

    )
}
export default ForgetPassword