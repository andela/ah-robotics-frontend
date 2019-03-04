import { put, takeEvery } from 'redux-saga/effects';
import watchVerify, { verifyRegistrationSaga } from './VerifyRegistrationSaga';
import * as types from '../../actions/VerifyRegistrationActions/types';

let dispatchedActions = [];

describe(' Login Saga Tests', () => {
  it('should listen for correct actions', () => {
    dispatchedActions = [];
    const generator = watchVerify();
    put({ type: types.VERIFY_START });
    const next = generator.next();
    expect(next.value).toEqual(takeEvery(types.VERIFY_START, verifyRegistrationSaga));
  });
});
