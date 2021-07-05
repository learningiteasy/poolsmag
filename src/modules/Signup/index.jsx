import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { useToasts } from 'react-toast-notifications';
import { Input } from '../../library/common/components'
import { addDocumentTitle, addValidation } from '../../library/utilities/functions'
import BusinesSignUp from './BusinessSignUp'
import { changeIsFinalIndividualInput, changeIsIndividualInput, changeLoginBusinessInput, changeLoginIndividualInput, clearSignupApiResponse, clearSignupPage } from './SignupActions'
import { signUpIndividualValidation } from './validation';


const Signup = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const nameRef = useRef(null)
    const nameElvalidation = useRef(null);
    const emailElvalidation = useRef(null);
    const PhoneElvalidation = useRef(null);
    const { addToast } = useToasts();
    const SignupState = useSelector(state => state.SignupReducer)
    const { signUpIndividual: { individualName, email, phoneNo } } = SignupState
    const { SignupApiResponse: { signupApiSuccess, signupApiStatus, signupMessage } } = SignupState
    console.log(SignupState, "SignupState")
    console.log(SignupState.is_individual_final, "is_individual_final")

    useEffect(() => {
        if (!!signupApiSuccess) {
            addToast(signupMessage, {
                appearance: 'success',
                autoDismiss: true,
            });
            history.push("/login")
        }

        if (!signupApiSuccess && !!signupApiStatus) {
            addToast(signupMessage, {
                appearance: 'error',
                autoDismiss: true,
            });
            dispatch(clearSignupApiResponse());
        }

    }, [signupApiSuccess])
    useEffect(() => {
        addDocumentTitle("Sign Up")
        nameRef.current.focus();
        return () => {
            dispatch(clearSignupPage());
            dispatch(clearSignupApiResponse());
            dispatch(changeIsFinalIndividualInput({ is_individual_final: true }));
            dispatch(changeIsFinalIndividualInput({ is_individual: "true" }));
        }
    }, [])
    const handleSumbit = () => {
        let validation = {
            is_valid_name: { status: false, validation: nameElvalidation },
            is_valid_email: { status: false, validation: emailElvalidation },
            is_valid_phone: { status: false, validation: PhoneElvalidation }
        }
        validation = signUpIndividualValidation(validation, SignupState.signUpIndividual)
        let { is_valid_name, is_valid_email, is_valid_phone } = validation
        addValidation(validation)
        if (is_valid_name.status && is_valid_email.status && is_valid_phone.status) {
           if(SignupState.is_individual === "true") {
            dispatch(changeLoginBusinessInput({ businessName: "" })); 
           }
            dispatch(changeIsFinalIndividualInput({ is_individual_final: SignupState.is_individual }));
        }
    }

    const handleChange = (e) => {
        const target = e.target;
        dispatch(changeLoginIndividualInput({ [target.name]: target.value }));
    }
    return (
        <div className="form mt-4">
            <div className="form__header d-flex align-items-center mb-4">
                <img src="/assets/images/icon.svg" alt="icon" className="site-icon" />
                <h1 className="font-weight-bold mb-0 h4">Create your account</h1>
            </div>
            {SignupState.is_individual_final == true ?
                <form noValidate={true}>
                    <div className="step-1 pb-5">
                        <div className="form-group">
                            <Input type="text" name="individualName" ref={nameRef} value={individualName} onChange={handleChange} class="form-control" placeholder="Full Name" />
                            <p style={{ display: "none" }} ref={nameElvalidation} className="error-message">Please enter Full Name</p>
                        </div>
                        <div className="form-group">
                            <Input type="Email" name="email" value={email} class="form-control" onChange={handleChange} placeholder="Email ID" />
                            <p style={{ display: "none" }} ref={emailElvalidation} className="error-message">Please enter Email ID </p>
                        </div>
                        <div className="form-group">
                            <Input type="tel" name="phoneNo" value={phoneNo} class="form-control" onChange={handleChange} placeholder="Phone Number" />
                            <p style={{ display: "none" }} ref={PhoneElvalidation} className="error-message">Please enter valid Phone Number</p>
                        </div>
                        <div className="form-group">
                            <div className="custom-radio d-flex">
                                <div className="custom-radio__btn mr-3">
                                    <Input type="radio" name="account" id="Individual" value={true} checked={SignupState.is_individual == "true" ? "checked" : ""} onChange={e => dispatch(changeIsIndividualInput({ is_individual: e.target.value }))} />
                                    <label htmlFor="Individual" class="btn btn-primary">Individual</label>
                                </div>
                                <div className="custom-radio__btn">
                                    <Input type="radio" name="account" id="Business" value={false} checked={SignupState.is_individual == "false" ? "checked" : ""} onChange={e => dispatch(changeIsIndividualInput({ is_individual: e.target.value }))} />
                                    <label htmlFor="Business" class="btn btn-primary">Business</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group text-right mb-0 steps-control">
                            <a href="javascript:void(0)" onClick={handleSumbit} class="btn btn-primary btn-lg" id="steps-next">Next</a>
                        </div>
                    </div>
                </form> :
                <BusinesSignUp />}

        </div>

    )
}
export default Signup