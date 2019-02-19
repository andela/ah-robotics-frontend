import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../../actions/RegisterActions/types';

function* registerSaga({ payload }) {
  try {
    const response = yield call(axios.post, 'https://ah-robotics-staging.herokuapp.com/api/v1/users/', { user: payload });
    yield put({
      type: types.REGISTER_SUCCESS,
      payload: { user: response.data.user },
    });
  } catch (err) {
    yield put({
      type: types.REGISTER_ERROR,
      payload: { errors: err.response.data.errors },
    });
  }
}

function* watchRegister() {
  yield takeEvery(
    types.REGISTER_START, registerSaga,
);
}

export default watchRegister;
