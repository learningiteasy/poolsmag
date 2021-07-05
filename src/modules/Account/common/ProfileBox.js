import React from 'react';
import Input from 'react-select/src/components';

const ProfileBox = ({AccountState}) => {
    // const{GeneralInput :{intro ,specialization ,expertise,address,language}} =AccountState
    console.log(AccountState ,"profileState...")
    return (
        <div className="profile__box">
            <div className="profile__box__heading d-flex align-items-center justify-content-between">
                <h3 className="text-uppercase">General <i className="ri-edit-box-line general-edit" /></h3>
                <input type="submit" name="save" className="btn btn-primary general-setting" defaultValue="Save" />
            </div>
            <div className="edit-general">
                <div className="profile__box__options">
                    {/* Repo Tabs -*/}
                    <ul className="nav nav-tabs py-3 mb-4" id="repoTabs">
                        <li><a href="#intro" data-toggle="tab"><i className="ri-draft-line" />intro</a></li>
                        <li><a href="#specialization" data-toggle="tab"><i className="ri-settings-line" />Specialization</a></li>
                        <li><a href="#Expertise" data-toggle="tab"><i className="ri-user-line" />Expertise</a></li>
                        <li><a href="#Address" data-toggle="tab"><i className="ri-map-pin-line" />Address</a></li>
                        <li><a href="#Language" data-toggle="tab"><i className="ri-global-line" />Language Spoken</a></li>
                    </ul>
                </div>
                {/* Repo Tabs */}
                <div className="tab-content">
                    <div className="tab-pane active" id="intro">
                        <h6 className="text-uppercase mb-3">Enter the information</h6>
                        <textarea name="intro" id className="form-control" defaultValue={""} />
                    </div>
                    <div className="tab-pane" id="specialization">
                        <h6 className="text-uppercase mb-3">Enter the Specialization</h6>
                        <Input type="text" name="specialization" class="form-control" />
                    </div>
                    <div className="tab-pane" id="Expertise">
                        <h6 className="text-uppercase mb-3">Enter the Expertise</h6>
                        <Input type="text" name="expertise" class="form-control" />
                    </div>
                    <div className="tab-pane" id="Address">
                        <h6 className="text-uppercase mb-3">Enter the Address</h6>
                        <Input type="text" name="address" class="form-control" />
                    </div>
                    <div className="tab-pane" id="Language">
                        <h6 className="text-uppercase mb-3">Enter the Languages</h6>
                        <Input type="text" name="language" class="form-control" />
                    </div>
                </div>
            </div>
            <div className="user-info">
                <div className="user-info__blk">
                    <h5 className="user-info__heading mb-3"><i className="ri-draft-line" /> intro</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="user-info__blk">
                    <h5 className="user-info__heading mb-3"><i className="ri-settings-line" /> Specialization</h5>
                    <p>Business Development, Construction</p>
                </div>
                <div className="user-info__blk">
                    <h5 className="user-info__heading mb-3"><i className="ri-user-line" /> Expertise</h5>
                    <p>Business Development, Construction</p>
                </div>
                <div className="user-info__blk">
                    <h5 className="user-info__heading mb-3"><i className="ri-map-pin-line" /> Address</h5>
                    <p>791 Crist Parks, Sashabury, IL 86039-9874</p>
                </div>
                <div className="user-info__blk">
                    <h5 className="user-info__heading mb-3"><i className="ri-global-line" /> Language Spoken</h5>
                    <p>English, Hindi, Arabic, German</p>
                </div>
            </div>
        </div>
    )
}
export default ProfileBox