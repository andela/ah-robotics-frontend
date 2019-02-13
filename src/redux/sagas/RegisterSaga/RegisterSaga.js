import {call, put, takeEvery} from 'redux-saga/effects';
import * as types from '../../actions/RegisterActions/types';
import axios from 'axios';

function* registerSaga({payload}) {
  try {
    const response = yield call(axios.post, 'https://ah-robotics-staging.herokuapp.com/api/v1/users/', {user: payload});
    yield put({
      type: types.REGISTER_SUCCESS,
      payload: {user: response.data.user}
    });

    yield put({
      type: types.CLEAR_ERRORS,
    });
  } catch (err) {
    yield put({
      type: types.REGISTER_ERROR,
      payload: err.response.data.errors
    });
  }
}

function* watchRegister() {
  yield takeEvery(
    types.REGISTER_START, registerSaga)
}

export default watchRegister;
