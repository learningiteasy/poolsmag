import React from 'react'
import { Feeds, FirstTimeLogin } from './common'
import { useSelector } from 'react-redux';
import Account from '../Account';
import { useEffect } from 'react';
import { getCookie, scroolTop } from '../../library/utilities/functions';

const Home = () => {
    const loginState = useSelector(state => state.LoginReducer)
    const HomeState = useSelector(state => state.HomeReducer)
    const { loginApiResponse: { loginDataResponse } } = loginState
    console.log(loginState, "Loginmodel..");

    useEffect(() => {
        scroolTop()
        $('#feeds-content').on('keypress', function (e) {
            var that = $(this),
                textLength = that.val().length;

            if (textLength < 230) {
                that.css('font-size', '20px');
            } else if (textLength < 250) {
                that.css('font-size', '16px');
            } else if (textLength < 400) {
                that.css('font-size', '15px');
            }
        });

      
    }, [])
    console.log(loginDataResponse ,"kwcevr")
    let firstTimeLogin = !!getCookie("firstTimeLogin")? getCookie("firstTimeLogin"): ""
    return (
        <div>
            {!!firstTimeLogin  ?
                <FirstTimeLogin />
                :
                <><Feeds HomeState={HomeState} /></>
            }
        </div>
    )
}
export default Home