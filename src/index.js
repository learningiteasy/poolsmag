import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './main/store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={'/poolsMagnic'}>
            <App />
        </BrowserRouter>
    </Provider>
  ,
    document.getElementById('root')
);
reportWebVitals();
