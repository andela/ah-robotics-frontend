import { fork, all } from 'redux-saga/effects';
import loginWatcher from './LoginSaga/loginSaga';
import watchRegister from './RegisterSaga/RegisterSaga';
import watchVerify from './VerifyRegistrationSaga/VerifyRegistrationSaga';
import watchResetPassword from './resetPasswordSaga/resetPassword';
import watchNewPassword from './newPasswordSaga/newPassword';
import fetchArticlesWatcher from './ArticleSaga/fetchArticlesSaga';
import postArticleWatcher from './ArticleSaga/postArticleSaga';f
import watchRegister from './RegisterSaga/RegisterSaga';
import watchVerify from './VerifyRegistrationSaga/VerifyRegistrationSaga';

export default function* rootSaga() {
  yield all([
    fork(loginWatcher),
    fork(watchRegister),
    fork(watchVerify),
    fork(watchResetPassword),
    fork(watchNewPassword),
    fork(fetchArticlesWatcher),
    fork(postArticleWatcher),
    fork(watchRegister),
    fork(watchVerify),
  ])
}

// import loginWatcher from './LoginSaga/loginSaga';
// import { all, fork } from 'redux-saga/effects';
// import watchRegister from './RegisterSaga/RegisterSaga';
// import watchVerify from './VerifyRegistrationSaga/VerifyRegistrationSaga';
//
//
// export default function* rootSaga() {
//   yield fork(loginWatcher);
//   yield fork(watchRegister);
//   yield fork(watchVerify);
//
// }
