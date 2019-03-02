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
import ArticleView from './views/ArticleView';
import CreateArticle from './views/CreateArticleView';
import ProfileView from './views/UserProfileView';
import profileEditView from './views/ProfileEditView';
import UpdateArticleView from './views/UpdateArticleView';
import FollowersComponent from './views/FollowersView';
import FollowingComponent from './views/FollowingView';

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
            <Route path="/articles" component={ArticlesView} exact />
            <Route path="/articles/new-story" component={CreateArticle} exact />
            <Route path="/profiles" component={ProfileView} />
            <Route path="/editprofile" component={profileEditView} />
            <Route path="/articles/update/" component={UpdateArticleView} />
            <Route path="/followersprofile" component={FollowersComponent} />
            <Route path="/followingprofile" component={FollowingComponent} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
