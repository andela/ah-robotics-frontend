import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home/';
import LoginComponent from './components/Login/';
import RegisterView from './views/RegisterView';
import ErrorComponent from './components/Error/';
<<<<<<< HEAD
import NavigationComponent from './components/Navigation/';
=======
// import NavigationComponent from './components/Navigation/';
>>>>>>> feat(userRegistration): add registration functionality
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
            <Route component={ErrorComponent}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
