import { fork } from 'redux-saga/effects';
import updateCountSaga from './sagas';

export default function* rootSaga() {
  yield fork(updateCountSaga);
}
