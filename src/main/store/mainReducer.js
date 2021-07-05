import { combineReducers } from 'redux';
import { HomeReducer } from '../../modules/Home/HomeReducer';
import { LoginReducer } from '../../modules/Login/LoginReducer';
import { SignupReducer } from '../../modules/Signup/SignupReducer';
import  { Authreducer} from '../.././library/common/reducers/AuthReducer'
import  { ForgetPasswordReducer} from '../../modules/ForgetPassword/ForgetPasswordReducer';
import { ResetPasswordReducer } from '../../modules/ResetPassword/ResetPasswordReducer';
import { AccountReducer } from '../../modules/Account/AccountReducer';

export default combineReducers({
    HomeReducer,
    LoginReducer,
    Authreducer,
    SignupReducer,
    ForgetPasswordReducer,
    ResetPasswordReducer,
    AccountReducer
});