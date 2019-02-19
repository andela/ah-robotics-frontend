import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import Error from './views/ErrorView';
import NavigationComponent from './views/NavigationVew';
import VerifyRegistrationView from './views/VerifyRegistrationView/index';

const App = () => (
  <BrowserRouter>
    <div>
      <NavigationComponent />
      <Switch>
        <Route path="/" component={HomeView} exact />
        <Route path="/login" component={LoginView} exact />
        <Route path="/register" component={RegisterView} />
        <Route path="/verify/:token" component={VerifyRegistrationView} />
        <Route component={Error} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
