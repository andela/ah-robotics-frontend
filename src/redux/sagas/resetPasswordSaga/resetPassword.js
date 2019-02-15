import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../../actions/resetPasswordActions/resetPasswordTypes';


function * resetPassword ({ payload }) {
  try {
    const response = yield call(axios.post, 'https://ah-robotics-staging.herokuapp.com/api/v1/account/forgot_password/', payload);
    yield put({
      type: types.RESET_PASSWORD_SUCCESS,
      payload: {message: response.data.message} 
    });
  } catch (err) {
    yield put({
      type: types.RESET_PASSWORD_ERROR,
      payload: {errors: err.response.data}
    });
  }
}

function * watchResetPassword () {
  yield takeEvery(types.RESET_PASSWORD_START, resetPassword);
}

export default watchResetPassword;