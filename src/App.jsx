import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import LoginView from './views/LoginView';
import Error from './views/ErrorView';
import NavigationComponent from './components/Navigation';

const App = () => (
  <BrowserRouter>
    <div>
      <NavigationComponent />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={LoginView} exact />
        <Route component={Error} />

      </Switch>
    </div>
  </BrowserRouter>
    );


export default App;
