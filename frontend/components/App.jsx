import React from 'react';
import { Route, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting/GreetingContainer';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
    <div>
        <header>
        <Link to='/'>
            <img src={window.logo} alt="new_wave logo" />
        </Link>
        <GreetingContainer />
        </header>

        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
    </div>
);

export default App;