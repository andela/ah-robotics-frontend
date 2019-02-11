import { put, takeEvery } from 'redux-saga/effects';
import * as types from '../containers/app/state/types';
function* updateCount(action) {
  try {
    yield put({ type: types.COUNT_UPDATE_SUCCESS, count: action.payload });
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* updateCountSaga() {
  yield takeEvery(types.COUNT_UPDATE, updateCount);
}

export default updateCountSaga;
