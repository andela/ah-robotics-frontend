import {
    SOCIAL_LOGIN_START,
    SOCIAL_LOGIN_SUCCESS,
    SOCIAL_LOGIN_ERROR,
} from '../../actions/socialAuth/types';
import SocialAuthReducer, { initialState } from './social.reducer';

describe('Login with social options reducer tests', () => {
  it('it should have an initial state', () => {
    expect(SocialAuthReducer(initialState, {})).toEqual(initialState);
  });
  it('it should show is loading upon login submit', () => {
  expect(SocialAuthReducer(null, {
    type: SOCIAL_LOGIN_START,
    payload: {},
  }).isLoading).toEqual(true);
  });
  it('it should set message to success upon login success', () => {
    expect(SocialAuthReducer(null, {
      type: SOCIAL_LOGIN_SUCCESS,
      payload: {},
    }).message).toEqual('success');
  });
  it('it should set error to true upon login error', () => {
    expect(SocialAuthReducer(null, {
      type: SOCIAL_LOGIN_ERROR,
      payload: {},
    }).error).toEqual(true);
  });
});
