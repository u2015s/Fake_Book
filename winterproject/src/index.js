import React from 'react';
import 'tachyons'
import ReactDOM from 'react-dom';
import App from './components/App'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import {BrowserRouter, Route} from 'react-router-dom'
import reducers from './reducers' 
import Signupform from './components/Signupform';

const store = createStore(
    reducers,
    {
        auth: {authenticated: localStorage.getItem('token')}
    },
    applyMiddleware(reduxThunk)
)


ReactDOM.render( 
<Provider store ={store}>
    <BrowserRouter>
        <div>
        < App / >  
        </div>
    </BrowserRouter>
</Provider>, document.querySelector('#root'));