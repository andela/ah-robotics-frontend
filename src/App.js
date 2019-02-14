import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home/';
import LoginComponent from './components/Login/';
import RegisterView from './views/RegisterView';
import ErrorComponent from './components/Error/';
<<<<<<< HEAD
import NavigationComponent from './components/Navigation/';
<<<<<<< HEAD
=======
// import NavigationComponent from './components/Navigation/';
>>>>>>> feat(userRegistration): add registration functionality
=======
import VerifyRegistrationView from './views/VerifyRegistrationView';
>>>>>>> feat(register): add email verification functionality
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
<<<<<<< HEAD
          <NavigationComponent/>
=======
          {/*<NavigationComponent/>*/}
>>>>>>> feat(userRegistration): add registration functionality
          <Switch>
            <Route path ="/" component={Home} exact/>
            <Route path ="/login" component={LoginComponent}/>
            <Route path ="/register" component={RegisterView}/>
            <Route path ="/verify/:token" component={VerifyRegistrationView}/>
            <Route component={ErrorComponent}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
