import { runSaga } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import loginWatcher, {
  loginWorker,
  apiClient,
} from './loginSaga';
import * as types from '../../actions/LoginActions/types';

let dispatchedActions = [];
const fakeStore = {
  dispatch: action => dispatchedActions.push(action),
  getState: () => ({}),
};

describe('user login saga tests', () => {
  it('it should handle user login success', async () => {
    dispatchedActions = [];
    const response = {
      data: {
        user: {
          token: '',
        },

      },
    };
    apiClient.fetchUserLogin = jest.fn(() => Promise.resolve(response));
    await runSaga(fakeStore, loginWorker, { payload: { payload: { username: 'test' } } }).done;
    expect(apiClient.fetchUserLogin.mock.calls.length).toBe(1);
    expect(dispatchedActions).toEqual([{ type: 'LOGIN_SUCESS', payload: { user: { token: '' } } }]);
  });
  it('it should handle user login error', async () => {
    dispatchedActions = [];
    const response = {
      response: {
        data: {
          errors: {
            error: '',
          },
        },
      },
    };
    apiClient.fetchUserLogin = jest.fn(() => Promise.reject(response));
    await runSaga(fakeStore, loginWorker, { payload: { payload: { username: 'test' } } }).done;
    expect(apiClient.fetchUserLogin.mock.calls.length).toBe(1);
    expect(dispatchedActions).toEqual([{ type: 'LOGIN_ERROR', payload: { errors: { error: '' } } }]);
  });
  it('should listen for the required actions', () => {
    const generator = loginWatcher();
    put({ type: types.LOGIN_USER });
    const next = generator.next();
    expect(next.value).toEqual(takeEvery('LOGIN_USER', loginWorker));
  });
});
