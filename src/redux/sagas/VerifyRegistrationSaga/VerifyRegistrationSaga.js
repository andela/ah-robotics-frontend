<<<<<<< HEAD
<<<<<<< HEAD
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../../actions/VerifyRegistrationActions/types';


function* verifyRegistrationSaga({ payload }) {
  try {
    const response = yield call(axios.get, `https://ah-robotics-staging.herokuapp.com/api/v1/users/verify/${payload.token}`);
<<<<<<< HEAD
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
=======
import { call, put, takeEvery } from 'redux-saga/effects';
>>>>>>> feat(register): add more tests
import axios from 'axios';
import * as types from '../../actions/VerifyRegistrationActions/types';


function* verifyRegistrationSaga({ payload }) {
  try {
    const response = yield call(axios.get, `https://ah-robotics-staging.herokuapp.com/api/v1/users/verify/${payload.token}`);
    console.log(response.data);
=======
>>>>>>> feat(register): refactor code
    yield put({
      type: types.VERIFY_SUCCESS,
      payload: { data: response.data },
    });
  } catch (err) {
    yield put({
      type: types.VERIFY_ERROR,
<<<<<<< HEAD
      payload: {errors: err.response}

>>>>>>> feat(register): add email verification functionality
=======
      payload: { errors: err.response },
>>>>>>> feat(register): add more tests
    });
  }
}

function* watchVerify() {
  yield takeEvery(
<<<<<<< HEAD
<<<<<<< HEAD
    types.VERIFY_START, verifyRegistrationSaga,
);
=======
    types.VERIFY_START, verifyRegistrationSaga);
>>>>>>> feat(register): add email verification functionality
=======
    types.VERIFY_START, verifyRegistrationSaga,
);
>>>>>>> feat(register): add more tests
}

export default watchVerify;
