import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CreatableSelect from 'react-select/creatable';
import { useToasts } from 'react-toast-notifications';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { inviteApi } from '../../../library/api/HomeApiService';
import { Input } from '../../../library/common/components'
import { addValidation, getCookie } from '../../../library/utilities/functions';
import { changeInviteModelInput, clearinviteapiResponse } from '../HomeActions';
import { handleEmailValidation } from '../Validatin';
const override = css`   
    width: 40px;
    height: 40px;
    position: absolute;
    top: 76%;
    right: 47%;
`;
const InviteModel = () => {
    const dispatch = useDispatch();
    const emailElValidation = useRef();
    const { addToast } = useToasts();
    const invitemodel = useSelector(state => state.HomeReducer)
    const { inviteModelInput: { emails, message } } = invitemodel
    const { inviteApiResponse: { inviteApiLoading, inviteApiStatus, inviteMessage ,inviteApiSuccess } } = invitemodel
    console.log(invitemodel, "invitemodel..");
    useEffect(() => {
        if (!!inviteApiStatus && inviteApiStatus=="200") {
            addToast(inviteMessage, {
                appearance: 'success',
                autoDismiss: true,
            });
            dispatch(clearinviteapiResponse());
        }
    
        if (inviteApiStatus =="400") {
            addToast(inviteMessage, {
                appearance: 'error',
                autoDismiss: true,
            });
            dispatch(clearinviteapiResponse());
        }
    
    }, [inviteApiSuccess])
    const handleSumbit = () => {
        const email = emails.map((data) => data.value)
        let validation = {
            is_valid_email: { status: false, validation: emailElValidation }
        }
        validation = handleEmailValidation(validation, emails)
        let { is_valid_email: { status } } = validation;
        addValidation(validation);
        if (status) {
            const bodyParameter = {
                session_id: getCookie("token_id"),
                email_id: email.join(","),
                message: message

            }
            dispatch(inviteApi(bodyParameter))
        }
    }
    const handleChange = (newValue) => {
        console.log(newValue, 'Value Changed');
    }
    return (
        <div className="modal fade" id="invite-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Invite with a Personlized Email</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div  >
                            <div className="form-group">
                                <CreatableSelect
                                    placeholder="Enter one or more Emails"
                                    isClearable
                                    onChange={(newValue) => dispatch(changeInviteModelInput({ emails: newValue }))}
                                    isMulti
                                />
                                <p style={{ display: "none" }} ref={emailElValidation} className="error-message">Please select atleast on email</p>
                            </div>
                            <div className="form-group">
                                <textarea name="message" className="form-control" placeholder="Write your message" value={message} onChange={(e) => dispatch(changeInviteModelInput({ message: e.target.value }))} />
                            </div>
                            <div className="form-group text-center mt-4">
                                <a name="submit" onClick={handleSumbit} className={!!inviteApiLoading ?"btn btn-primary w-75 disabled" : "btn btn-primary w-75"} >Invite</a>
                                <ClipLoader color={"#fff"} loading={!!inviteApiLoading ? true : false} css={override} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default InviteModel