import { combineReducers } from 'redux';
import loginReducer from './LoginReducer/loginReducer';
import registerReducer from './RegisterReducer/registerReducer';
import verifyReducer from './VerifyRegristrationReducer/verifyRegistrationReducer';
import resetPasswordReducer from './resetPasswordReducer/resetpasswordreducer';
import newPasswordReducer from './newPasswordReducer/newPasswordreducer';
import loginReducer from './LoginReducer/login.reducer';
import fetchArticlesReducer from './ArticlesReducer/fetch.articles.reducer';
import postArticlesReducer from './ArticlesReducer/post.articles.reducer';

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  verifyUser: verifyReducer,
  resetPassword: resetPasswordReducer,
  newPassword: newPasswordReducer,
  articles: articlesReducer,
  articles: fetchArticlesReducer,
  createArticle: postArticlesReducer,
});

export default rootReducer;
