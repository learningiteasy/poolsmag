import React from 'react'
import { useToasts } from 'react-toast-notifications';
import copy from 'copy-to-clipboard';
import InviteModel from './InviteModel';

const FirstTimeLogin = () => {
    const { addToast } = useToasts();
    const handleCopyClip = () => {
        copy('http://167.172.209.57/poolsMagnic/signup', {
            debug: true,
        });
        addToast("copied!", {
            appearance: 'success',
            autoDismiss: true,
        });
    }
    return(
        <section class="invite spacer bg-primary vh-100">
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="invite__box">
                        <h1 className="h2 font-weight-bold">Let's help you build your network!</h1>
                        <h5 className="mb-5">Invite an individual or a Business</h5>
                        <div className="invite-option">
                            <a href="javascript:void(0)" className="link-color" data-toggle="modal" data-target="#invite-modal"><i className="ri-mail-send-line" /> Invite with a Personalized Email</a>
                        </div>
                        <div className="invite-option">
                            <a href="javascript:void(0)" onClick={handleCopyClip} className="link-color"><i className="ri-link" /> Invite by copying a Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <InviteModel />
    </section>
    )
}
export default FirstTimeLogin