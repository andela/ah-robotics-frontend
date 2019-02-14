import loginWatcher from './LoginSaga/loginSaga';
import { all, fork } from 'redux-saga/effects';
import watchRegister from './RegisterSaga/RegisterSaga';
import watchVerify from './VerifyRegistrationSaga/VerifyRegistrationSaga';


export default function* rootSaga() {
  yield fork(loginWatcher);
  yield fork(watchRegister);
  yield fork(watchVerify);

}
