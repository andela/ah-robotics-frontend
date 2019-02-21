import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import Error from './components/Error/index';
import ResetPasswordView from './views/ResetPasswordView';
import NavigationComponent from './views/NavigationView';
import NewPasswordView from './views/NewPasswordView';
import VerifyRegistrationView from './views/VerifyRegistrationView/index';
import ArticlesView from './views/ArticlesListingView';
import CreateArticle from './views/CreateArticleView';
import ArticleView from './views/ArticleView';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavigationComponent />
          <Switch>
            <Route path="/login" component={LoginView} exact />
            <Route path="/register" component={RegisterView} />
            <Route path="/verify/:token" component={VerifyRegistrationView} />
            <Route path="/resetpassword" component={ResetPasswordView} />
            <Route path="/reset_password/:token" component={NewPasswordView} />
            <Route path="/" component={ArticlesView} exact />
            <Route path="/article/:slug" component={ArticleView} />
            <Route path="/login" component={LoginView} exact />
            <Route path="/articles" component={ArticlesView} exact />
            <Route path="/articles/new-story" component={CreateArticle} exact />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;