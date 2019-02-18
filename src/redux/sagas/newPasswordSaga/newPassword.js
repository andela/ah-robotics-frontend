import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../../actions/newPasswordActions/types';

function* newPasswordSaga({ payload }) {
  try {
    const passData = {
      password: payload.password,
      confirm_password: payload.confirm_password,
    };
    const response = yield call(axios.put, `https://ah-robotics-staging.herokuapp.com/api/v1/account/reset_password/${payload.token}`, passData);
    yield put({
      type: types.NEW_PASSWORD_SUCCESS,
      payload: response.data.user,
    });
  } catch (err) {
    yield put({
      type: types.NEW_PASSWORD_ERROR,
      payload: { errors: err.response.data },

    });
  }
}

function* watchNewPassword() {
  yield takeEvery(
    types.NEW_PASSWORD_START, newPasswordSaga,
);
}

export default watchNewPassword;
