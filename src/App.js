import { BrowserRouter as Router, Switch } from 'react-router-dom';
import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { PoolsRoutes } from './main/routes';
import { useSelector } from 'react-redux';

function App() {
    const authState = useSelector(state => state.Authreducer);
    console.log(authState.is_auth, "auth State")
    return (
        <ToastProvider>
        <Router>
            <Switch>
                <PoolsRoutes is_auth={authState.is_auth} />
            </Switch>
        </Router>
        </ToastProvider>
    )
}

export default App;
