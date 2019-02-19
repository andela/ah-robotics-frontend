import { put, call, takeEvery } from 'redux-saga/effects';
import * as types from '../../actions/LoginActions/types';
import { api } from '../../../utils/auth';

export const apiClient = {
  fetchUserLogin: (payload) => {
    const url = '/users/login/';
    return (api.post(url, payload));
  },
};

export function* loginWorker({ payload }) {
  try {
    const response = yield call(apiClient.fetchUserLogin, { user: payload });
    yield put({
      type: types.LOGIN_SUCCESS,
      payload: { user: response.data.user },
    });
    const { token } = response.data.user;
    localStorage.setItem('accessToken', token);
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
