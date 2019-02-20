import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginView from './views/LoginView';
import Error from './views/ErrorView';
import NavigationComponent from './views/NavigationVew';
import ArticlesView from './views/ArticlesView';
import CreateArticle from './components/Editor';

const App = () => (
  <BrowserRouter>
    <div>
      <NavigationComponent />
      <Switch>
        <Route path="/" component={ArticlesView} exact />
        <Route path="/login" component={LoginView} exact />
        <Route path="/articles" component={CreateArticle} exact />
        <Route component={Error} />

      </Switch>
    </div>
  </BrowserRouter>
    );


export default App;
