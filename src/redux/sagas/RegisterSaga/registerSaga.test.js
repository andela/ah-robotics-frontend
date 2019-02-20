import { put, takeEvery } from 'redux-saga/effects';
import watchRegister, { registerSaga } from './RegisterSaga';
import * as types from '../../actions/RegisterActions/types';

let dispatchedActions = [];

describe(' Login Saga Tests', () => {
  it('should listen for correct actions', () => {
    dispatchedActions = [];
    const generator = watchRegister();
    put({ type: types.REGISTER_START });
    const next = generator.next();
    expect(next.value).toEqual(takeEvery(types.REGISTER_START, registerSaga));
  });
});
