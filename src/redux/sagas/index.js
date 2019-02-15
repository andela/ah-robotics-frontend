import { fork, all } from 'redux-saga/effects';
import loginWatcher from './LoginSaga/loginSaga';

export default function* rootSaga() {
  yield all([
    fork(loginWatcher),
  ]);
}
