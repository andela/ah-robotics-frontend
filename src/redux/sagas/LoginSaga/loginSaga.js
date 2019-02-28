import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../../actions/LoginActions/types';

function* loginWorker({ payload }) {
  try {
    const apiUrl = 'https://ah-robotics-staging.herokuapp.com/api/v1/users/login/';
    const response = yield call(axios.post, apiUrl, { user: payload });
    yield put({
      type: types.LOGIN_SUCCESS,
      payload: { user: response.data.user },
    });
    const { token } = response.data.user;
    localStorage.setItem('accessToken', JSON.stringify(token));
    localStorage.setItem('user', JSON.stringify(response.data.user));
  } catch (error) {
    yield put({
      type: types.LOGIN_ERROR,
      payload: { errors: error.response.data.errors },
    });
  }
}

function* loginWatcher() {
  yield takeEvery(types.LOGIN_USER, loginWorker);
}

export default loginWatcher;
