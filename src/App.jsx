import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import Error from './views/ErrorView';
import NavigationComponent from './views/NavigationVew';

const App = () => (
  <BrowserRouter>
    <div>
      <NavigationComponent />
      <Switch>
        <Route path="/" component={HomeView} exact />
        <Route path="/login" component={LoginView} exact />
        <Route component={Error} />

      </Switch>
    </div>
  </BrowserRouter>
    );


export default App;
