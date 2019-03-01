import {
    SOCIAL_LOGIN_START,
    SOCIAL_LOGIN_SUCCESS,
    SOCIAL_LOGIN_ERROR,
} from './types';
import { loginError, loginSuccess, loginStart } from './SocialAuthActions';

describe('Social Login action creator', () => {
  it('should dispatch LOGIN_USER', () => {
    expect(loginStart({}).type).toEqual(SOCIAL_LOGIN_START);
  });
  it('should dispatch LOGIN_SUCCESS', () => {
    expect(loginSuccess({}).type).toEqual(SOCIAL_LOGIN_SUCCESS);
  });
  it('should dispatch LOGIN_ERROR', () => {
    expect(loginError({}).type).toEqual(SOCIAL_LOGIN_ERROR);
  });
});
