import {call, put, takeEvery} from 'redux-saga/effects';
import * as types from '../../actions/VerifyRegistrationActions/types';
import axios from 'axios';


function* verifyRegistrationSaga({payload}) {
  try {
    const response = yield call(axios.get, `http://127.0.0.1:8000/api/v1/users/verify/${payload.token}`);
    console.log(response.data)
    yield put({
      type: types.VERIFY_SUCCESS,
      payload: {data: response.data}
    });

  } catch (err) {
    yield put({
      type: types.VERIFY_ERROR,
      payload: {errors: err.response}

    });
  }
}

function* watchVerify() {
  yield takeEvery(
    types.VERIFY_START, verifyRegistrationSaga);
}

export default watchVerify;
