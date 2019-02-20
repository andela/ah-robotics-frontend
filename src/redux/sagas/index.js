
import { fork, all } from 'redux-saga/effects';
import loginWatcher from './LoginSaga/loginSaga';
<<<<<<< HEAD
import watchRegister from './RegisterSaga/RegisterSaga';
import watchVerify from './VerifyRegistrationSaga/VerifyRegistrationSaga';
import watchResetPassword from './resetPasswordSaga/resetPassword';
import watchNewPassword from './newPasswordSaga/newPassword';
import fetchArticlesWatcher from './ArticleSaga/articlesSaga';
=======
import fetchArticlesWatcher from './ArticleSaga/fetchArticlesSaga';
import postArticleWatcher from './ArticleSaga/postArticleSaga';
>>>>>>> 6821dfe... ft(articles): posting article

export default function* rootSaga() {
  yield all([
    fork(loginWatcher),
    fork(watchRegister),
    fork(watchVerify),
    fork(watchResetPassword),
    fork(watchNewPassword),
    fork(fetchArticlesWatcher),
    fork(postArticleWatcher),
  ]);
}
