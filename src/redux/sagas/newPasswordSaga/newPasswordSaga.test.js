import { put, takeEvery } from 'redux-saga/effects';
import watchNewPassword, { newPasswordSaga } from './newPassword';
import * as types from '../../actions/newPasswordActions/types';

let dispatchedActions = [];

describe(' Login Saga Tests', () => {
  it('should listen for correct actions', () => {
    dispatchedActions = [];
    const generator = watchNewPassword();
    put({ type: types.NEW_PASSWORD_START });
    const next = generator.next();
    expect(next.value).toEqual(takeEvery(types.NEW_PASSWORD_START, newPasswordSaga));
  });
});
