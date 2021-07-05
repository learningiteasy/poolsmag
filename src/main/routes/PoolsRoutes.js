import { Route, Redirect, Switch } from "react-router-dom";
import { PrivateRoute, ProtectedRoute } from ".";
import { loginLogo } from "../../library/urls/images";
import { is_page_exist_app, is_page_exist_private, is_page_exist_protected } from '../../library/utilities/functions';
import { Account, ForgetPassword, Home, Login, Main, ResetPassword, Signup } from "../../modules";
import { Toolbar } from "../../library/common/components";

const PoolsRoutes = ({ is_auth }) => {
    const isPageProtected = is_page_exist_protected();
    const isPagePrivate = is_page_exist_private();
    const is_page_exist = is_page_exist_app();

    if (is_page_exist) {
        if (isPageProtected) {
            return (
                <Route>
                    <div className="login-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 mx-auto">
                                    {loginLogo()}
                                    <ProtectedRoute
                                        exact
                                        path="/main"
                                        isauth={is_auth}
                                        isPageProtected={isPageProtected}
                                        component={Main} />
                                    <ProtectedRoute
                                        path="/login"
                                        isauth={is_auth}
                                        isPageProtected={isPageProtected}
                                        component={Login} />
                                    <ProtectedRoute
                                        path="/signup"
                                        isauth={is_auth}
                                        isPageProtected={isPageProtected}
                                        component={Signup} />
                                    <ProtectedRoute
                                        path="/forget-password"
                                        isauth={is_auth}
                                        isPageProtected={isPageProtected}
                                        component={ForgetPassword} />
                                    <ProtectedRoute
                                        path="/change-password"
                                        isauth={is_auth}
                                        isPageProtected={isPageProtected}
                                        component={ResetPassword} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Route>
            )
        }

        if (isPagePrivate) {
            return (
                <Route>
                    <Toolbar />
                    <PrivateRoute
                        path="/home"
                        isauth={is_auth}
                        isPagePrivate={isPagePrivate}
                        component={Home} />
                    <PrivateRoute
                        path="/account"
                        isauth={is_auth}
                        isPagePrivate={isPagePrivate}
                        component={Account} />
                </Route>
            )
        }
    }
    else {
        return (
            <Route>
                <Redirect
                    to={is_auth ? "/home" : "/main"}
                />
            </Route>
        )
    }
}
export default PoolsRoutes