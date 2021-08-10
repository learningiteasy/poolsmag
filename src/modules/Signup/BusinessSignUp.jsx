import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signUpDataApi } from '../../library/api/signUpApiService'
import { Input } from '../../library/common/components';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { addValidation, replceMultiStringWithSIngle } from '../../library/utilities/functions'
import { changeIsFinalIndividualInput, changeLoginBusinessInput } from './SignupActions'
import { signUpBusinessValidation } from './validation';

const override = css`   
    width: 40px;
    height: 40px;
    position: absolute;
    top: 80%;
    right: 47%;
`;
const BusinesSignUp = () => {
    const dispatch = useDispatch();
    const passwordElValidation = useRef(null);
    const cofirmPasswordValidation = useRef(null);
    const [businessErr, setbusinessErr] = useState({});
    const SignupState = useSelector(state => state.SignupReducer)
    const { signUpBussiness: { businessName, password, verifyPassword } } = SignupState
    const { signUpIndividual: { individualName, email, phoneNo } } = SignupState
    const { SignupApiResponse: { signupApiLoading } } = SignupState
    const handleChange = (e) => {
        const target = e.target;
        dispatch(changeLoginBusinessInput({ [target.name]: target.value }));
    }
    const businessvalidation = () => {
        const businessErr = {};
        let Valid = true;
        let Name = replceMultiStringWithSIngle(businessName);
        console.log(Name, "Name..")
        if (Name.length == "" && Name.length == " ") {
            businessErr.businessShort = "Please enter name";
            Valid = false;
        }
        setbusinessErr(businessErr);
        return Valid;
    }

    const handleSubmit = () => {
        const Valid = businessvalidation();
        let validation = {
            is_valid_password: { status: false, validation: passwordElValidation },
            is_valid_confirmPassword: { status: false, validation: cofirmPasswordValidation }
        }
        validation = signUpBusinessValidation(validation, SignupState.signUpBussiness)
        let { is_valid_password, is_valid_confirmPassword } = validation
        addValidation(validation)
        if (SignupState.is_individual === "false") {
            if (is_valid_password.status && !!Valid &&
                is_valid_confirmPassword.status &&
                password === verifyPassword) {
                const bodyParameter = {
                    name: individualName,
                    email: email,
                    phone: phoneNo,
                    business_name: businessName,
                    password: password
                }
                dispatch(signUpDataApi(bodyParameter))
            }
        }
        else {
            if (is_valid_password.status &&
                is_valid_confirmPassword.status &&
                password === verifyPassword) {
                const bodyParameter = {
                    name: individualName,
                    email: email,
                    phone: phoneNo,
                    business_name: businessName,
                    password: password
                }
                dispatch(signUpDataApi(bodyParameter))
            }
        }
    }
    const handleBack = () => {
        dispatch(changeIsFinalIndividualInput({ is_individual_final: true }))
    }
    return (
        <div className="step-2 pb-5">
            {SignupState.is_individual === "false" &&
                <div className="form-group">
                    <Input type="text" name="businessName" value={businessName} onChange={handleChange} class="form-control" placeholder="Business name" />
                    {Object.keys(businessErr).map((key) => {
                        return <div className="error-message" >{businessErr[key]}</div>
                    })}
                </div>
            }
            <div className="form-group">
                <Input type="password" name="password" value={password} onChange={handleChange} class="form-control" placeholder="Password" />
                <p style={{ display: "none" }} ref={passwordElValidation} className="error-message">Password must contain at least 8 characters, including upper/lowercase, number and special character </p>
            </div>
            <div className="form-group">
                <Input type="password" name="verifyPassword" value={verifyPassword} onChange={handleChange} class="form-control" placeholder="Verify Password" />
                <p style={{ display: "none" }} ref={cofirmPasswordValidation} className="error-message">The passwords don't match. Please try again.</p>
            </div>
            <div className="form-group">
                <p className="mb-0">By signing up, you agree to the <a href="javascript:void(0)" className="link-color">Terms of Service</a> and <a href="javascript:void(0)" className="link-color">Privacy Policy</a>, including Cookie Use. Others will be able to find you by email or phone number when provided.</p>
            </div>
            <div className="form-group">
                <div className="login-option d-flex flex-column mt-4">
                    <a href="javascript:void(0)" onClick={handleSubmit} className={!!signupApiLoading ?"btn btn-secondary disabled":"btn btn-secondary" }>Sign Up</a>
                    <ClipLoader color={"#fff"} loading={!!signupApiLoading ? true : false} css={override} />
                </div>
            </div>
            <div class="form-group text-right mb-0 steps-control">
                <a href="javascript:void(0)" className="btn btn-primary btn-lg" onClick={handleBack} id="steps-prev">Back</a>
            </div>
        </div>

    )
}
export default BusinesSignUp