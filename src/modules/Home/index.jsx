import React from 'react'
import { FirstTimeLogin } from './common'
import { useSelector } from 'react-redux';
import Account from '../Account';

const Home = () => {
    const LoginModel = useSelector(state => state.LoginReducer)
    const { loginApiResponse: { loginDataResponse } } = LoginModel
    console.log(LoginModel, "Loginmodel..");

    return (
        <div>
        {!!loginDataResponse &&!!loginDataResponse.first_time_login ?
           <FirstTimeLogin/>
         :
        <><Account/></>
        }
        </div>
    )
}
export default Home