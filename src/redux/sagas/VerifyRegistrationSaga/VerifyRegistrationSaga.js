<<<<<<< HEAD
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../../actions/VerifyRegistrationActions/types';


function* verifyRegistrationSaga({ payload }) {
  try {
    const response = yield call(axios.get, `https://ah-robotics-staging.herokuapp.com/api/v1/users/verify/${payload.token}`);
    yield put({
      type: types.VERIFY_SUCCESS,
      payload: { data: response.data },
    });
  } catch (err) {
    yield put({
      type: types.VERIFY_ERROR,
      payload: { errors: err.response },
=======
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

>>>>>>> feat(register): add email verification functionality
    });
  }
}

function* watchVerify() {
  yield takeEvery(
<<<<<<< HEAD
    types.VERIFY_START, verifyRegistrationSaga,
);
=======
    types.VERIFY_START, verifyRegistrationSaga);
>>>>>>> feat(register): add email verification functionality
}

export default watchVerify;
