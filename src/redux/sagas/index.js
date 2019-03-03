import { fork, all } from 'redux-saga/effects';
import fetchArticleWatcher from './ArticleSaga/fetchArticlesSaga';
import loginWatcher from './LoginSaga/loginSaga';
import watchRegister from './RegisterSaga/RegisterSaga';
import watchVerify from './VerifyRegistrationSaga/VerifyRegistrationSaga';
import watchResetPassword from './resetPasswordSaga/resetPassword';
import watchNewPassword from './newPasswordSaga/newPassword';
import watchSelectRating from './RatingSaga/RatingSaga';
import postArticleWatcher from './ArticleSaga/postArticleSaga';
import watchUserProfile from './UserProfileSaga/UserProfileSaga';
import watchUserProfilePatch from './UserProfileSaga/UserProfilePatchSaga';
import watchImageUpload from './UserProfileSaga/uploadImageSaga';
import socialAuthWatcher from './SocialAuth/SocialAuthSaga';
import addCommentWatcher from './CommentSaga/addCommentSaga';
import getCommentsWatcher from './CommentSaga/getCommentsSaga';
import deleteCommentWatcher from './CommentSaga/deleteCommentSaga';
import updateCommentWatcher from './CommentSaga/updateCommentSaga';
import updateArticleWatcher from './ArticleSaga/updateArticleSaga';
import deleteArticleWatcher from './ArticleSaga/deleteArticleSaga';
import watchArticleImageUpload from './ArticleSaga/uploadImageSaga';
import watchLikeArticle from './LikeDislikeSaga/likeSaga';
import watchDislikeArticle from './LikeDislikeSaga/dislikeSaga';
import watchfollowingUserProfile from './FollowSaga/userFollowingSaga';
import watchfollowers from './FollowSaga/FollowersSaga';
import watchfollowing from './FollowSaga/FollowingSaga';
import watchFollowUserPost from './FollowSaga/FollowSaga';
import watchunFollowUserPost from './FollowSaga/UnfollowSaga';


export default function* rootSaga() {
  yield all([
    fork(loginWatcher),
    fork(watchRegister),
    fork(watchVerify),
    fork(watchResetPassword),
    fork(watchNewPassword),
    fork(watchSelectRating),
    fork(fetchArticleWatcher),
    fork(watchUserProfile),
    fork(postArticleWatcher),
    fork(watchUserProfilePatch),
    fork(watchImageUpload),
    fork(socialAuthWatcher),
    fork(addCommentWatcher),
    fork(getCommentsWatcher),
    fork(updateCommentWatcher),
    fork(deleteCommentWatcher),
    fork(updateArticleWatcher),
    fork(deleteArticleWatcher),
    fork(watchArticleImageUpload),
    fork(watchLikeArticle),
    fork(watchDislikeArticle),
    fork(watchfollowingUserProfile),
    fork(watchfollowers),
    fork(watchfollowing),
    fork(watchFollowUserPost),
    fork(watchunFollowUserPost),
  ]);
}
