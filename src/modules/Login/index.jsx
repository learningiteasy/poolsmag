import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { css } from "@emotion/react";
import { useToasts } from 'react-toast-notifications';
import ClipLoader from "react-spinners/ClipLoader";
import { loginDataApi } from '../../library/api/LoginApiService';
import { Input } from '../../library/common/components'
import { addDocumentTitle, addValidation, clearCookies, replceMultiStringWithSIngle, setCookie } from '../../library/utilities/functions';
import { changeLoginInput, clearLoginApiResponse, clearLoginInput } from './LoginActions';
import { loginFormValidation } from './validations';
import { Link, useHistory } from 'react-router-dom';
import { changeIsAuth } from '../../library/common/actions/AuthActions';

const override = css`   
    width: 40px;
    height: 40px;
    position: absolute;
    top: 5px;
    right: 47%;
`;

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const { addToast } = useToasts();
  const nameEl = useRef(null)
  const nameElvalidation = useRef(null);
  const passwordElValidation = useRef(null);
  const loginState = useSelector(state => state.LoginReducer)
  const { loginInput: { name, password } } = loginState
  const { loginApiResponse: { loginApiLoading, loginDataResponse, loginApiSuccess, loginApiStatus, loginMessage } } = loginState
  console.log(loginState, "loginState");
  useEffect(() => {
    if (!!loginApiSuccess) {
      addToast(loginMessage, {
        appearance: 'success',
        autoDismiss: true,
      });
      let tokenSplit = loginDataResponse.token.split("|")
      setCookie("token_id", tokenSplit[1], 1);
      setCookie("profile_data", JSON.stringify(loginDataResponse), 1);
      console.log(loginDataResponse, "loginDataResponse..")
      setCookie("individual", loginDataResponse.is_individual, 1);
      dispatch(changeIsAuth({ is_auth: true }))
      history.push("/home")
    }

    if (!loginApiSuccess && !!loginApiStatus) {
      addToast(loginMessage, {
        appearance: 'error',
        autoDismiss: true,
      });
      clearCookies();
      dispatch(clearLoginApiResponse());
    }

  }, [loginApiSuccess])
  useEffect(() => {
    addDocumentTitle("Login")
    nameEl.current.focus();
    return () => {
      dispatch(clearLoginInput())
    }
  }, [])
  const handleChange = (e) => {
    const target = e.target;
    dispatch(changeLoginInput({ [target.name]: target.value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let validation = {
      is_valid_name: { status: false, validation: nameElvalidation },
      is_valid_password: { status: false, validation: passwordElValidation },
    }
    validation = loginFormValidation(validation, loginState.loginInput)
    let { is_valid_name, is_valid_password } = validation
    addValidation(validation)
    if (is_valid_name.status && is_valid_password.status) {
      let bodyParameters = {
        email: name,
        password: password
      }
      dispatch(loginDataApi(bodyParameters));
    }
  }
  return (
    <div className="form mt-4">
      <div className="form__header d-flex align-items-center mb-4">
        <img src="/assets/images/icon.svg" alt="icon" className="site-icon" />
        <h1 className="font-weight-bold mb-0 h4">Login In to PoolsMagnic</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <Input type="text" name="name" ref={nameEl} class="form-control" value={name} onChange={handleChange} placeholder="Email" />
          <p style={{ display: "none" }} ref={nameElvalidation} className="error-message">Please enter valid Email</p>
        </div>
        <div className="form-group">
          <Input type="password" name="password" class="form-control" onChange={handleChange} value={password} placeholder="Password" />
          <p style={{ display: "none" }} ref={passwordElValidation} className="error-message">Please enter Password </p>
        </div>
        <div className="form-group text-center mt-4 position-relative">
          <Input type="submit" name="submit" class="btn btn-primary w-75" disabled={!!loginApiLoading ? true : false} />
          <ClipLoader color={"#fff"} loading={!!loginApiLoading ? true : false} css={override} />
        </div>
        <div className="form-group text-center">
          <Link to="/forget-password" className="link-color">Forget Your sign In Info? </Link>
          <Link to="/signup" className="link-color">Sign Up PoolsMagnic</Link>
        </div>
      </form>
    </div>

  )
}
export default Login