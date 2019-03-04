import { combineReducers } from 'redux';
import loginReducer from './LoginReducer/loginReducer';
import registerReducer from './RegisterReducer/registerReducer';
import verifyReducer from './VerifyRegristrationReducer/verifyRegistrationReducer';
import resetPasswordReducer from './resetPasswordReducer/resetpasswordreducer';
import newPasswordReducer from './newPasswordReducer/newPasswordreducer';
import fetchArticlesReducer from './ArticlesReducer/fetchArticlesReducer';
import postArticlesReducer from './ArticlesReducer/postArticlesReducer';
import ratings from './RatingsReducer/ratingsReducer';
import userProfileReducer from './userProfileReducer/userProfileReducer';
import editProfileReducer from './editProfileReducer/editProfileReducer';
import socialReducer from './SocialAuth/social.reducer';
import addCommentReducer from './CommentReducers/addCommentReducer';
import allCommentsReducer from './CommentReducers/allCommentsReducer';
import updateCommentReducer from './CommentReducers/updateCommentReducer';
import deleteCommentReducer from './CommentReducers/deleteCommentReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  verifyUser: verifyReducer,
  resetPassword: resetPasswordReducer,
  newPassword: newPasswordReducer,
  articles: fetchArticlesReducer,
  createArticle: postArticlesReducer,
  ratings,
  userProfile: userProfileReducer,
  editProfile: editProfileReducer,
  socialAuth: socialReducer,
  addComment: addCommentReducer,
  updateComment: updateCommentReducer,
  deleteComment: deleteCommentReducer,
  getComments: allCommentsReducer,
});

export default rootReducer;
