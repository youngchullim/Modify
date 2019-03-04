import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute }from '../util/route_util';

import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';

import UnauthComponent from './unauth';
import AuthComponent from './auth';

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route path="/" component={GreetingContainer}/>
      </Switch>
      
      
      {/* <Switch>
        <Route component={UnauthComponent} />
        greeting component renders auth component when logged in
        <ProtectedRoute component={AuthComponent} />
      </Switch> */}
    </div>
  )
};

export default App;
