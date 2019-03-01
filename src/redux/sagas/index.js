import { fork, all } from 'redux-saga/effects';
import fetchArticleWatcher from './ArticleSaga/fetchArticlesSaga';
import loginWatcher from './LoginSaga/loginSaga';
import watchRegister from './RegisterSaga/RegisterSaga';
import watchVerify from './VerifyRegistrationSaga/VerifyRegistrationSaga';
import watchResetPassword from './resetPasswordSaga/resetPassword';
import watchNewPassword from './newPasswordSaga/newPassword';
import watchSelectRating from './RatingSaga/RatingSaga';
import postArticleWatcher from './ArticleSaga/postArticleSaga';
import watchuserProfile from './UserProfileSaga/UserProfileSaga';
import watchuserProfilePatch from './UserProfileSaga/UserProfilePatchSaga';
import watchImageUpload from './UserProfileSaga/uploadImageSaga';
import socialAuthWatcher from './SocialAuth/SocialAuthSaga';

export default function* rootSaga() {
  yield all([
    fork(loginWatcher),
    fork(watchRegister),
    fork(watchVerify),
    fork(watchResetPassword),
    fork(watchNewPassword),
    fork(postArticleWatcher),
    fork(watchSelectRating),
    fork(fetchArticleWatcher),
    fork(watchuserProfile),
    fork(watchuserProfilePatch),
    fork(watchImageUpload),
    fork(socialAuthWatcher),
  ]);
}
