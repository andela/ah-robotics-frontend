import {call, put, takeEvery} from 'redux-saga/effects';
import * as types from '../../actions/newPasswordActions/types';
import axios from 'axios';

function* newPasswordSaga({payload}) {
  try {
    const passData = {
      password: payload.password,
      confirm_password: payload.confirm_password
    };
    const response = yield call(axios.put, `http://127.0.0.1:8000/api/v1/account/reset_password/${payload.token}`, passData);
    yield put({
      type: types.NEW_PASSWORD_SUCCESS,
      payload: response.data.user
    });

  } catch (err) {
    // console.log(err.response.data)
    yield put({
      type: types.NEW_PASSWORD_ERROR,
      payload: {errors: err.response.data.errors}

    });
  }
}

function* watchNewPassword() {
  yield takeEvery(
    types.NEW_PASSWORD_START, newPasswordSaga);
}

export default watchNewPassword;