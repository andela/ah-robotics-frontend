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
import updateArticlesReducer from './ArticlesReducer/updateArticleReducer';
import deleteArticleReducer from './ArticlesReducer/deleteArticleReducer';
import updateImageReducer from './ArticlesReducer/updateImageReducer';
import likeReducer from './LikeDislikeReducer/likeReducer';
import dislikeReducer from './LikeDislikeReducer/dislikeReducer';
import userFollowReducer from './userFollowReducer/userFollowReducer';

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
  updateArticle: updateArticlesReducer,
  deleteArticle: deleteArticleReducer,
  updateImage: updateImageReducer,
  like: likeReducer,
  dislike: dislikeReducer,
  followUser: userFollowReducer,
});

export default rootReducer;
