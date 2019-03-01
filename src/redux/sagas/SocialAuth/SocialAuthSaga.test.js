import { runSaga } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import * as types from '../../actions/socialAuth/types';
import socialAuthWatcher, { SocialAuthSaga, apiClient } from './SocialAuthSaga';

let dispatchedActions = [];
const fakeStore = {
  dispatch: action => dispatchedActions.push(action),
  getState: () => ({ isLoading: false }),
};

describe('Social authentication saga tests', () => {
  it('it should login a user with social auth successfully', async () => {
    dispatchedActions = [];
    const payload = {
            data: {
                user: {
                },
              token: 'dfhdhf',
    },
    };
    apiClient.fetchSocialLoginOptions = jest.fn(() => Promise.resolve(payload));
    await runSaga(fakeStore, SocialAuthSaga, { payload: { userDetails: {}, authData: {} } }).done;
    expect(apiClient.fetchSocialLoginOptions.mock.calls.length).toBe(1);
  });
  it('it should handle social login error', async () => {
    dispatchedActions = [];
    const errors = {
            data: {
                errors: {
                },
        },
    };
    apiClient.fetchSocialLoginOptions = jest.fn(() => Promise.reject(errors));
    await runSaga(fakeStore, SocialAuthSaga, { payload: {} }).done;
    expect(apiClient.fetchSocialLoginOptions.mock.calls.length).toBe(1);
    expect(dispatchedActions).toEqual([{ payload: { errors: {} }, type: 'SOCIAL_LOGIN_ERROR' }]);
  });

  it('should listen for the required actions', () => {
    const generator = socialAuthWatcher();
    put({ type: 'SOCIAL_LOGIN_START' });
    const next = generator.next();
    expect(next.value).toEqual(takeEvery('SOCIAL_LOGIN_START', SocialAuthSaga));
  });
});
